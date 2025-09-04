import Footer from '@/_components/footer';
import { MenuNavigation } from '@/_components/molecules';
import { authConfig } from '@/config/auth';
import { LocalePageProps } from '@/types';
import { getServerSession } from 'next-auth';
import { getTranslations } from 'next-intl/server';
import { HomePage } from './HomePage';

type MetaDataProps = {
  params: LocalePageProps;
};

export async function generateMetadata({ params }: MetaDataProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.homepage' });

  return {
    title: t('title'),
    descritpion: t('descritpion'),
    keywords: t('keywords'),
  };
}

export default async function DefaultLayout() {
  const session = await getServerSession(authConfig);
  return (
    <>
      {/*<Providers>*/}
      {/*<ServerHeader />*/}
      <MenuNavigation />
      <HomePage session={session} />
      <Footer />
      {/*</Providers>*/}
    </>
  );
}
