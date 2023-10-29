import users from "@/Model/userSchema";
import nextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import connectDB from "@/dataBase/connect";


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  pages:{
    SignIn : '/signin'
  },
  callbacks: {
    async signIn({ account, profile,user,email}) {
      if (account.provider === "google") {
        try {
          // console.log(account,profile);
          connectDB()

          // return profile.email_verified && profile.email.endsWith("@example.com")
          const user = await users.findOne({email : profile.email})
          const {name,email,picture} = profile

        
        const {provider} = account
        if(user) return true
        const eachUser = new users({name,email,picture,provider})
        await eachUser.save()
        
      
        } catch (error) {
          console.log(error);
        }
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
 
    async jwt({ token, account,user,email }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        // console.log(token,account)
        const user = await users.findOne({email : token.email})
        // console.log(user)
        token.user = user
        // console.log(token);
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      // console.log(token);
      session.user = token.user
      console.log(session);
      return session
    }
  }
}

const handler = nextAuth(authOptions)
export {handler as GET,handler as POST}
