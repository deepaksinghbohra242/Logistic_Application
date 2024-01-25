import React, { useContext, useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import axios from 'axios';
import logo from "../../assets/logo/logo.png";
import "../../App.css";
import { UserContext } from "../../ContextLayout";

function Navbar() {
  const { user } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  const handleLogout = async (e) => {
    await axios.post('/user/logout');
    setRedirect(true);
  }

  if (redirect) {
    return <Navigate to={'/login'} />;
  }

  return (
    <nav className="bg-gradient-to-r from-violet-500 to-purple-950 p-4 h-24">
      <div className="container mx-auto flex justify-between items-center text-xl mt-3" style={{ transition: "all 1s ease-in-out" }}>
        <NavLink to={"/"} className="text-white flex gap-2 text-xl font-bold">
          <img className="h-10" src={logo} alt="rentlogo" />
          <span className="text-sm">
            <h1>Haul'In</h1>
            <strong>Book Truck</strong>
          </span>
        </NavLink>

        {/* Navigation Links */}
        <div className="flex space-x-4 gap-3 trans">
          {
            user && (<>
              <NavLink to={"/"} className="flex items-center text-white transition duration-400  0.8s  ease-in-out">
                <span className="mr-1 mt-1 hover:text-xl text-white hover:mt-2" style={{ transition: "all 0.1s ease-in 0.1s" }}>
                  Home
                </span>
              </NavLink>

              <NavLink to={"/bookingTruck"} className="flex items-center text-white transition duration-400 ease-in-out">
                <span className="mr-1"></span>
                <span className="hover:text-xl mt-1 text-white hover:mt-2" style={{ transition: "all 0.1s ease-in 0.1s" }}>Booking Truck</span>
              </NavLink>

              <NavLink to={"/products"} className="flex items-center text-white transition duration-400 ease-in-out">
                <span className="mr-1"></span>
                <span className="hover:text-xl text-white hover:mt-2 mt-1" style={{ transition: "all 0.1s ease-in 0.1s" }}>Products</span>
              </NavLink>

              <NavLink to={"/about"} className="flex items-center text-white transition duration-400 ease-in-out" >
                <span className="mr-1 hover:text-xl text-white hover:text-cyan-400"></span>
                <span className="hover:text-xl text-white hover:mt-2 mt-1" style={{ transition: "all 0.1s ease-in 0.1s" }}>About Us</span>
              </NavLink>

              <div>
                <button onClick={handleLogout} className="flex items-center bg-red-700 p-1 rounded-lg text-white transition duration-400 ease-in-out" >
                  <span className="mr-1 hover:text-xl text-white hover:text-cyan-400"></span>
                  <span className="hover:text-xl text-white hover:mt-2 mt-1" style={{ transition: "all 0.1s ease-in 0.1s" }}>Log Out </span>
                </button>
              </div>
            </>

            )
          }
          {!user &&
            (<div className="flex gap-2">
              <div className="">
                <NavLink to={"/login"} className="flex items-center text-white transition duration-400 ease-in-out">
                  <span className="mr-1 hover:text-xl text-white hover:text-cyan-400 "></span>
                  <span className="border-white-500 border-2 rounded-lg bg-white text-black px-2 py-1 hover:bg-gray-200 text-lg hover:text-black">Log In</span>
                </NavLink>
              </div>

              <div className="">
                <NavLink to={"/register"} className="flex items-center text-white transition duration-400 ease-in-out">
                  <span className="mr-1 hover:text-xl text-white hover:text-cyan-400"></span>
                  <span className="border-2 text-lg border-white-500 rounded-lg bg-yellow-400 text-black py-1 px-2 hover:bg-yellow-500 hover:text-black">Sign Up</span>
                </NavLink>
              </div>
            </div>
            )
          }






        </div>
      </div>
    </nav>
  );
}

export default Navbar;
