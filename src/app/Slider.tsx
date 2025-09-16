"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react';


export default function Slider() {
    const slides = [
      {
        title: "FLUX.1 Krea",
        subtitle:
          "Generate complex images with brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures",
        image: "/wan.webp",
        button: "Try WAN 2.2",
      },
      {
        title: "FLUX.1 Krea",
        subtitle: "Open-source AI weights for the FLUX.1 model.",
        image: "/wan.webp",
        button: "Learn More",
      },
      {
        title: "FLUX.1 Krea",
        subtitle: "Another demo for the FLUX.1 model.",
        image: "/wan.webp",
        button: "Discover",
      },
    ];
  
    const [current, setCurrent] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [slides.length]);
  

  return (
    <section className="relative w-full overflow-hidden dark:bg-gray-900 py-10">

          <div
            className="flex transition-transform rounded-lg duration-700 ease-in-out gap-6"
            style={{ transform: `translateX(-${current * (700 + 24)}px)` }}
          >
            {slides.map((slide, i) => ( 
              <div
                key={i}
                className="relative max-w-[700px] w-full flex-shrink-0 mx-auto rounded-xl overflow-hidden shadow-md"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={700}
                  height={300}
                  className="w-full h-[400px] object-cover rounded-xl"
                />

                <div className="absolute bottom-6 left-0 right-0 flex justify-between items-center px-6 text-white">
                  <div className="max-w-[70%]">
                    <h2 className="text-lg md:text-2xl font-bold">
                      {slide.title}
                    </h2>
                    <p className="text-xs md:text-sm mt-1">{slide.subtitle}</p>
                  </div>
                  <button className="mt-3 h-[30px] px-3 bg-white text-black self-center rounded-full text-xs font-medium hover:bg-gray-200">
                    {slide.button}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  current === i ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </section>
  );
}
