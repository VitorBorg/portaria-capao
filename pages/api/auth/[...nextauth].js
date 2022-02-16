import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export default NextAuth ({
    providers: [
        CredentialProvider({
          name: "credentials",
        authorize: (credentials) => {

            if(credentials.username.toLowerCase() === process.env.NEXT_USER_LOGIN.toLowerCase() 
            && credentials.password === process.env.NEXT_USER_PASSWORD){
                return {
                    id: 5,
                    name: credentials.username,
                    password: credentials.password,
                }
            }

            return null
          }
        })
      ],

    callbacks : {
        jwt: ({token, user}) => {
            if(user){
                token.id = user.id
            }

            return token
        },
        session: ({session, token}) => {
            if(token){
                session.id = token.id
            }

            return session
        },
    },
    jwt: {
        secret: "test",
        encryption: true,
    },
    pages : {
        signIn: "/login",
        //signOut: "/login",
    },
    
})