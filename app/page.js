import Head from 'next/head'
import React from 'react'
import Home from './Home'


const page = () => {
  return (
<>
<Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Home/>
</>  )
}

export default page