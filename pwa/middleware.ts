import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default withAuth(
  async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    // Здесь твоя кастомная логика
    if ((token as any)?.error === "RefreshAccessTokenError") {
      console.log("=============== 99 ======================");
      return NextResponse.redirect(new URL("/login", req.url));
    }

    //const error = req.cookies.get("auth_error")?.value;
    //
    //if (error === "RefreshAccessTokenError") {
    //  console.log("=== COOKIE ERROR DETECTED ===");
    //
    //  // Удаляем cookie, чтобы не зациклить редирект
    //  const res = NextResponse.redirect(new URL("/login", req.url));
    //  res.cookies.delete("auth_error");
    //  return res;
    //}

    return NextResponse.next(); // продолжить выполнение
  },
  {
    pages: {
      signIn: "/login", // если пользователь неавторизован
    },
  }
);

export const config = {
  matcher: ['/profile', '/profile-client'], //'/dashboard/:path*'
};

//export { default } from 'next-auth/middleware'
//
//export const config = {
//  matcher: ['/profile', '/profile-client', '/dashboard/:path*']
//}
