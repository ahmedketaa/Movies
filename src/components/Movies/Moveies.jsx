import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Moveies() {
  const [movies, setMovies] = useState([]);
  let trendiingMovies=async()=>{
    let {data}=await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=592d5558fe91383c9979c4a7c357bfee');
    setMovies(data.results);
    console.log(data.results);
  }
  useEffect(() => {
    
  trendiingMovies();

  }, [])
  
  return (
    <>
    
       <Helmet>
                <meta charSet="utf-8" />
                <title>Movies</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <div className="row my-5 py-2">
    <div className="col-md-4  justify-content-center flex-column d-flex align-items-center">
      <div className="static mb-5 ">
        <div className={`  w-25 `}></div>
        <h3>Trending</h3>
        <h3>Movies</h3>
        <h4>To watch now</h4>
        <span >most watched movies by day</span>
        <div className={`  w-100 `}></div>
      </div>
    </div>
     {movies.map((item,index)=>
      <div key={index} className="col-md-2">

     <Link className='nav-link' to={`/detailes/${item.media_type}/${item.id}`}>
     <div className="item m-2 position-relative">
       <img className='w-100' src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
       <h2 className='h6'>{item.original_title} {item.name}</h2>
       <span className='text-white position-absolute top-0 end-0 bg-info p-2'>{item.vote_average.toFixed(1)} </span>

     </div>

     </Link>
    </div>
      
    )}
    </div>
    </>
  )
}
