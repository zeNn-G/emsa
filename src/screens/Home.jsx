import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Spinner from "../components/Spinner";

import Logo from "../assets/EmsaGazi.webp";

import { client } from "../sanityConfig";
import { data } from "../data";
import { useQuery } from "react-query";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Home = () => {
  const [stores, setStores] = useState([]);
  const [originalStores, setOriginalStores] = useState([]);
  const [isFound, setIsFound] = useState(false);

  const { isLoading, error, data } = useQuery("stores", () => {
    const query = '*[_type == "stores"]';

    return client.fetch(query);
  });

  useEffect(() => {
    if (data) {
      setStores(data);
      setOriginalStores(data);
      setIsFound(true);
    }
  }, [data]);
  if (isLoading)
    return (
      <div className="flex text-center mt-[200px] items-center content-center justify-center">
        <Spinner />
      </div>
    );

  //! Debug With Data
  // useEffect(() => {
  //   setStores(data);
  //   setOriginalStores(data);
  //   setIsFound(true);
  // }, []);

  const handleSearch = (e) => {
    const filteredStores = originalStores.filter((store) => {
      return store.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setStores(filteredStores);
    setIsFound(filteredStores.length > 0);
  };

  return (
    <div className="relative">
      <div className="bg-primary flex flex-col justify-center items-center">
        <div className="flex md:flex-row flex-col md:mt-[100px] mt-[60px] justify-center">
          <img src={Logo} alt="Emsa Gazi Logo" className="object-cover" />
          <div className="flex-row items-center space-x-2 pb-2 sm:mx-4 md:w-[500px] mt-[20px] md:mt-0 ">
            <div className="flex flex-row flex-1 space-x-2 bg-gray-300 p-3 rounded-xl mt-[8px]">
              <MagnifyingGlassIcon className="w-[24px] h-[24px]" />
              <input
                type="search"
                name="search"
                placeholder="Mekan Ara"
                onInput={(e) => {
                  handleSearch(e);
                }}
                className="bg-transparent outline-none w-full text-black placeholder-gray-600 "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[40px]">
        {isFound ? <Card stores={stores} /> : null}
      </div>
    </div>
  );
};

export default Home;
