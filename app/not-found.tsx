'use client';
import { useTranslations } from 'next-intl';

const NotFound = () => {
  const t = useTranslations('404');
  return (
    <>
      <div className="mx-auto max-w-[1250px] px-4 py-8">
        <h1 className="mb-4 text-4xl font-bold">{t('title')}</h1>
        <p className="text-lg text-gray-600">{t('description')}</p>
        <a href="/" className="mt-4 inline-block text-blue-500 hover:underline">
          {t('button')}
        </a>
      </div>
    </>
  );
};

export default NotFound;
