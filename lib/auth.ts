import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/lib/prisma';
import { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email || profile.emails?.[0]?.email || null,
          role: 'USER', // GitHub юзерам по умолчанию — USER
        };
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: 'USER', // по умолчанию, можно менять
        };
      },
    }),

    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Missing email or password');
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || user.password !== credentials.password) {
          throw new Error('Invalid email or password');
        }

        if (user.isBlocked) {
          throw new Error('Your account has been blocked.');
        }

        return {
          id: user.id.toString(),
          name: user.name,
          email: user.email,
          role: user.role || 'ADMIN', // достаем роль из бд или админ по дкфолту
        };
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      // При первом входе добавляем роль и isBlocked
      if (user) {
        token.role = user.role;
        // Загружаем isBlocked при логине через Credentials
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email! },
          select: { isBlocked: true },
        });
        token.isBlocked = dbUser?.isBlocked ?? false;
      }

      // Если уже залогинен и нет isBlocked, подгружаем
      if (token.email && token.isBlocked === undefined) {
        const dbUser = await prisma.user.findUnique({
          where: { email: token.email },
          select: { isBlocked: true, role: true },
        });
        if (dbUser) {
          token.role = dbUser.role;
          token.isBlocked = dbUser.isBlocked;
        }
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string;
        session.user.isBlocked = token.isBlocked as boolean;
      }
      return session;
    },
  },

  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signOut',
    error: '/auth/error', // Error page URL
  },

  secret: process.env.NEXTAUTH_SECRET,
  debug: false,
};
