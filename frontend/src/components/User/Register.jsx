import React, { useState } from 'react'
import axios from 'axios';
import swal from "sweetalert"
import {Navigate} from "react-router-dom";

function Register() {
  const [credential , setCredential] = useState({
    firstName : "",
    lastName : "",
    userName : "",
    email: "" ,
    password : "",
    phone : ""
  })
  const [redirect , setRedirect] = useState(false);
  const handleChange = (e) =>{
    setCredential({...credential,[e.target.name]: e.target.value });
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();

    try {
      const data = await axios.post('/user/register',{
        firstName : credential.firstName,
        lastName : credential.lastName,
        username : credential.userName,
        email : credential.email,
        password : credential.password,
        phone : credential.phone
      });
      
      swal({
        title : "Success",
        text : "Successfully Login",
        icon : "Success",
        buttons : "Ok"
      })
      setRedirect(true);
    } catch (error) {
      swal({
        title : "Failed",
        text : "Try Again",
        icon : "warning",
        buttons : "Ok"
      })
      console.log(error);
    }
  }
  if(redirect){
    return <Navigate to = {'/login'} />
  }  
  return (
    <>
      <form action="" onSubmit={handleSubmit} className='grid'>
      <label htmlFor="">FirstName</label>
        <input type="text" name="firstName" value={credential.firstName} onChange={handleChange} className='border border-solid' />
        <label htmlFor="">Last Name</label>
        <input type="text" name="lastName" value={credential.lastName} onChange={handleChange} className='border border-solid' />
        <label htmlFor="">UserName</label>
        <input type="text" name="userName" value={credential.userName} onChange={handleChange} className='border border-solid' />
        <label htmlFor="">Phone No</label>
        <input type="number" name="phone" value={credential.phone} onChange={handleChange} className='border border-solid' />
        <label htmlFor="">email</label>
        <input type="email" name="email" value={credential.email} onChange={handleChange} className='border border-solid' />
        <label htmlFor="">password</label>
        <input type="password" name="password" value={credential.password} onChange={handleChange} className='border border-solid' />
        <button className='bg-blue-300'>Submit</button>
      </form>
    </>
  )
}

export default Register
