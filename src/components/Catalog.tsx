"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type CatalogType = {
  brands: [];
  childs: ChildType[];
  icon: string;
  name: string;
  show_childs_in_web_mobile: true;
  slug: string;
};

type ChildType = {
  childs: ChildsType[];
  name: string;
  show_childs_in_web_mobile: boolean;
  slug: string;
};

type ChildsType = {
  name: string;
  show_childs_in_web_mobile: boolean;
  slug: string;
};

function Catalog() {
  const [catalog, setCatalog] = useState<CatalogType[]>();

  useEffect(() => {
    axios
      .get(`https://gw.texnomart.uz/api/web/v1/header/popup-menu-catalog`)
      .then((res) => {
        // console.log(res.data.data.data);
        setCatalog(res.data.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="my-3">
      <ul className="flex justify-between cursor-pointer">
        {catalog?.map((item, index) => {
          const shortName = item.name.substring(
            0,
            item.name.indexOf(" ") !== -1
              ? item.name.indexOf(" ")
              : item.name.length
          );

          return (
            <li
              key={index}
              className="flex flex-col items-center transition-all 0.5s hover:scale-105"
            >
              <Link href={`/catalog/${item.slug}`}>
                <img className="w-20 h-20" src={item.icon} alt={item.name} />
                <span>{shortName}</span>
              </Link>

              {/* Childsni ko'rsatish */}
              <ul>
                {/* {item.childs.map((child) => (
                  <li key={child.slug}>
                    <Link href={`/catalog/${child.slug}`}>{child.name}</Link>
                  </li>
                ))} */}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Catalog;
