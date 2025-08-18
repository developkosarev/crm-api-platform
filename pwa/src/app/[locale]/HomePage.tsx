import { Link } from '@/i18n/navigation';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { useLocale, useTranslations } from 'next-intl';

type Props = {
  session: Session | null;
};

export const HomePage = ({session}: Props) => {
  const t = useTranslations('Index');
  const locale = useLocale();
  function onLogoutClick() {
    signOut();
  }

  return (
    <div>
      <h1>{t('title')}</h1>
            {session?.user?.name ? (
        <>
          <p>{t('loggedIn', {username: session.user.name})}</p>
          <p>
            <Link href='/secret'>{t('secret')}</Link>
          </p>
          <button onClick={onLogoutClick} type="button">
            {t('logout')}
          </button>
        </>
      ) : (
        <>
          <p>{t('loggedOut')}</p>
          <Link className='text-green-600' href='/login'>{t('login')}</Link>
        </>
      )}
    </div>
  );
}