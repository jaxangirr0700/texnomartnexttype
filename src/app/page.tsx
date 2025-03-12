import Image from "next/image";
import Navbar from "../components/Navbar";
import HomePage from "@/components/HomePage";
import Products from "@/components/Products";
import Catalog from "@/components/Catalog";

export default function Home() {
  return (
    <div>
      <div className="max-w-[1440px] m-auto">
        <Catalog />
        <Products />
      </div>

      <main></main>
      <footer></footer>
    </div>
  );
}
