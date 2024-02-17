"use client";
import {
  decrementAction,
  incrementAction,
  resetAction,
} from "@/utils/actions/counterActions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function () {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(incrementAction());
  };
  const decrementHandler = () => {
    dispatch(decrementAction());
  };
  const resetHandler = () => {
    dispatch(resetAction());
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
              onClick={incrementHandler}
              className=" px-5 py-2 bg-stone-600 rounded text-white "
            >
              Increment
            </button>
            <button
              onClick={resetHandler}
              className=" px-5 py-2 bg-red-600 rounded text-white "
            >
              Reset
            </button>
            <button
              onClick={decrementHandler}
              className=" px-5 py-2 bg-stone-600 rounded text-white "
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
