import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Detailes() {
  const [itemsDetailes, setItemsDetailes] = useState({});

  let parms=useParams();
  let getItems=async()=>{
    
    let {data}=await axios.get(`https://api.themoviedb.org/3/${parms.media_type}/${parms.id}?api_key=592d5558fe91383c9979c4a7c357bfee`)
    setItemsDetailes(data);
    console.log(data);
  }
  // useEffect(() => {
  //   getItems();
  // }, [])
  useEffect(() => {
    getItems(); // Assuming getItems is defined somewhere
  }, []);
  
  
  return (
    <>
    <div className="row py-4 gy-3">
     
      <div className="col-md-4">
        <div className="box">
        <Link to={`${itemsDetailes.homepage}`} target='_blank'>
      <img className='w-100' src={`https://image.tmdb.org/t/p/original/${itemsDetailes.poster_path}`} alt="" />

      </Link>
        </div>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-7">
       <div className="item d-flex justify-content-center flex-column mt-2">
       <h2>{itemsDetailes.title} {itemsDetailes.name}</h2>
        <h4>{itemsDetailes.tagline}</h4>
        <p className='text-warning'>{itemsDetailes.overview}</p>
        
       </div>
      </div>
   
    </div>
    </>
  )
}
