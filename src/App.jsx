import React, { useEffect, useState } from "react";
import Card from "./components/Card";

import Logo from "./assets/EmsaGazi.webp";

import { client } from "./sanityConfig";

const App = () => {
  const [stores, setStores] = useState([]);
  const [originalStores, setOriginalStores] = useState([]);
  const [isFound, setIsFound] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const query = '*[_type == "stores"]';
    client.fetch(query).then((data) => {
      setStores(data);
      setOriginalStores(data);
    });
  }, []);

  const results = stores.filter((store) =>
    store.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (search.length > 0) {
      // const filteredStores = stores.filter((store) => {
      //   store.name.toLowerCase().includes(search.toLowerCase());
      // });

      if (results.length > 0) {
        setStores(results);
        setIsFound(false);
      } else {
        setIsFound(true);
      }

      console.log(results);
      console.log(isFound);
    } else {
      setStores(originalStores);
    }
  }, [search]);

  return (
    <div className="bg-primary flex flex-col justify-center items-center">
      <div className="flex w-[80%] mt-[100px] ">
        <img src={Logo} alt="Emsa Gazi Logo" className="object-cover" />
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className=" w-[80%] mt-[100px] bg-red-400">
        {!isFound ? <Card stores={stores} /> : null}
      </div>
    </div>
  );
};

export default App;
