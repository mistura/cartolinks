import React from "react";
import Image from "next/image";
import Logo from "../../public/krea-white.png";
import mobin from "../../public/mobbin-white.png";
export default function Footer() {
  return (
    <div className="text-white flex justify-between w-full items-center">
      <div className="flex space-x-2 items-center">
        <Image
                    aria-hidden
                    src={Logo}
                    alt="Header Logo"
                    width={32}
                    height={22}
                  />
        <p>Krea AI</p>
      </div>
      <div className="flex items-center">
        <h3>Curated by</h3>
       <Image
                    aria-hidden
                    src={mobin}
                    alt="Header Logo"
                    width={72}
                    height={22}
                  />
      </div>
    </div>
  );
}
