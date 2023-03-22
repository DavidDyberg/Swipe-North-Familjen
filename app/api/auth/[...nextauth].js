import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
	Providers.LinkedIn({
	  clientId: process.env.LINKEDIN_CLIENT_ID,
	  clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
	}),
	// ... other providers if needed
  ],

  // optional database configuration to persist user sessions
  //database: process.env.DATABASE_URL,

  // Define any custom pages here, such as sign in, sign out, etc.
  pages: {
	signIn: "/auth/signin",
  },
});
