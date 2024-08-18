'use client'
import React, { useEffect, useState } from 'react'
import Home from './Home'
import Loading from './loading'


const page = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);
  return (
<>
{loading?<Loading/>:<Home/>}
</>  )
}

export default page