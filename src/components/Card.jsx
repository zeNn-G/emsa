import React, { useEffect, useState } from "react";

import { urlFor } from "../sanityConfig";

import Map from "../assets/map.png";

const Card = ({ stores }) => {
  return (
    <div className="flex-wrap relative md:flex justify-center">
      {stores.map((store) => {
        return (
          <div className="flex-row flex mt-10 justify-center items-center text-white gap-8 ">
            <div className="backdrop-blur-sm  ml-0 mr-0 md:ml-5 md:mr-5 shadow-xl rounded-xl shadow-black sm:flex ">
              <div className="overflow-hidden text-center rounded-l-xl">
                <img
                  className="md:w-[350px] w-[350px] h-[300px] md:h[350px] object-cover"
                  src={urlFor(store.imageurl).url()}
                />
              </div>
              <div className="flex sm:w-[250px] max-w-[350px] h-auto p-2 flex-col bg-slate-700 rounded-r-xl">
                <div className="text-2xl mb-4 flex-[1] md:flex-[3]">
                  <div className="border-b-2 p-2 border-purpleAccent text-center">
                    {store.name}
                  </div>
                  <div className="text-xl mt-4 flex ">{store.description}</div>
                </div>
                <div className="flex border-t-2 border-purpleAccent">
                  <div className="flex items-center gap-6 w-full">
                    <div className="flex w-[70%] items-center">
                      <h1 className="p-2">{store.district}</h1>
                      <a href={store.address} target="_blank">
                        <img src={Map} className="h-[32px] w-[32px]" />
                      </a>
                    </div>
                    <div className="">
                      <h1 className="">{store.discount} %</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
