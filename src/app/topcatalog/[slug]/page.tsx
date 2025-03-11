"use client";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type CatalogProductType = {
  has_child: boolean;
  id: number;
  image: string;
  name: string;
  slug: string;
};

function Page() {
  const params = useParams();
  const [catalogProducts, setCatalogProducts] = useState<CatalogProductType[]>(
    []
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `https://gw.texnomart.uz/api/web/v1/category/chips?slug=${params.slug}`
        );
        console.log(res.data.data.categories);
        setCatalogProducts(res.data.data.categories);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [params.slug]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="max-w-[1440px] m-auto">Loading...</div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-[1440px] m-auto">
        <ul className="grid grid-cols-8 w-full">
          {catalogProducts.map((product) => (
            <li key={product.id}>
              <span>{product.name}</span>
              {product.image && (
                <Image
                  width={80}
                  height={80}
                  src={product.image}
                  alt={product.name}
                />
              )}
              {/* <p>{product.slug}</p> */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
