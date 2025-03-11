"use client";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { log } from "node:console";
import React, { useEffect, useState } from "react";

function page() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=pylesosy&sort=-order_count&page=1`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);
  return (
    <>
      <Navbar />

      <div className="max-w-[1440px] m-auto"></div>
    </>
  );
}

export default page;
