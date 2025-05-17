import type { AuthOptions, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { decodeJwt } from 'jose'

export const authConfig: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Username", type: "email", required: true, placeholder: "jsmith" },
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
          console.log(decoded)

          if (!decoded) { return null }

          return {
            id: decoded.sub || decoded.id,
            name: decoded.username,
            email: decoded.email,
            token: data.token
          } as User
        }

        // Return null if user data could not be retrieved
        return null
      }
    })
  ],

  callbacks: {
    async jwt({ token, user }) {
      console.log(3333)
      console.log(user)
      console.log(token)

      if (user) {
        return {
          ...token,
          accessToken: user.token,
          refreshToken: user.refreshToken,
          accessTokenExpires: user.accessTokenExpires,
          name: user.name,
          email: user.email,
        }
      }

      // Проверяем актуальность токена
      if (Date.now() < token.accessTokenExpires) {
        return token
      }

      // Обновляем токен
      return await refreshAccessToken(token)
    },

    async session({ session, token }) {
      console.log(4444)

      session.user.name = token.name
      session.user.email = token.email
      (session as any).accessToken = token.accessToken
      (session as any).error = token.error
      return session
    }
  },

  session: {
    strategy: 'jwt',
  },

  secret: process.env.NEXTAUTH_SECRET,
}

async function refreshAccessToken(token: any) {
  try {
    const response = await fetch('http://php/api/token/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        refresh_token: token.refreshToken,
      })
    })

    const refreshedTokens = await response.json()

    if (!response.ok) throw refreshedTokens

    return {
      ...token,
      accessToken: refreshedTokens.token,
      refreshToken: refreshedTokens.refresh_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
    }

  } catch (error) {
    console.error('Error refreshing access token:', error)

    return {
      ...token,
      error: 'RefreshAccessTokenError',
    }
  }
}
