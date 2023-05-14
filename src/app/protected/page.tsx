'use client';

import React from 'react';
import {signIn, signOut, useSession} from 'next-auth/react'

export default function Protected() {
    const {data: session} = useSession();

    const signOutComponent = () => (
        <div className="d-flex flex-column align-content-end">
            <h1>Protected</h1>
            <p>To logado, respeita ta</p>
            <button className='btn btn-primary' onClick={() => signOut()}>Sign Out</button>
        </div>
    )

    const signInComponent = () => (
        <div>
            <h1>Protected</h1>
            <p>ta logado nao chefia, faz login</p>
            <button className='btn btn-primary w-100' onClick={() => signIn()}>Sign In</button>
        </div>
    )

    return (
        <div className="min-vw-100 min-vh-100 d-flex justify-content-center align-items-center">
            {session ? signOutComponent() : signInComponent()}
        </div>
    );
}
