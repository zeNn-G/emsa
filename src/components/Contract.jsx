import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const Contract = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="bg-primary flex flex-col justify-center items-center w-[100vw] h-[100vh]">
      <img src={state} className="object-cover" />
      <button
        className="bg-slate-700 p-3 mt-3 rounded-xl cursor-pointer flex items-center text-white font-medium tracking-wide hover:bg-slate-600 transition-all duration-300 ease-in-out"
        onClick={() => navigate("/")}
      >
        <ChevronLeftIcon className="h-[40px] w-[40px] text-purpleAccent" />
        Anasayfaya Dön
      </button>
    </div>
  );
};

export default Contract;
