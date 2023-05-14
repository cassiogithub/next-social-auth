import React from 'react'
import Head from "next/head";
import Providers from "@/app/providers";

import {Roboto} from 'next/font/google'

import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'
import {IRootLayoutProps} from "@/pages/interfaces/Layouts/IRootLayoutProps";


const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

export const metadata = {
    title: 'Cassio - Login Social',
    description: 'Criado por Cássio Rodrigues.',
}

export default function RootLayout({params, children}: IRootLayoutProps) {
    return (
        <html lang="pt-BR">
        <body className={roboto.className}>
        <Providers params={params}>
            {children}
        </Providers>
        </body>
        </html>
    )
}
