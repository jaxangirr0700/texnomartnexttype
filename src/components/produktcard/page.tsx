import Link from "next/link";
import React from "react";
import { ProductCartType } from "../produkttype/page";
import Image from "next/image";

function ProduktCard({ item }: ProductCartType) {
  return (
    <Link href={`/product/${item.id}`}>
      <li className="flex flex-col max-w-[250px] p-2 hover:scale-105 transition-all 0.5s border border-slate-200 rounded-xl">
        <div className="h-full w-full bg-slate-100 rounded-xl ">
          <Image
            style={{ height: 200 }}
            width={200}
            height={200}
            src={item.image}
            alt={item.name}
          />
        </div>
        <div>
          <p>{item.name}</p>
          <p className="bg-slate-100 inline-block px-3 py-1 rounded-xl">
            {(item.sale_price * 1.2) / 24} So'mdan / 24 oy
          </p>
          <p className="font-bold text-xl">{item.sale_price} So'm</p>
        </div>
      </li>
    </Link>
  );
}

export default ProduktCard;
