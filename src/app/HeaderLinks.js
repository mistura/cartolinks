"use client";

import { Avatar } from "antd";
import React, { useState, useEffect } from "react";
import { AiFillPicture } from "react-icons/ai";
import { IoSunnySharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { LuHeadset } from "react-icons/lu";
import { useTheme } from "next-themes";

export default function HeaderLinks() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { icons: <AiFillPicture />, name: "Gallery" },
    { icons: <LuHeadset />, name: "Support" },
  ];

  if (!mounted) {
    return null;
  }

  const icons = [
    <FaBell key="bell" />,
    <IoSunnySharp
      key="sun"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="cursor-pointer"
    />,
    <Avatar className="avater-bg" key="avatar" size={22} />,
  ];

  return (
    <div className="flex items-center space-x-[22px]">
      <section className="flex space-x-3 items-center">
        {items.map((d, index) => (
          <div
            onClick={() => setActiveIndex(index)}
            key={index}
            className={`flex space-x-3 px-3 py-1 bg-gray-100 border-[0.2px] ${
              activeIndex === index
                ? "border-indigo-100"
                : "border-[#D9DADC]"
            } shadow-xs rounded-xl items-center`}
          >
            <div>{d.icons}</div>
            <p className="text-sm">{d.name}</p>
          </div>
        ))}
      </section>

      <section className="flex space-x-5 items-center">
        {icons.map((d, index) => (
          <div key={index} className="items-center">
            {d}
          </div>
        ))}
      </section>
    </div>
  );
}
