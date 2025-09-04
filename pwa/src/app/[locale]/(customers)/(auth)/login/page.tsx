import { LocalePageProps } from '@/types';
import { getTranslations } from 'next-intl/server';
import { ClientLoginPage } from './components/ClientLoginPage';

type MetaDataProps = {
  params: LocalePageProps;
};

export async function generateMetadata({ params }: MetaDataProps) {
  const { locale } = await params;
  console.log('locale', locale);
  const t = await getTranslations({
    locale,
    namespace: 'metadata.clientLogin',
  });

  return {
    title: t('title'),
    descritpion: t('descritpion'),
    keywords: t('keywords'),
  };
}

export default function Page() {
  return <ClientLoginPage />;
}
