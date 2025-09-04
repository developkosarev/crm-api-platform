'use client'

import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { useTranslations } from 'next-intl';

type Props = {
  session: Session | null;
};

export const HomePage = ({session}: Props) => {
  const t = useTranslations('Index');
  function onLogoutClick() {
    signOut();
  }

  return (
    <div className='flex-grow p-6 md:overflow-y-auto md:p-12 min-h-[70vh]'>
      <h1>{t('title')}</h1>
    </div>
  );
}
