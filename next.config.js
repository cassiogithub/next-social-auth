/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false
}

const {NEXT_GITHUB_ID, NEXT_GITHUB_SECRET, NEXTAUTH_SECRET, NEXTAUTH_URL} = process.env;

module.exports = {
    ...nextConfig,
    env: {
        GITHUB_ID: NEXT_GITHUB_ID,
        GITHUB_SECRET: NEXT_GITHUB_SECRET,
        NEXTAUTH_URL: NEXTAUTH_URL,
        NEXTAUTH_SECRET: NEXTAUTH_SECRET,
    }
}
