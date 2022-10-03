import React, { useEffect, useState } from "react";

import { urlFor } from "../sanityConfig";

const Card = ({ stores }) => {
  return (
    <div className="flex-wrap relative md:flex  justify-center">
      {stores.map((store) => {
        return (
          <div className="flex-row flex mt-10 justify-center items-center text-white gap-8">
            <div className="backdrop-blur-sm  ml-0 mr-0 md:ml-5 md:mr-5  shadow-xl rounded-xl shadow-black sm:flex hover:scale-110">
              <div className="overflow-hidden text-center">
                <img
                  className="md:w-[350px] w-[250px] h-[250px] md:h[350px] object-fit"
                  src={urlFor(store.imageurl).url()}
                />
              </div>
              <div className="flex sm:w-[250px] h-auto p-2 flex-col bg-slate-500">
                <div className="text-2xl mb-4 flex-[1] md:flex-[3]">
                  <div className="border-b-2">{store.name}</div>
                  <div className="text-xl">{store.description}</div>
                </div>
                <div className="flex justify-around ">
                  <div className="flex ">
                    <div className=" p-2">{store.district}</div>
                    <button className=" p-2">Icon</button>
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
