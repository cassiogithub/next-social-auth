import React from "react";
import {Session} from "next-auth";

export interface IRootLayoutProps {
    children: React.ReactNode,
    params: {
        session: Session
    }
}