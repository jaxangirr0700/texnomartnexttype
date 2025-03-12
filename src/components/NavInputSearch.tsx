"use client";
import axios from "axios";
import { log } from "node:console";
import React, { useEffect, useState } from "react";

function SearchIcon() {
  return (
    <svg
      className="w-4 h-4 text-yellow-500 dark:text-yellow-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
      />
    </svg>
  );
}
function SearchInput({ input, setInput }: any) {
  return (
    <div className="max-w-md mx-auto">
      <label className="mb-2 text-sm font-medium text-yellow-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-yellow-900 border border-yellow-300 rounded-lg bg-yellow-50 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yellow-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
          placeholder="Search Mockups, Logos..."
          required
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input || ""}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
        >
          Search
        </button>
      </div>
    </div>
  );
}
function NavInputSearch() {
  const [input, setInput] = useState("samsung");
  const [loading, setLoading] = useState<any>(true);
  const [products, setProducts] = useState<boolean>(true);
  useEffect(() => {
    axios
      .get(`https://gateway.texnomart.uz/api/common/v1/search/header`, {
        params: {
          q: input,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [input]);
  return (
    <div>
      <SearchInput input={input} setInput={setInput} />
      <div>
        {/* {products.products.map((c) => {
          return <p>{c.id}</p>;
        })} */}
      </div>
    </div>
  );
}

export default NavInputSearch;
