import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/Google"

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRECT,
    }),
    // ...add more providers here
  ],
});

export { handler as GET, handler as POST };