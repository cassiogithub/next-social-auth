'use client';

import React from 'react'
import {SessionProvider} from "next-auth/react";
import {RootLayoutProps} from "@/app/(interfaces)/IRootLayoutProps";

export function Providers(props: RootLayoutProps) {
    const {children, params} = props;

    return (
        <SessionProvider session={params.session}>
            {children}
        </SessionProvider>
    )
}