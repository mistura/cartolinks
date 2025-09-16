"use client"

import React, { useState } from "react";
import { BsPersonArmsUp, BsFillTrainLightrailFrontFill } from "react-icons/bs";
import { FaRegImage } from "react-icons/fa";
import { FaPenRuler } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { LiaShareAltSolid } from "react-icons/lia";
import { LuRadioTower, LuMicVocal } from "react-icons/lu";

export default function HeaderTabMenu() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const icons = [
    <IoHome key="home" />,
    <FaRegImage key="image" />,
    <LiaShareAltSolid key="share" />,
    <FaPenRuler key="pen" />,
    <LuRadioTower key="radio" />,
    <LuMicVocal key="mic" />,
    <BsPersonArmsUp key="arms" />,
    <BsFillTrainLightrailFrontFill key="train" />,
  ];

  return (
    <div className="bg-[#f7f7f7] rounded-md py-1 px-2 flex space-x-2">
      {icons.map((d, index) => (
        <div
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`px-3 py-2  rounded-md cursor-pointer transition 
            ${activeIndex === index ? "shadow-md bg-white" : "bg-transparent hover:shadow-sm hover:ring ring-indigo-300"}`}
        >
          {d}
        </div>
      ))}
    </div>
  );
}
