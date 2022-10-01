import React, { useEffect, useState } from "react";

import { urlFor } from "../sanityConfig";

const Card = ({ stores }) => {
  return (
    <div>
      {stores.map((store) => {
        return (
          <div className="" key={store._id}>
            <div className="">
              <div className="">
                <img src={urlFor(store.imageurl).url()} />
              </div>
              <div className="">
                <div className="">
                  <div className="">{store.name}</div>
                  <div className="">{store.description}</div>
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
