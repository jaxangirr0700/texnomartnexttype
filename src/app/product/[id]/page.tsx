"use client";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
//
type ProductTypee = {
  availability: string;
  benefit: number;
  brand: string;
  breadcrumbs: breadcrumbsType[];
  code: string;
  guarantee: string;
  id: number;
  installment_price: number;
  is_can_loan_order: number;
  large_images: string[];
  loan_price: string;
  main_characters: mainCharactersType[];
  model: string;
  name: string;
  offers_by_character: [];
  offers_by_image: [];
  old_price: boolean;
  promotion_0_0_12_price: boolean;
  reviews_count: number;
  reviews_middle_rating: boolean;
  sale_months: [];
  sale_price: number;
  small_images: string[];
  stickers: [];
};
type breadcrumbsType = { name: string; slug: string };
type mainCharactersType = {
  name: string;
  value: string;
};
type minimalLoanPriceType = {
  description: string;
  min_loan_type: string;
  min_monthly_price: string;
  month_number: number;
};

function ProductPage() {
  const params = useParams();

  const [product, setProduct] = useState<ProductTypee>();
  useEffect(() => {
    axios
      .get(`https://gw.texnomart.uz/api/web/v1/product/detail?id=${params.id}`)
      .then((res) => {
        // console.log(res.data.data.data);
        setProduct(res.data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Navbar />

      <div className="max-w-[1440px] m-auto">
        <div className="flex  items-center w-full justify-center">
          <p>{product?.brand}</p>
          <Image
            width={100}
            height={100}
            src={product?.large_images[0] || "asda"}
            alt={product?.brand || "asd"}
          />
          <p>{product?.sale_price}</p>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
