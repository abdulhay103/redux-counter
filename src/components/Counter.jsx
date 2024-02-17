"use client";
import React, { useState } from "react";

export default function () {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className=" container mx-auto">
      <div className=" w-full min-h-screen flex justify-center items-center">
        <div className=" w-2/5 rounded-lg shadow-md py-5 px-10 border">
          <h1 className=" text-center text-2xl font-bold py-5">Counter</h1>
          <div className="px-5 py-2 bg-emerald-50 rounded-md border shadow-inner ">
            <p className=" text-right">{count}</p>
          </div>
          <div className=" flex justify-around py-5">
            <button
              onClick={handleIncrement}
              className=" px-5 py-2 bg-stone-600 rounded text-white "
            >
              Increment
            </button>
            <button className=" px-5 py-2 bg-red-600 rounded text-white ">
              Reset
            </button>
            <button className=" px-5 py-2 bg-stone-600 rounded text-white ">
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
