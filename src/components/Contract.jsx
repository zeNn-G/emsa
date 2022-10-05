import React from "react";
import { useLocation } from "react-router-dom";

const Contract = () => {
  const { state } = useLocation();

  return (
    <div className="bg-primary flex justify-center items-center w-[100vw] h-[100vh]">
      <h1>{state}</h1>
    </div>
  );
};

export default Contract;
