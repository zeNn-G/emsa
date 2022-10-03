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
                  className="w-[500px] h-[250px]"
                  src={urlFor(store.imageurl).url()}
                />
              </div>
              <div className="flex w-full p-2 flex-col">
                <div className="text-2xl mb-4">
                  <div className="border-b-2">{store.name}</div>
                </div>
                <div className="text-xl">{store.description}</div>
                <div className="flex justify-around align-bottom">
                  <div className="flex ">
                    <div className=" p-2">A</div>
                    <div className=" p-2">B</div>
                  </div>
                  <div className="flex-[2] flex items-center justify-end">
                    <div className="">C</div>
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
