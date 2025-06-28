import { getTranslations } from 'next-intl/server';
import Form from '../../components/custom/NewClient';

export default async function AdminPage() {
  const t = await getTranslations('AdminPage');

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-4 text-center text-3xl font-bold">{t('title')}</h1>
      <p className="mb-5 text-center">{t('description')}</p>
      <Form />
    </div>
  );
}
