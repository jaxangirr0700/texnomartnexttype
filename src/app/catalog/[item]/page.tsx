"use client";
import Navbar from "@/components/Navbar";
import { Pagination } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

type ProductType = {
  brands: BrandsType[];
  filter: FilterType[];
  pagination: PaginationType;
  price: PriceType;
  products: ProductsType[];
  sale_months: [];
  stickers: {}[];
  total: number;
};

type PaginationType = {
  current_page: number;
  page_size: number;
  total_count: number;
  total_page: number;
};

type PriceType = {
  max_price: number;
  min_price: number;
};

type BrandsType = {
  count: number;
  id: number;
  name: string;
};

type FilterType = {
  count: number;
  id: number;
  name: string;
  values: FilterValuesType[];
};

type FilterValuesType = {
  count: number;
  id: number;
  value: string;
};

type ProductsType = {
  all_count: number;
  availability: string;
  axiom_monthly_price: string;
  benefit: number;
  code: string;
  discount: number;
  id: number;
  image: string;
  is_can_loan_order: number;
  main_characters: MainCharacter[];
  name: string;
  old_price: number;
  reviews_average: boolean;
  reviews_count: number;
  sale_months: [];
  sale_price: number;
  stickers: [];
};

type MainCharacter = {
  name: string;
  order: number;
  value: string;
};

function Page() {
  const [loader, setLoader] = useState(true);
  const [product, setProduct] = useState<ProductType | undefined>(undefined);
  const [page, setPage] = useState<number>(2);

  useEffect(() => {
    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=pylesosy&sort=-order_count&page=${page}`
      )
      .then((res) => {
        console.log(res.data.data);
        setProduct(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [page]);

  return loader ? (
    <>
      <div className="max-w-[1440px] m-auto">Loading.....</div>
    </>
  ) : product ? (
    <>
      <div className="max-w-[1440px] m-auto">
        <div className="grid grid-cols-4 gap-4">
          {product.products.map((item) => (
            <div
              key={item.id}
              className="border-2 p-4 rounded-xl border-slate-300"
            >
              <img src={item.image} alt={item.name} className="w-full h-auto" />
              <h3 className="font-bold">{item.name}</h3>
              <p>
                Price: {item.sale_price} (Old Price: {item.old_price})
              </p>
              <p>Discount: {item.discount}%</p>
              <p>Reviews: {item.reviews_count}</p>
            </div>
          ))}
        </div>
        <Pagination
          total={product.total}
          showTotal={(total) => `Total ${total} items`}
          defaultPageSize={20}
          current={page}
          onChange={(pageNumber) => setPage(pageNumber)}
        />
      </div>
    </>
  ) : (
    <>
      <div className="max-w-[1440px] m-auto">Apida Xato</div>
    </>
  );
}

export default Page;
