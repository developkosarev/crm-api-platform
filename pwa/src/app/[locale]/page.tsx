import Footer from '@/_components/footer';
import { MenuNavigation } from '@/_components/molecules';
import { authConfig } from '@/config/auth';
import { getServerSession } from 'next-auth';
import { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { HomePage } from './HomePage';

type MetaDataProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: MetaDataProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.homepage' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
  };
}

export default async function DefaultLayout() {
  const session = await getServerSession(authConfig);
  return (
    <>
      {/*<Providers>*/}
      <MenuNavigation />
      <HomePage session={session} />
      <Footer />
      {/*</Providers>*/}
    </>
  );
}
