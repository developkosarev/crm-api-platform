'use client';

import { useLocale, useTranslations } from 'next-intl';

export const AboutUsPage = () => {
  const t = useTranslations('AboutUs');
  const locale = useLocale();
  console.log('locale', locale);

  return <p>{t('title')}</p>;
};
