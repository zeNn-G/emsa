import React, { useEffect, useState } from "react";

import { urlFor, client } from "./sanityConfig";

const App = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const query = '*[_type == "stores"]';

    client.fetch(query).then((data) => setStores(data));
  }, []);

  return (
    <div>
      {stores.map((store) => {
        return (
          <>
            <div key={store._id}>{store.description}</div>
            <img src={urlFor(store.imageurl).url()} />
          </>
        );
      })}
    </div>
  );
};

export default App;
