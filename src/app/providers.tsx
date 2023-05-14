'use client';

import React from 'react'
import {SessionProvider} from "next-auth/react";
import {IRootLayoutProps} from "@/pages/interfaces/Layouts/IRootLayoutProps";

export default function Providers(props: IRootLayoutProps) {
    const {children, params} = props;

    return (
        <SessionProvider session={params.session}>
            {children}
        </SessionProvider>
    )
}