import React, { useContext, useState } from 'react'
import { UserContext } from '../../ContextLayout';
import axios from 'axios';
import swal from "sweetalert";
import {Navigate} from 'react-router-dom';
import bluetruck from "../../assets/image/bluetruck.png"
import haullogo from "../../assets/image/haullogo.png"

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
      const data = await axios.post('/user/login',{
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
   
   <form onSubmit={handleSubmit} >
      <div className="bg-[#eeefefab] flex flex-row justify-center w-full">
        <div className="bg-[#eeefefab] w-full h-[924px] relative">
          <img
            className="absolute w-[685px] h-[450px] top-[275px] left-[748px] object-cover"  
            alt="Blue truck"
            src={bluetruck}
          />
          <div className="absolute w-[555px] h-[575px] top-[225px] left-[68px] rounded-[35px]">
            <div className="absolute w-[555px] h-[575px] top-0 left-0 bg-[#e9e0e0] rounded-[29px] overflow-hidden">
             {/* USERNAME  */}
              <div className="absolute top-[136px] left-[69px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[20px] tracking-[0] leading-[normal]">
                Username
              <div className="absolute mt-2 w-96">
              <input type="email"
            id="email"
            name="email"
            value={credential.email}
            onChange={handleChange} className="border p-2 w-96 rounded-lg" placeholder="username"/>
              </div>
              </div>
              <div className="absolute top-[275px] left-[69px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                Password
                <div className="absolute mt-2 w-96">
              <input type="password"
            id="password"
            name="password"
            value={credential.password}   
            onChange={handleChange} className="border p-2 w-96 rounded-lg" placeholder="password" />
              </div>
              </div>
              <div className="absolute top-[410px] left-[69px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#4b4b4b] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                Forget Password?
              </div>
              {/* LOGINBUTTON  */}
              <div className="">
                <button type="submit" className=" flex w-96 ml-3 items-center justify-center gap-[12px] p-[5px]  top-[445px] left-[52px] bg-[#1471fd] rounded-[12px] relative  font-bold font [font-family:'Inter-Medium',Helvetica]  text-white text-[22px] whitespace-nowrap hover:bg-blue-700 hover:text-black">
                  LOGIN
                </button> 
              </div>
              
            </div>
            <div className="inline-flex justify-center gap-[8px]  absolute top-[24px] left-52 ">
              <div className="relative  mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
                LOGIN
              </div>
            </div>
          </div>
          <div className="absolute top-[150px] left-[440px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#2f0db5] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
            Sign up
          </div>
          <p className="absolute top-[150px] left-[215px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#4a4a4a] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
            Don’t have an account ?
          </p>
          <img
            className="absolute w-[157px] h-[66px]  left-[1383px] object-cover"
            alt="Oie"
            src={haullogo}
          />
          <div className="inline-flex items-center justify-center gap-[8px] pt-[10px] absolute top-[44px] left-[205px]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Lateef-Regular',Helvetica] font-normal text-yellow-950 text-[80px] tracking-[0] leading-[normal]">
              HAUL-IN
            </div>
          </div>
        </div>
      </div>
    </form>
    </>
  )
}

export default Login
