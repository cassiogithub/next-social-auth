import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const {NEXT_GITHUB_ID, NEXT_GITHUB_SECRET} = process.env

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: NEXT_GITHUB_ID as string,
            clientSecret: NEXT_GITHUB_SECRET as string,
        })
    ],
    callbacks: {} // TODO: // Redirecionar singIn direto para o github auth
})