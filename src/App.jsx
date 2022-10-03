import React, { useEffect, useState } from "react";
import Card from "./components/Card";

import Logo from "./assets/EmsaGazi.webp";

import { client } from "./sanityConfig";
import { data } from "./data";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const App = () => {
  const [stores, setStores] = useState([]);
  const [originalStores, setOriginalStores] = useState([]);
  const [isFound, setIsFound] = useState(true);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   const query = '*[_type == "stores"]';
  //   client.fetch(query).then((data) => {
  //     setStores(data);
  //     setOriginalStores(data);
  //     setIsFound(true);
  //   });
  // }, []);

  useEffect(() => {
    setStores(data);
  }, []);

  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  //   const filteredStores = originalStores.filter((store) => {
  //     return store.name.toLowerCase().includes(e.target.value.toLowerCase());
  //   });
  //   setStores(filteredStores);
  //   setIsFound(filteredStores.length > 0);
  // };

  return (
    <div className="bg-primary flex flex-col justify-center items-center">
      <div className="flex md:flex-row flex-col w-[80%] mt-[100px] justify-center">
        <img src={Logo} alt="Emsa Gazi Logo" className="object-cover" />
        <div className="flex-row items-center space-x-2 pb-2 mx-4 md:w-[500px] mt-[20px] md:mt-0 ">
          <div className="flex flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded-xl mt-[8px]">
            <MagnifyingGlassIcon className="w-[24px] h-[24px] border-r" />
            <input
              type="search"
              name="search"
              placeholder="Mekan Ara"
              onInput={(e) => {
                handleSearch(e);
              }}
              className="bg-transparent outline-none w-full text-black placeholder-gray-500"
            />
          </div>
        </div>
      </div>

      <div className=" w-[90%] mt-[40px]">
        {isFound ? <Card stores={stores} /> : null}
      </div>
    </div>
  );
};

export default App;
