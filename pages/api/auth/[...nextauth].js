import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export default NextAuth ({
    providers: [
        CredentialProvider({
          name: "credentials",
          credentials: {
            username: { label: "Usuario", type: "text", placeholder: "nome de usuário" },
            password: {  label: "Senha", type: "password", placeholder: "senha"}
          },
        authorize: (credentials) => {
            if(credentials.username === "vitor" && credentials.password === "test"){
                return {
                    id: 2,
                    name: "vitor",
                    password: "test"
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
        signIn: "/login"
    },
    
})