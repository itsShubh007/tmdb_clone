import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination'

function Movies({ watchlist,handleAddtoWatchlist, handleRemoveFromWatchlist}) {

  const [movies, setMovies]=useState([])
  const [pageNo , setPageNo] = useState(1)


  const handlePrev = ()=>{
    if(pageNo===1){
        setPageNo(pageNo)
    }
    else{
        setPageNo(pageNo-1)
    }

}


const handleNext = ()=>{
    setPageNo(pageNo+1)
}

  


  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`).then(function(res){
      console.log(res.data.results)
      setMovies(res.data.results)
    })
  },[pageNo])
  return (
    <div className='p-5'>
         <div className='text-center m-5 font-bold text-2xl '>
            Trending Movies
         </div>
         <div className='flex flex-wrap flex-row justify-around gap-8'>
            {movies.map((movieObj)=>{
              return <MovieCard key={movieObj.id} movieObj={movieObj} watchlist={watchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} handleAddtoWatchlist={handleAddtoWatchlist} poster_path={movieObj.poster_path}   name={movieObj.original_title}/>   
            })}
         </div>
         <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
    </div>
  )
}

export default Movies