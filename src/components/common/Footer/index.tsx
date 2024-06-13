import { FOOTER_ITEM } from "@/constants/footer";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from '@/assets/logo.png'

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
    return (
      <div className="mx-auto flex flex-wrap items-center py-6 px-20">
        <div className="">
          <Image src={logo} alt ="" className = "max-w-14"></Image>
          <p>Book your trip in minute, get full Control for much longer. </p>
        </div>
        <div className="grow">
          <div className="flex items-center justify-center gap-20">
            {FOOTER_ITEM.map((item) => (
              <div key={item.label} className="flex flex-col items-start gap-y-8">
                <Link href={item.href} className="text-black-secondary font-medium mb-2">
                  {item.label}
                </Link>
                {item.subItem && (
                  <ul>
                    {item.subItem.map((subItem) => (
                      <li key={subItem.subLabel}>
                        <Link href={subItem.href} className="text-gray-lighter font-normal hover:text-blue-light">
                          {subItem.subLabel}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-row">
            <img src="" />
        </div>
      </div>
    );
  };
