"use client"
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import BeforeImage from "../data/_MG_2371.jpg"
import AfterImage from "../data/_MG_2371_free.jpg"
import SwiperImage from "../data/Swipe.png";

const ImageSlider = () => {
  const CompareSlider = ({
    beforeImage,
    afterImage,
  }: {
    beforeImage: any;
    afterImage: any;
  }) => {
    const [sliderPosition, setSliderPosition] = useState(50); // Initial slider position at 50%
    const sliderRef: any = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    useEffect(() => {
      const sliderRect = sliderRef.current?.getBoundingClientRect();
      setWidth(sliderRect?.width);
      setHeight(sliderRect?.height);
    }, []);

    const handleMouseMove = (event: MouseEvent | TouchEvent) => {
      if (!sliderRef.current) return;

      const sliderRect = sliderRef.current.getBoundingClientRect();
      const offsetX =
        "touches" in event
          ? event.touches[0].clientX - sliderRect.left
          : event.clientX - sliderRect.left;
      const width = sliderRect.width;
      const newSliderPosition = (offsetX / width) * 100;

      // Clamp value between 0 and 100
      setSliderPosition(Math.min(100, Math.max(0, newSliderPosition)));
    };

    return (
      <div
        className="relative w-full h-full cursor-col-resize"
        ref={sliderRef}
        onMouseMove={(event: any) => handleMouseMove(event)}
        onTouchMove={(event: any) => handleMouseMove(event)}
      >
        {/* Before Image - Initial Image */}
        <Image
          src={beforeImage}
          alt="Before Image"
          className="absolute top-0 left-0 h-full w-full object-cover"
        />

        {/* After Image - Will be revealed */}
        <div
          className="absolute top-0 left-0 h-full overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="" style={{ width: width, height: height }}>
            <Image
              src={afterImage}
              alt="After Image"
              className="object-cover top-0 w-full h-full"
            />
          </div>
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 h-full bg-transparent bg-opacity-50 pointer-events-none"
          style={{ left: `${sliderPosition}%`, width: "2px" }}
        />

        {/* Swiper Image for visual feedback on where to drag */}
        <Image
          src={SwiperImage}
          alt="swiper"
          className="absolute pointer-events-none"
          style={{
            left: `${sliderPosition}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    );
  };

  return (
    <div className="py-[72px]">
      <div className="flex flex-col items-center gap-[64px]">
        <div className="max-w-[1440px] w-[90%] lg:w-[85%] mx-auto flex flex-col gap-[32px]">
          <div className="flex flex-col lg:flex-row justify-between bg-[#FEEFEF] rounded-[20px] overflow-hidden !h-full relative">
            <div className="flex flex-col px-5 py-8 lg:p-[64px] !h-full justify-between">
              <div className="flex flex-col gap-[56px]">
                <div className="flex flex-col gap-4 max-w-[550px]">
                  <h1 className="text-[40px] font-[550] leading-[40px] text-[#1D2939]">
                    Just a Preview
                  </h1>
          
                </div>
              </div>
            </div>
            {/* Compare Slider */}
            <div className=" w-700px min-h-[700px] lg:h-auto lg:w-1/2">
              <CompareSlider
                beforeImage={BeforeImage}
                afterImage={AfterImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;