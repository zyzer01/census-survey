import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
    providers: [
        
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username: Dave",
                    type: "text",
                    placeholder: "Username"
                },
                password: {
                    label: "Password: nextauth",
                    type: "password",
                    placeholder: "Password"
                }
            },
            async authorize(credentials) {
                // This is where you need to retrieve user data 
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                const user = { id: "42", name: "Dave", password: "nextauth" }

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    theme: {
        colorScheme: "light", 
        brandColor: "",
        logo: "",
        buttonText: "Sign in" 
      }
}
