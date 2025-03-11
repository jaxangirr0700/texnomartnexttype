"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type ProductType = {
  all_count: number;
  availability: string;
  axiom_monthly_price: string;
  benefit: number;
  discount_price: number;
  id: number;
  image: string;
  is_can_loan_order: number;
  name: string;
  old_price: boolean;
  reviews_average: boolean;
  reviews_count: number;
  sale_months: [];
  sale_price: number;
  stickers: [];
};

function Products() {
  const [products, setProducts] = useState<ProductType[]>();
  useEffect(() => {
    axios
      .get(
        `https://gw.texnomart.uz/api/web/v1/home/special-products?type=hit_products`
      )
      .then((res) => {
        // console.log(res.data.data.data);
        setProducts(res.data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <ul className="grid grid-cols-5">
        {products?.map((i, index) => {
          return (
            <Link key={index} href={`/product/${i.id}`}>
              <li className="flex flex-col max-w-[250px] p-2 hover:scale-105 transition-all 0.5s border border-slate-200 rounded-xl">
                <div className="h-full w-full bg-slate-100 rounded-xl">
                  <img src={i.image} alt={i.name} />
                </div>
                <div>
                  <p>{i.name}</p>
                  <p className="bg-slate-100 inline-block px-3 py-1 rounded-xl">
                    {(i.sale_price * 1.2) / 24} So'mdan / 24 oy{" "}
                  </p>
                  <p className="font-bold text-xl">{i.sale_price} So'm</p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Products;
