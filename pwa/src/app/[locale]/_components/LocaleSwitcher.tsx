import {useLocale, useTranslations} from 'next-intl';
import {Link, usePathname} from '~/src/i18n/navigation';

export const LocaleSwitcher = () => {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const otherLocale = locale === 'en' ? 'de'  : 'ru';
  console.log('otherLocale', otherLocale)
  const pathname = usePathname();

  return (
    <Link href={pathname} locale={otherLocale}>
      {t('switchLocale', {locale: otherLocale})}
    </Link>
  );
}