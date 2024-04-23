import { FOOTER_ITEM } from "@/constants/footer";
import Link from "next/link";
import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
    return (
      <div className="container mx-auto flex flex-wrap items-center py-6 px-6">
        <div className="">
          <h1>Travel Goo</h1>
          <p>Book your trip in minute, get full Control for much longer. </p>
        </div>
        <div className="grow">
          <div className="flex items-center justify-center gap-20">
            {FOOTER_ITEM.map((item) => (
              <div key={item.label} className="flex flex-col items-start">
                <Link href={item.href} className="text-black-secondary font-medium mb-2">
                  {item.label}
                </Link>
                {item.subItem && (
                  <ul>
                    {item.subItem.map((subItem) => (
                      <li key={subItem.subLabel}>
                        <Link href={subItem.href} className="text-gray-lighter font-normal">
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
      </div>
    );
  };
