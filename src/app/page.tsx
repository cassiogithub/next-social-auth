import React from 'react';
import Link from "next/link";

export default function Home() {
  return (
    <main className='d-flex align-items-center justify-content-center min-vh-100'>
      <Link className='btn btn-primary' href='/protected'>protected</Link>
    </main>
  );
}
