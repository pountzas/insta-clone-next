import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  // standar login page

  // theme: {
  //   logo: "https://links.papareact.com/sq0",
  //   brandColor: "#F13287",
  //   colorScheme: "auto",
  // },

  // Custom login page
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({session, user, token}) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLowerCase();
      
        session.user.uid =token.sub;

      return session;
    },
  }
});