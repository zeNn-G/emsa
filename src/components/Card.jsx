import React from "react";

import { urlFor } from "../sanityConfig";
import { MapIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = ({ stores }) => {
  return (
    <section className="flex-wrap absolute flex justify-center text-center align-middle w-[98vw] ">
      {stores.map((store) => {
        return (
          <section
            className="flex-row flex mt-10 justify-center items-center text-white gap-8 "
            key={store._id}
          >
            <div
              className="flex flex-row backdrop-blur-sm ml-3 mr-3 md:ml-5 md:mr-5 rounded-xl
            max-w-[400px] md:max-w-[550px] 
            max-h-[350px] md:max-h-[270px] "
            >
              <div className="flex overflow-hidden text-center  md:rounded-none  rounded-sm bg-slate-700 md:rounded-l-xl md:w-[600px]">
                {/* <img
                  className="md:w-[300px] w-[350px] h-[270px] md:h[150px]  object-cover bg-slate-700"
                  src={urlFor(store.imageurl).url()}
                  alt={store.name}
                /> */}
                <LazyLoadImage
                  className="md:w-[300px] w-[350px] h-[270px] md:h[150px]  object-cover bg-slate-700"
                  src={urlFor(store.imageurl).url()}
                  effect="blur"
                  alt={store.name}
                />
              </div>
              <div className="flex p-2 flex-col bg-slate-700 bg-opacity-60 rounded-sm md:rounded-r-xl w-full">
                <div className="md:text-2xl mb-4 flex-[1] md:flex-[3]">
                  <h1 className="border-b-2 p-2 border-purpleAccent text-center font-semibold">
                    {store.name}
                  </h1>
                  <h1 className="md:text-xl text-sm text-center mt-2">
                    {store.description}
                  </h1>
                </div>
                <div className="flex border-t-2 border-purpleAccent">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 w-full">
                    <div className="flex w-[70%] items-center sm:justify-start justify-center">
                      <h1 className="mr-2 text-center flex">
                        {store.district}
                      </h1>
                      <a href={store.address} target="_blank">
                        <MapIcon className="h-6 w-6 text-purpleAccent" />
                        {/* <img src={Mapicon} className="h-[32px] w-[32px]" /> */}
                      </a>
                      <div className="ml-1 mr-1 cursor-pointer">
                        <Link
                          to={`/sozlesmeler/:${store.name}`}
                          state={store.contracturl}
                        >
                          <PencilSquareIcon className="h-6 w-6 text-purpleAccent" />
                        </Link>
                      </div>
                    </div>
                    <div className="">
                      <h1 className="">
                        <span className="font-bold text-sm">
                          {store.discount}
                        </span>{" "}
                        %
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default Card;
