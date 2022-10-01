import React, { useEffect, useState } from "react";

import { urlFor, client } from "../sanityConfig";

const Card = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const query = '*[_type == "stores"]';

    client.fetch(query).then((data) => setStores(data));
  }, []);

  return (
    <div>
      {stores.map((store) => {
        return (
          <div className="">
            <div className="">
              <div className="">
                <img src={urlFor(store.imageurl).url()} />
              </div>
              <div className="">
                <div className="">
                  <div className="" key={store._id}>
                    {store.name}
                  </div>
                  <div className="" key={store._id}>
                    {store.description}
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
