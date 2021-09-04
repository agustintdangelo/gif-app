import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, Router } from "react-router-dom";
import "./GifGridItem.css";
import "react-lazy-load-image-component/src/effects/blur.css";

export const GifGridItem = ({ id, title, url, width, height }) => {
  return (
    <a
      className="flex relative flex-auto max-w-lg"
      target="_blank"
      href={`https://i.giphy.com/media/${id}/giphy.gif`}
    >
      <LazyLoadImage
        src={url} // use normal <img> attributes as props
        className="rounded-lg shadow-lg max-h-64  flex-auto"
      />

      {/* <img
        className="flex-auto rounded-lg transition animate__animated animate__fadeIn animate__delay shadow-lg max-h-64 max-w-lg "
        src={url}
        alt={title}
        
      /> */}
      <div className="opacity-0 bg-opacity-60  bg-black inset-0 z-10 hover:opacity-100 duration-300 absolute flex justify-center items-center rounded-lg text-white font-semibold ">
        {title}
      </div>
    </a>
  );
};
