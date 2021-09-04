import React, { useState } from "react";


import { GifGrid } from "./components/GifGrid";
import { NavBar } from "./components/NavBar";
import useDarkMode from "./hooks/useDarkMode";

export const GifApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  const [limit, setLimit] = useState(10);


  return (
 
    <div className="h-screen dark:bg-black transition duration-500">
      <NavBar setCategories={setCategories} setLimit={setLimit} />
      <ol className="dark:bg-black transition duration-500">
        <GifGrid category={categories} limit={limit}/>
        {/* {categories.map((category) => (
          <GifGrid key={category} category={category} limit={limit} />
        ))} */}
      </ol>
    </div>
  
  );
};

export default GifApp;
