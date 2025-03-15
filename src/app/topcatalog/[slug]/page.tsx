"use client";
import Navbar from "@/components/Navbar";
import ProduktCard from "@/components/produktcard/page";
import { Pagination } from "antd";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type CatalogProductType = {
  brands: [];
  filter: [];
  pagination: PaginationType;

  price: PriceType;

  products: [];
  sale_months: [];
  stickers: [];
  total: number;
};
type PaginationType = {
  current_page: number;
  page_size: number;
  total_count: number;
  total_page: number;
};
type PriceType = { max_price: null; min_price: null };

function Page() {
  const { slug } = useParams();
  const [catalogProducts, setCatalogProducts] = useState<CatalogProductType>();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${slug}&sort=-order_count&page=${page}`
        );

        console.log(res.data.data);
        setCatalogProducts(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [slug, page]);

  if (loading || !catalogProducts) {
    return (
      <>
        <div className="max-w-[1440px] m-auto">Loading...</div>
      </>
    );
  }

  return (
    <>
      <div className="max-w-[1440px] m-auto">
        <div className="grid grid-cols-4 w-full">
          {catalogProducts.products.map((item, index) => {
            return <ProduktCard item={item} key={index} />;
          })}
        </div>
        <Pagination
          total={catalogProducts.total}
          showTotal={(total) => `Total ${total} items`}
          defaultPageSize={20}
          current={page}
          onChange={(pageNumber) => setPage(pageNumber)}
        />
      </div>
    </>
  );
}

export default Page;
