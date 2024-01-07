import React from 'react'
import { Link } from "react-router-dom";
import truck_bg from "../../assets/image/truck_bg.png";

function Home() {
  return (
    <div>
        <section className="bg-[#eeefefab] h-screen">
        <div className="flex ">
          <div className="flex flex-col  p-32 gap-14 mr-6">
            <div className="max-w-690 flex flex-col pt-28  gap-3">
              <h1 className="font-extrabold text-5xl absolute text-black">
                On demand truck <br /> transport and deliveries
              </h1>
              <p className="font-medium text-2xl pt-28 absolute text-black-100">
                Have moving or delivery needs?  We help you <br /> schedule at an affordable price
              </p>
            </div>
            <div className=''>
            <div className="flex gap-2 absolute pt-36 w-4/5 ">
              <Link to={"/"}>
               <input type="text" className="border border-gray-500 h-10"
                 placeholder='Enter Track & Trace ID'
                />
              </Link>
              <Link to={"./profile/places"}>
                <button className="border rounded-lg text-white p-2 mt-0.5 h-10 capitalize font-medium  bg-violet-600 hover:bg-violet-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 hover:text">
                  Check Status
                </button>
              </Link>
            </div>
            </div>
          </div>
          <div className=" pl-72">
            <img src={truck_bg} alt="" className="h-full w-full" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
