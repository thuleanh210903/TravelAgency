import Link from "next/link";
import React from "react";
import { HEADER_ITEM } from "@/constants/header";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="container mx-auto flex flex-wrap items-center py-6 px-6">
      <div className="">
        <h1>Travel Goo</h1>
      </div>
      <div className="grow">
        <div className="flex items-center justify-center gap-16">
          {HEADER_ITEM.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
