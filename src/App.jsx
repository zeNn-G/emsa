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
      setIsFound(true);
    });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filteredStores = originalStores.filter((store) => {
      return store.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setStores(filteredStores);
    setIsFound(filteredStores.length > 0);
  };

  return (
    <div className="bg-primary flex flex-col justify-center items-center">
      <div className="flex w-[80%] mt-[100px] ">
        <img src={Logo} alt="Emsa Gazi Logo" className="object-cover" />
        <input
          type="text"
          onInput={(e) => {
            handleSearch(e);
          }}
        />
      </div>

      <div className=" w-[80%] mt-[100px] bg-red-400">
        {isFound ? <Card stores={stores} /> : null}
      </div>
    </div>
  );
};

export default App;
