import type { AuthOptions, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { decodeJwt } from 'jose'

export const authConfig: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Username", type: "email", required: true, placeholder: "user@example.com" },
        password: { label: "Password", type: "password", required: true }
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) return null;

        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const res = await fetch("http://php/api/login", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/ld+json" }
        })
        const data = await res.json()

        // If no error and we have user data, return it
        if (res.ok && data.token) {
          const decoded = decodeJwt(data.token)
          console.log('00-authorize-decode')
          console.log(decoded)
          console.log('00-authorize-data')
          console.log(data)

          if (!decoded) { return null }

          if (decoded.iat !== undefined) {
            const decodeIat = new Date(decoded.iat * 1000);
            const iatFormatted = `${decodeIat.getDate()}.${decodeIat.getMonth() + 1}.${decodeIat.getFullYear()} ${decodeIat.getHours()}:${decodeIat.getMinutes()}:${decodeIat.getSeconds()}`;
            console.log(`00-authorize-iat: ${iatFormatted}`);
          }

          if (decoded.exp !== undefined) {
            const decodeExp = new Date(decoded.exp * 1000);
            const expFormatted = `${decodeExp.getDate()}.${decodeExp.getMonth() + 1}.${decodeExp.getFullYear()} ${decodeExp.getHours()}:${decodeExp.getMinutes()}:${decodeExp.getSeconds()}`;
            console.log(`00-authorize-exp: ${expFormatted}`);
          }
          console.log('=============== 00 ======================');

          return {
            id: decoded.username,
            email: decoded.username,
            roles: decoded.roles,
            iat: decoded.iat,
            exp: decoded.exp,
            accessTokenExpires: decoded.exp,

            token: data.token,
            refreshToken: data.refresh_token
          } as User
        }

        // Return null if user data could not be retrieved
        return null
      }
    })
  ],

  callbacks: {
    async jwt({ token, user }) {
      console.log('=============== 01 ======================');
      //user as User
      console.log('01-callbacks-jwt-user')
      console.log(user)
      console.log('01-callbacks-jwt-token')
      console.log(token)

      console.log(2222)
      if (user) {
        const userToken = (user as { token?: string })?.token;
        const userRefreshToken = (user as { refreshToken?: string })?.refreshToken;
        const userAccessTokenExpires = (user as { accessTokenExpires?: number })?.accessTokenExpires;

        return {
          ...token,
          token: userToken, //user.token,
          refreshToken: userRefreshToken, //user.refreshToken,
          accessTokenExpires: userAccessTokenExpires, //user.accessTokenExpires,
          name: user.email,
          email: user.email,
        }
      }

      const now = Math.floor(Date.now() / 1000);
      console.log(3333)
      console.log(now)
      console.log(token.accessTokenExpires)

      const tokenAccessTokenExpires = (token as { accessTokenExpires?: number })?.accessTokenExpires ?? 0;

      // Проверяем актуальность токена
      //if (now < token.accessTokenExpires) {
      if (now < tokenAccessTokenExpires) {
        return token
      }

      //return token

      console.log('01-callbacks-token-expires')
      // Обновляем токен
      return await refreshAccessToken(token)
    },

    //client
    async session({ session, token }) {
      console.log('=============== 05 ======================');
      console.log('05-session-session')
      console.log(session)
      console.log('05-session-token')
      console.log(token)

      if (!token?.email) {
        return session;
      }

      return {...session, ...token}
    }

    //async session({ session, token }) {
    //  console.log(4444)
    //
    //  session.user.name = token.name
    //  session.user.email = token.name
    //  (session as any).accessToken = token.accessToken
    //  (session as any).error = token.error
    //
    //  console.log(5555)
    //
    //  return session
    //}

    //async signIn({ user, account, profile, email, credentials }) {
    //  console.log('=============== 00.01 ======================');
    //  console.log('00.01-signIn-user')
    //  console.log(user)
    //
    //  return true;
    //}
  },

  session: {
    strategy: 'jwt',

    // Seconds - How long until an idle session expires and is no longer valid.
    //maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login'
  }
}

async function refreshAccessToken(token: any) {
  console.log('=============== 07 ======================');
  console.log(token);
  const refreshToken = token.refreshToken;

  try {
    const response = await fetch('http://php/api/token/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/ld+json'
      },
      body: JSON.stringify({
        refresh_token: refreshToken,
      })
    })

    const refreshedTokens = await response.json()
    console.log('07-refreshed-token');
    console.log(refreshedTokens);

    if (!response.ok) throw refreshedTokens

    const decoded = decodeJwt(refreshedTokens.token)

    return {
      ...token,
      token: refreshedTokens.token,
      refreshToken: refreshedTokens.refresh_token,
      accessTokenExpires: decoded.exp,
    }

  } catch (error) {
    console.error('Error refreshing access token:', error)

    return {
      ...token,
      error: 'RefreshAccessTokenError',
    }
  }
}
