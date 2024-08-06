"use client"

import Head from 'next/head';
import Navbar from './components/Navbar';
import Editor from './components/Editor';

export default function Home() {
  return (
    <div>
      <Head>
        <title>WriteDown</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className='flex my-10 font-bold text-2xl justify-center'>Welcome to WriteDown</h1>
        <Editor />
      </main>
    </div>
  );
}
