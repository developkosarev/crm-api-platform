import { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

type MetaDataProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: MetaDataProps) {
  const { locale } = await params;
  console.log('locale', locale);
  const t = await getTranslations({ locale, namespace: 'metadata.shop' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
  };
}

export default function Secret() {
  return <p>Shop Page</p>;
}
