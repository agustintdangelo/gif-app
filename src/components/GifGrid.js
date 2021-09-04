import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category, limit }) => {
  const { data: images, loading } = useFetchGifs(category, limit);

  return (
    <div className="container w-11/12 mx-auto justify-center">
      <h3 className="animate__animated animate__fadeIn font-mono text-center font-black dark:text-white transition duration-500">
        {category}
      </h3>
      {loading && <p className="animate__animated animate__flash">Loading</p>}

      <div className="flex flex-row flex-wrap gap-4 justify-center">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} className="flex"/>;
        })}
      </div>
    </div>
  );
};
