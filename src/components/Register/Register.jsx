import axios from 'axios';
import Joi, { allow, date } from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Regetier() {
  let navigate=useNavigate();
  let [user ,setUser]=useState({
    "name":"",
      "email":"",
      "password":"",
      "password_confirm":"",
      "country":"egypt",
      "city":"fayoum",
      "phone":"010"
  })
  const [errorList, setErrorList]=useState([]);
  let submitData= async (e)=>{
    e.preventDefault();
     let validateRes= vlaidateForm();
     if (validateRes.error) {
      console.log(validateRes);
     setErrorList(validateRes.error.details);
     console.log(errorList);
     }
  else{
    let response=await axios.post('https://graduation-server.onrender.com/user/signup',user);
    console.log(response);
    navigate('/login'); 
    
  }
   
     
  }

  let inputValue=(e)=>{
    let myUser = {...user};
    myUser[e.target.name] = e.target.value
    setUser(myUser);
    console.log(myUser);
  }
  let vlaidateForm=()=>{
    const schema=Joi.object({
      name:Joi.string().alphanum().required().min(2).max(10), 
      email:Joi.string().required().email({tlds:{ allow :['com','net']}}),
      password:Joi.string().required(),
      country:Joi.string(),
      password_confirm:Joi.string(),
      city:Joi.string(),
      phone:Joi.string()

    })
    return schema.validate(user,{abortEarly:false});
  }




  return (
<>
    <div className='bg info w-75 m-auto py-4 my-5'>
      <h2>Register Form</h2>
    {
      errorList.map((error, index)=>
      <div key={index} className='alert alert-danger'>{error.message}</div>)
    }
        <form onSubmit={submitData}>
    <div className="input-data my-4">
      <label htmlFor="name">Name</label>
      <input onChange={inputValue} type="text" name="name" className='form-control my-2' />
    </div>
    <div className="input-data my-4">
      <label htmlFor="email">Email</label>
      <input onChange={inputValue}  type="text" name="email" className='form-control my-2' />
    </div>
    <div className="input-data my-4">
      <label htmlFor="password">Password</label>
      <input onChange={inputValue}  type="password" name="password" className='form-control my-2' />
    </div>
    <div className="input-data my-4">
      <label htmlFor="password_confirm">password_confirm</label>
      <input onChange={inputValue}  type="text" name="password_confirm" className='form-control my-2' />
    </div>
    <button className='btn btn-info my-3 float-end'>register</button>
    <div className="clear-fix"></div>
      </form>
    </div>
</>
    )
}
