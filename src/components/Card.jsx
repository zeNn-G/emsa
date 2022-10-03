import React, { useEffect, useState } from "react";

import { urlFor } from "../sanityConfig";

const Card = ({ stores }) => {
  return (
    <div className="flex-wrap flex mt-10 items-center text-center justify-center">
      {stores.map((store) => {
        return (
          <div className="flex-wrap h-[300px] flex ml-10 justify-center items-center text-white gap-8">
            <div className="bg-black/30 backdrop-blur-sm w-[400px] h-[250px] shadow-xl rounded-xl shadow-black flex flex-row hover:scale-110">
              <div className="overflow-hidden text-center">
                <img
                  className="w-[500px] h-[250px] object-cover"
                  src={urlFor(store.imageurl).url()}
                />
              </div>
              <div className="flex w-full p-2 flex-col bg-slate-500">
                <div className="text-2xl mb-4 flex-[3]">
                  <div className="border-b-2">{store.name}</div>
                  <div className="text-xl">{store.description}</div>
                </div>
                <div className="flex justify-around bg-purple-600 flex-[1]">
                  <div className="flex ">
                    <div className=" p-2">{store.district}</div>
                    <div className=" p-2">Icon</div>
                  </div>
                  <div className="flex-[2] flex items-center justify-end">
                    <div className="">{store.discount} %</div>
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
