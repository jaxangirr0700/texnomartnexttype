"use client";
import {
  DownOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Menu, Space } from "antd";
import Link from "next/link";
import { ReactNode, useState } from "react";
import HomePage from "./HomePage";
import NavInputSearch from "./NavInputSearch";
import NavRight from "./NavRight";

function Navbar() {
  const [katalog, setKatalog] = useState(false);
  const [language, setLanguage] = useState(1);

  const kotigories = [
    {
      nomi: "Aksiyalar",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          color={"#000000"}
          fill={"none"}
        >
          <path
            d="M13.8561 22C26.0783 19 19.2338 7 10.9227 2C9.9453 5.5 8.47838 6.5 5.54497 10C1.66121 14.6339 3.5895 20 8.96719 22C8.1524 21 6.04958 18.9008 7.5 16C8 15 9 14 8.5 12C9.47778 12.5 11.5 13 12 15.5C12.8148 14.5 13.6604 12.4 12.8783 10C19 14.5 16.5 19 13.8561 22Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      nomi: "1+1",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          color={"#000000"}
          fill={"none"}
        >
          <path
            d="M8.62814 12.6736H8.16918C6.68545 12.6736 5.94358 12.6736 5.62736 12.1844C5.31114 11.6953 5.61244 11.0138 6.21504 9.65083L8.02668 5.55323C8.57457 4.314 8.84852 3.69438 9.37997 3.34719C9.91142 3 10.5859 3 11.935 3H14.0244C15.6632 3 16.4826 3 16.7916 3.53535C17.1007 4.0707 16.6942 4.78588 15.8811 6.21623L14.8092 8.10188C14.405 8.81295 14.2029 9.16849 14.2057 9.45952C14.2094 9.83775 14.4105 10.1862 14.7354 10.377C14.9854 10.5239 15.3927 10.5239 16.2074 10.5239C17.2373 10.5239 17.7523 10.5239 18.0205 10.7022C18.3689 10.9338 18.5513 11.3482 18.4874 11.7632C18.4382 12.0826 18.0918 12.4656 17.399 13.2317L11.8639 19.3523C10.7767 20.5545 10.2331 21.1556 9.86807 20.9654C9.50303 20.7751 9.67833 19.9822 10.0289 18.3962L10.7157 15.2896C10.9826 14.082 11.1161 13.4782 10.7951 13.0759C10.4741 12.6736 9.85877 12.6736 8.62814 12.6736Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      nomi: "Havo sovutgichlar",
    },
    {
      nomi: "Isitgichlar",
    },
    {
      nomi: "Smartfonlar",
    },
    {
      nomi: "Muzlatgichlar",
    },
    {
      nomi: "Changyutgichlar",
    },
    {
      nomi: "Noutbuklar",
    },
    {
      nomi: "Televizorlar",
    },
    {
      nomi: "Barcha kategoriyalar",
    },
  ];
  type menuPropsType = {
    label: string;
    key: string;
    icon?: ReactNode;
    danger?: boolean;
    disabled?: boolean;
  };
  const menuProps: menuPropsType[] = [
    {
      label: "UZ",
      key: "1",
    },
    {
      label: "RU",
      key: "2",
    },
    // {
    //   label: "3rd menu item",
    //   key: "3",
    //   icon: <UserOutlined />,
    //   danger: false,
    // },
    // {
    //   label: "4rd menu item",
    //   key: "4",
    //   icon: <UserOutlined />,
    //   danger: false,
    //   disabled: false,
    // },
  ];
  const menu = (
    <Menu>
      {menuProps.map((item) => (
        <Menu.Item key={item.key} danger={item.danger} disabled={item.disabled}>
          {item.icon}
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <>
      <nav className=" bg-slate-800  w-[100vw]">
        <div className="w-[1440px] m-auto flex justify-between items-center text-white">
          <div className="flex justify-between items-center">
            <a href="" className="flex items-center mr-5">
              Tashkent
            </a>
            <div className="flex gap-5">
              <a href="https://texnomart.uz/shops-map/">
                Bizning Do'konlarimiz
              </a>
              <a href="https://texnomart.uz/uz/page/b2b_sale/">
                Yuridik Shaxslar uchun
              </a>
              <a href="https://texnomart.uz/uz/page/purchase-online/">
                To'lo'v usullari
              </a>
            </div>
          </div>
          <div className="flex justify-between gap-10 items-center">
            <a href="">Aloqa Markazi:+998712099944</a>
            <div className="flex  items-center gap-2 border border-slate-400 rounded-xl">
              <Dropdown menu={{ items: menuProps }}>
                <Button
                  color="default"
                  variant="solid"
                  onClick={() => {
                    setLanguage(language === 0 ? language + 1 : language - 1);
                  }}
                >
                  <Space color="default">
                    {menuProps[language].label} <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </div>
          </div>
        </div>
      </nav>

      <div className="w-[1440px] m-auto flex flex-col justify-between items-center pt-5 pb-5">
        <div className="flex  items-center justify-between gap-10 w-[1440px] ">
          <div className="flex items-center gap-10">
            <Link href={`/`} className="text-4xl font-bold cursor-pointer">
              Texnomart*
            </Link>
            <button
              onClick={() => {
                setKatalog(!katalog);
              }}
              className="bg-yellow-400 px-2 py-3 rounded-xl flex items-center gap-1 font-mono font-bold cursor-pointer"
            >
              {katalog ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={30}
                  height={30}
                  color={"#000000"}
                  fill={"none"}
                >
                  <path
                    d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={30}
                  height={30}
                  color={"#000000"}
                  fill={"none"}
                >
                  <path
                    d="M4 5L20 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 12L20 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 19L20 19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              Katalog
            </button>
          </div>
          <NavInputSearch />
          <div className="flex gap-5">
            <NavRight>
              <UserOutlined />
              <span>Kirish</span>
            </NavRight>{" "}
            <NavRight>
              <HeartOutlined />
              <span> Sevimlilar</span>{" "}
            </NavRight>{" "}
            <NavRight>
              <ShoppingCartOutlined />
              <span>Savatcha</span>
            </NavRight>
          </div>
        </div>
        <HomePage />
      </div>
    </>
  );
}
export default Navbar;
