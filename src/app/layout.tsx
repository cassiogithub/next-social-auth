'use client';

import React from 'react'
import Head from "next/head";

import {Roboto} from 'next/font/google'
import {SessionProvider} from "next-auth/react";
import {Session} from "next-auth";

import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

interface RootLayoutProps {
    children: React.ReactNode,
    params: {
        session: Session
    }
}

export default function RootLayout({ children, params }: RootLayoutProps) {
    return (
      <html lang="pt-BR">
      <Head>
        <title>Cassio Login Auth</title>
      </Head>
      <body className={roboto.className}>
        <SessionProvider session={params.session}>
            {children}
        </SessionProvider>
      </body>
      </html>
    )
}
