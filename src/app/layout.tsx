import React from 'react'
import {Providers} from "@/app/providers";
import {RootLayoutProps} from "@/app/(interfaces)/IRootLayoutProps";

import {Roboto} from 'next/font/google'

import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'


const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

export const metadata = {
    title: 'Cassio - Login Social',
    description: 'Criado por Cássio Rodrigues.',
}

export default function RootLayout({params, children}: RootLayoutProps) {
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
