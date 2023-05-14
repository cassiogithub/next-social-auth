import {Session} from "next-auth";
import React from 'react'

export interface RootLayoutProps {
    children: React.ReactNode,
    params: {
        session: Session
    }
}