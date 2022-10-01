import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="bg-primary flex justify-center items-center">
      <div className=" w-[80%] mt-[200px] bg-red-400">
        <div className="flex justify-start items-start">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default App;
