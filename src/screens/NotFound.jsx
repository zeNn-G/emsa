import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="flex justify-center items-center h-[100vh] w-[100vw] dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-purpleAccent">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Tüh Be! Sayfa Bulunamadı
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              {/* Esprili bir mesaj */}
              Aradığınız sayfayı bulamadık. <br />
              \_(ツ)_/¯
            </p>
            <div className="flex justify-center items-center">
              <button
                className="bg-slate-700 p-3 mt-3 rounded-xl cursor-pointer flex items-center text-white font-medium tracking-wide hover:bg-slate-600 transition-all duration-300 ease-in-out"
                onClick={() => navigate("/")}
              >
                <ChevronLeftIcon className="h-[40px] w-[40px] text-purpleAccent" />
                Anasayfaya Dön
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
