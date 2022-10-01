import React, { useEffect, useState } from "react";

import { urlFor } from "../sanityConfig";

const Card = ({ stores }) => {
  return (
    <div>
      {stores.map((store) => {
        return (
          <div className="m-8" key={store._id}>
            <div className="bg-green-200 w-[98vh] flex shadow-sm">
              <div className="overflow-hidden h-52">
                <img
                  className="w-[200px] h-full object-cover block"
                  src={urlFor(store.imageurl).url()}
                />
              </div>
              <div className="flex w-full p-2 flex-col">
                <div className="w-full bg-red-200 h-[180px]">
                  <h2 className="">{store.name}</h2>
                  <p className="">{store.description}</p>
                </div>
                <div className="flex bg-blue-200 justify-around">
                  <div className="flex-[4] flex ">
                    <div>A</div>
                    <div>B</div>
                  </div>
                  <div className="flex-[2] bg-red-400 flex items-center justify-end">
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
