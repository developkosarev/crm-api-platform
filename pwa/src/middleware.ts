import {NextRequest} from 'next/server';
import {withAuth} from 'next-auth/middleware';
import createMiddleware from 'next-intl/middleware';
import {routing} from '@/i18n/routing';

const publicPages = [
  '/',
  '/login',
  '/about-us',
  '/blog',
  '/contact',
  '/services',
  // (/secret requires auth)
];

const intlMiddleware = createMiddleware(routing);

const authMiddleware = withAuth(
    // Note that this callback is only invoked if
    // the `authorized` callback has returned `true`
    // and not for pages listed in `pages`.
    (req) => intlMiddleware(req),
    {
      callbacks: {
        authorized: ({token}) => token != null
      },
      pages: {
        signIn: '/login'
      }
    }
);

export default function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
      `^(/(${routing.locales.join('|')}))?(${publicPages
          .flatMap((p) => (p === '/' ? ['', '/'] : p))
          .join('|')})/?$`,
      'i'
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);
  console.log(req.nextUrl.pathname)
  console.log(isPublicPage)

  if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    return (authMiddleware as any)(req);
  }
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)']
};