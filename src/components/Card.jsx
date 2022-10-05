import React, { useEffect, useState } from "react";

import { urlFor } from "../sanityConfig";
import { MapIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

// import Map from "../assets/map.png";

const Card = ({ stores }) => {
  return (
    <section className="flex-wrap absolute  flex justify-center text-center align-middle">
      {stores.map((store) => {
        return (
          <section
            className="flex-row flex mt-10 justify-center items-center text-white gap-8 "
            key={store._id}
          >
            <div
              className="flex md:flex-row flex-col backdrop-blur-sm ml-2 mr-2 md:ml-5 md:mr-5 shadow-lg rounded-xl shadow-purpleAccent
            max-w-[220px] md:max-w-[550px]
            max-h-[400px] md:max-h-[250px] "
            >
              <div className="flex overflow-hidden text-center  md:rounded-none  rounded-sm bg-slate-700 md:rounded-l-xl  md:w-[500px]">
                <img
                  className="md:w-[250px] w-[220px] h-[200px] md:h[250px] object-cover bg-slate-700"
                  src={urlFor(store.imageurl).url()}
                />
              </div>
              <div className="flex p-2 flex-col bg-slate-700 rounded-sm md:rounded-r-xl w-full">
                <div className="text-2xl mb-4 flex-[1] md:flex-[3]">
                  <h1 className="border-b-2 p-2 border-purpleAccent text-center font-semibold">
                    {store.name}
                  </h1>
                  <h1 className="text-xl  text-center mt-2">
                    {store.description}
                  </h1>
                </div>
                <div className="flex border-t-2 border-purpleAccent">
                  <div className="flex items-center gap-6 w-full">
                    <div className="flex w-[70%] items-center">
                      <h1 className="p-2">{store.district}</h1>
                      <a href={store.address} target="_blank">
                        <MapIcon className="h-6 w-6 text-purpleAccent" />
                        {/* <img src={Mapicon} className="h-[32px] w-[32px]" /> */}
                      </a>
                      <div className="ml-1 cursor-pointer">
                        <Link
                          to={`/sozlesmeler/:${store.name}`}
                          state={store.formimage}
                        >
                          <PencilSquareIcon className="h-6 w-6 text-purpleAccent" />
                        </Link>
                      </div>
                    </div>
                    <div className="">
                      <h1 className="">
                        <span className="font-bold">{store.discount}</span> %
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default Card;
