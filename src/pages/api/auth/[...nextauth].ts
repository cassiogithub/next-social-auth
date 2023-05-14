import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Keycloak from "next-auth/providers/keycloak";

const {GITHUB_ID, GITHUB_SECRET} = process.env

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: GITHUB_ID as string,
            clientSecret: GITHUB_SECRET as string,
        })
    ],
    callbacks: {}
})