import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de', 'ru'],
  defaultLocale: 'de',
  localePrefix: 'as-needed'
});