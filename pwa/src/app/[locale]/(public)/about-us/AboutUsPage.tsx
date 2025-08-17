'use client';

import Link from 'next/link';
import {useLocale, useTranslations} from 'next-intl';
import PageLayout from '../../_components/PageLayout';


export const AboutUsPage = () => {
  const t = useTranslations('AboutUs');
  const locale = useLocale();
  console.log('locale', locale)

  return (
    <PageLayout title={t('title')}>
     <p>{t('title')}</p>
    </PageLayout>
  );
}