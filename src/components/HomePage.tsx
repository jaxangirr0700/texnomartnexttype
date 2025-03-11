"use client";
import axios from "axios";
import { log } from "console";
import React, { useEffect, useState } from "react";

type topCatigoriesType = {
  slug: string;
  title: string;
};
function HomePage() {
  const [topCatigories, setTopCatigories] = useState<topCatigoriesType[]>();
  useEffect(() => {
    axios
      .get(`https://gw.texnomart.uz/api/web/v1/header/top-categories`)
      .then((res) => {
        // console.log(res.data.data.data);
        setTopCatigories(res.data.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  }, []);
  return (
    <div className="py-3">
      <ul className="flex  justify-between ">
        {topCatigories?.map((i, index) => {
          return (
            <li
              key={index}
              className="text-xl cursor-pointer hover:scale-105 transition-all 0.5s"
            >
              {i.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HomePage;
