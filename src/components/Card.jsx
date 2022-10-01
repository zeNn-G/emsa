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
              <div className="p-2">
                <h2 className="name">{store.name}</h2>
                <p className="desctription">{store.description}</p>

                <div className="flex justify-between  flex-row">
                  <div className="items-center">
                    <h3 className="p-4 bg-blue-200 justify-start inline-block  rounded-xl">
                      {store.district}
                    </h3>
                    <button className="ml-4">
                      {/* {store.address} */}
                      adress
                    </button>
                  </div>
                  <div className="mt-4 end ">{store.discount}</div>
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
