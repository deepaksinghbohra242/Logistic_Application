import React, { useContext, useState } from 'react'
import { UserContext } from '../../ContextLayout';
import axios from 'axios';
import swal from "sweetalert";
import {Navigate} from 'react-router-dom';

function Login() {
  const {setUser ,setReady} = useContext(UserContext);
  const [credential , setCredential] = useState({
    email : "",
    password : ""
  });
  const [redirect , setRedirect] = useState(false);
  const handleChange = (e) =>{
    setCredential({...credential , [e.target.name] : e.target.value } );
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      const data = axios.post('/user/login',{
        email : credential.email ,
        password : credential.password
      });
      setUser(data);
      setRedirect(true);
      swal({
        title:"Login Successfully!",
        icon:'success',
        button:'OK'
      })
    } catch (error) {
      swal({
        title:"Error!",
        text:`Try Again`,
        icon:"warning",
        buttons:"ok"
      })
    }
  }
  if(redirect){
    return <Navigate to={'/dashboard'} />
  }
  return (
    <>
    <div >
      <form action="" className='grid ' onSubmit={handleSubmit}>
        <label htmlFor="">email</label>
        <input type="email" name="email" value={credential.email} onChange={handleChange} className='border border-solid' />
        <label htmlFor="">password</label>
        <input type="password" name="password" value={credential.password} onChange={handleChange} className='border border-solid' />
        <button className='bg-blue-300'>Submit</button>
      </form>
    </div>
    </>
  )
}

export default Login
