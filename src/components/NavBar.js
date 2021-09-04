import React from "react";
import { Link } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";
import { AddCategory } from "./AddCategory";

export const NavBar = ({ setCategories, setLimit }) => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <header className="border-b-2 dark:border-gray-600 dark:bg-black bg-gray-200  md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4 flex flex-col md:flex-row  transition duration-500">
      <div className="flex justify-center items-center  mb-4 md:mb-0 ">
        <h1 className="leading-none text-2xl ">
          <a className="no-underline dark:text-gray-400 dark:hover:text-white hover:text-gray-400 font-mono transition duration-500">
            GifApp
          </a>
        </h1>
      </div>

      <AddCategory setCategories={setCategories} setLimit={setLimit} />
      <nav>
        <ul className="flex justify-center md:flex md:items-center m-2 md:m-0">
          <li className="md:ml-4">
            <span
              onClick={() => setTheme(colorTheme)}
              className=" w-10 h-10 bg-white block rounded-full shadow-lg cursor-pointer flex items-center justify-center transition duration-500 "
            >
              {
                colorTheme==='dark'?
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transition duration-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>:
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
              }
              
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};
