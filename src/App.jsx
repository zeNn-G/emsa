import React, { useEffect, useState } from "react";
import Card from "./components/Card";

import Logo from "./assets/EmsaGazi.webp";

import { client } from "./sanityConfig";

const App = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const query = '*[_type == "stores"]';

    client.fetch(query).then((data) => setStores(data));
  }, []);

  return (
    <div className="bg-primary flex flex-col justify-center items-center">
      <div className="flex w-[80%] mt-[100px] ">
        <img src={Logo} alt="Emsa Gazi Logo" className="object-cover" />
      </div>
      <div className=" w-[80%] mt-[100px] bg-red-400">
        <div className="flex justify-start items-start">
          <Card stores={stores} />
        </div>
      </div>
    </div>
  );
};

export default App;
