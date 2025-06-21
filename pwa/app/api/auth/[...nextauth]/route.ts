import NextAuth from "next-auth"
import {authConfig} from "./../../../../config/auth";

// /api/auth/signin
// /api/auth/signout

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }
