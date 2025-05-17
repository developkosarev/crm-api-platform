import type { AuthOptions, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

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
        const token = await res.json()

        // If no error and we have user data, return it
        if (res.ok && token) {
          return token
        }
        // Return null if user data could not be retrieved
        return null
      }
    })
  ]
}
