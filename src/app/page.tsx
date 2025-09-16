"use client";
import Looks from "./Looks";
import PreFooter from "./PreFooter";
import SectionFilter from "./SectionFilter";
import Slider from "./Slider";

export default function Home() {

  return (
    <Looks className="bg-white dark:bg-black">
      <div>
        <Slider />
        <SectionFilter />
        <PreFooter />
      </div>
    </Looks>
  );
}
