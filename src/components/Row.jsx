import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Row = ({title, fetchURL}) => {
    const [movies, setMovie] = useState([])
    
    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovie(response.data.results)
        })
    }, [fetchURL])
  return (
    <div>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className="relative flex items-center">
            <div id={'slider'}>
                {movies.map((item, id) => (
                    <div className='w-[160px] sm:w-[240px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer'>

                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Row