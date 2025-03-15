"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
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
    <div className="w-full mx-auto">
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
          className=" outline-none block w-full p-4 ps-10 text-sm text-yellow-900 border border-yellow-300 rounded-lg bg-yellow-50 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yellow-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
          placeholder="Search Mockups, Logos..."
          required
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input || ""}
        />
        <button
          onClick={() => {
            setInput("");
          }}
          className={` ${
            input.length > 0 ? "block" : "hidden"
          } text-white absolute end-2.5 bottom-2.5 bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800`}
        >
          X
        </button>
      </div>
    </div>
  );
}

type ProductCPM_Type = {
  categories: CategoriesType[];
  models: ModelsType[];
  products: ProductsProductType[];
};

type CategoriesType = {
  id: number;
  slug: string;
  title: string;
};
type ModelsType = {
  id: number;
  slug: string;
  title: string;
};
type ProductsProductType = {
  id: number;
  image: string;
  name: string;
};
function NavInputSearch() {
  const [input, setInput] = useState("samsung");
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductCPM_Type | null>();
  useEffect(() => {
    const fetchProducts = () => {
      setLoading(true);
      setTimeout(() => {
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
      }, 1500);
    };
    fetchProducts();
  }, [input]);

  return (
    <div className="w-full flex flex-col items-center  relative font-bold">
      <SearchInput input={input} setInput={setInput} />

      <div className="flex flex-col gap-8 absolute top-13 bg-slate-50 w-full rounded-b-2xl px-5 py-3 z-10">
        <div className=" flex flex-wrap gap-2">
          {products?.models?.map((c) => {
            return (
              <div key={c.id} className="flex gap-5  ">
                <Link
                  href={"/"}
                  className=" rounded-xl border border-slate-300 px-2 py-1 bg-slate-100 hover:scale-105 hover:bg-slate-300 transition-all 0.7s"
                >
                  {c.title}
                </Link>
              </div>
            );
          })}
        </div>{" "}
        <div className=" flex flex-col">
          {products?.categories?.map((c) => {
            return (
              <div
                key={c.id}
                className="flex gap-5 hover:bg-slate-300 transition-all 0.7s"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5.25 9.75H9.75V5.25H5.25V9.75ZM3.75 5.24971C3.75 4.42144 4.41557 3.75 5.24971 3.75H9.75029C10.5786 3.75 11.25 4.41557 11.25 5.24971V9.75029C11.25 10.5786 10.5844 11.25 9.75029 11.25H5.24971C4.42144 11.25 3.75 10.5844 3.75 9.75029V5.24971ZM5.25 18.75H9.75V14.25H5.25V18.75ZM3.75 14.2497C3.75 13.4214 4.41557 12.75 5.24971 12.75H9.75029C10.5786 12.75 11.25 13.4156 11.25 14.2497V18.7503C11.25 19.5786 10.5844 20.25 9.75029 20.25H5.24971C4.42144 20.25 3.75 19.5844 3.75 18.7503V14.2497ZM14.25 18.75H18.75V14.25H14.25V18.75ZM12.75 14.2497C12.75 13.4214 13.4156 12.75 14.2497 12.75H18.7503C19.5786 12.75 20.25 13.4156 20.25 14.2497V18.7503C20.25 19.5786 19.5844 20.25 18.7503 20.25H14.2497C13.4214 20.25 12.75 19.5844 12.75 18.7503V14.2497ZM14.25 9.75H18.75V5.25H14.25V9.75ZM12.75 5.24971C12.75 4.42144 13.4156 3.75 14.2497 3.75H18.7503C19.5786 3.75 20.25 4.41557 20.25 5.24971V9.75029C20.25 10.5786 19.5844 11.25 18.7503 11.25H14.2497C13.4214 11.25 12.75 10.5844 12.75 9.75029V5.24971Z"
                    fill="#BABAC0"
                  ></path>
                </svg>

                <Link href={"/"} className=" ">
                  {c.title}
                </Link>
              </div>
            );
          })}
        </div>
        <div>
          {products?.products?.map((c) => {
            return (
              <div
                key={c.id}
                className="flex  items-center hover:bg-slate-300 transition-all 0.7s"
              >
                <Image width={50} height={50} src={c.image} alt={c.name} />
                <span className="font-bold">{c.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NavInputSearch;
