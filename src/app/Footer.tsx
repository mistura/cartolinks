import React from "react";
import Image from "next/image";
import Logo from "../../public/krea-w.png";
import mobin from "../../public/mobbin-white.png";
export default function Footer() {
  return (
    <div className="text-white flex justify-between w-full items-center">
      <div>
        <p>Krea AI</p>
      </div>
      <div className="flex space-x-2">
        <h3>Curated by</h3>
        <p>mobbin</p>
      </div>
    </div>
  );
}
