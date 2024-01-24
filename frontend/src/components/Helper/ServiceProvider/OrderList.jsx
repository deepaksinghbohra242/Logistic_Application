import React from "react";
import Order from "./Order";

const OrderList = () => {
  return (
    <>
    <div className="flex flex-row justify-center text-center mt-20 mb-10 gap-7">
        <label htmlFor="search">Search</label>
        <input type="text" className="border rounded-md p-1" placeholder="search" />
    </div>
  
  <div className="container border ml-20 h-full w-11/12">
    <div className=" flex flex-col ml-24 mb-20 ">
      <Order />
      <Order />
      <Order />
      </div>
      </div>
      </>
  );
};

export default OrderList;
