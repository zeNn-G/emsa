import React, { useEffect, useState } from "react";
import Card from "./components/Card";

import Logo from "./assets/EmsaGazi.webp";

import { client } from "./sanityConfig";

const App = () => {
  const [stores, setStores] = useState([]);
  const [origStores, setOrigStores] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const query = '*[_type == "stores"]';
    client.fetch(query).then((data) => setOrigStores(data));

    setStores(origStores);

    console.log(stores);
  }, []);

  useEffect(() => {
    if (search.length > 0) {
      const filteredStores = stores.filter((store) => {
        return store.name.toLowerCase().includes(search.toLowerCase());
      });

      if (filteredStores.length > 0) {
        setStores(filteredStores);
      } else {
        const query = '*[_type == "stores"]';
        client.fetch(query).then((data) => setStores(data));
      }

      setStores(filteredStores);
    } else {
      setStores(stores);
    }
  }, [search]);

  return (
    <div className="bg-primary flex flex-col justify-center items-center">
      <div className="flex w-[80%] mt-[100px] ">
        <img src={Logo} alt="Emsa Gazi Logo" className="object-cover" />
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className=" w-[80%] mt-[100px] bg-red-400">
        <Card stores={stores} />
      </div>
    </div>
  );
};

export default App;
