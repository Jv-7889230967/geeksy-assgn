import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Home = () => {
    const [error,setError]=useState(false);
    useEffect(()=>{
        const CallApi=async()=>{
           try {
            await axios.post(`${process.env.REACT_APP_BASE_URL}/movieList`,
                {
                    category:'movies',
                    language:'kannada',
                    genre:'all',
                    sort:'voting'
                }
            )
           } catch (error) {
            setError(true)
           }
        }
        CallApi();
    },[])
  return (
    <div>
        {error?error:<h1>Movie-page</h1>}
    </div>
  )
}

export default Home