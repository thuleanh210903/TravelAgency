"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HEADER_ITEM } from "@/constants/header";
import logo from "@/assets/logo.png";
import Image from "next/image";
import menu from "@/assets/menu.svg";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav>
        <div className="container mx-auto flex flex-wrap items-center py-6 px-20">
          <div>
            <Image src={logo} alt="" className="max-w-14" />
          </div>
          <div className="grow">
            <div className="hidden items-center justify-center gap-16 md:flex">
              {HEADER_ITEM.map((item) => (
                <Link key={item.label} href={item.href} className="hover:text-blue-l">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {/* secondary */}
          <div className="flex gap-6">
            {/* Mobile navigation toggle */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <Image src={menu} alt="menu" className="h-6 absolute left-72" />
              </button>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full bg-primary-white overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider justify-center items-center">
              {HEADER_ITEM.map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
