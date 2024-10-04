'use client';

import { useState } from "react";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GridGlobe } from "./GridGlobe";
import Lottie from 'lottie-react'; 
import animationData from "../../data/confetti.json";
import { MagicButton } from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

const leftList = [
    'React.js',
    'React Native',
    'JavaScript',
];

const rightList = [
    'Node.js',
    'Firebase',
    'MongoDB',
];

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    (<div
        className={cn(
          // Same grid structure from the first BentoGrid
          "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
          className
        )}
      >
        {children}
      </div>)
  );
};

export const BentoGridItem = ({
  title,
  description,
  className,
  titleClassName,
  imgClassName,
  img,
  spareImg,
  id,
}) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText("matterconi@gmail.com")
      .then(() => {
        console.log("Email copied to clipboard!");
        setCopied(true);
      })
      .catch(err => console.error("Failed to copy text: ", err));
  };
  
  
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Image handling */}
      <div className={cn(
          "h-full",
          id === 6 && "flex justify-center items-center"
      )}>
        <div className="w-full h-full absolute z-10">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 z-20 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {/* Background Gradient Animation */}
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-10 inset-0 flex items-center justify-center text-white font-bold px-4 text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        {/* Content Area */}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 z-30"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-30">
            {description}
          </div>

          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-30">
            {title}
          </div>
        {/* Globe Component */}
        {id === 2 && (
          <div className="absolute inset-0 z-20 pointer-events-auto">
            {/* Allow interactions with the globe */}
            <GridGlobe />
          </div>
        )}

        {/* List Rendering */}
        {id === 3 && (
          <div className="absolute top-0 right-0">
            <div className="flex gap-3 lg:gap-5 w-fit ">
              <div className="flex flex-col gap-3 lg:gap-5">
                {leftList.map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-3 lg:px-3 px-2 text-xs lg:text-sm opacity-50 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 lg:py-4 px-3 rounded-lg text-center bg-[#10132E]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-5">
                <span className="py-4 lg:py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                {rightList.map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-3 lg:px-3 px-2 text-xs lg:text-sm opacity-50 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {id === 6 && (
            <div className="mt-5 relative z-50">
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                <Lottie
                  animationData={animationData}
                  loop={copied}
                  autoplay={copied}
                  style={{ width: 150, height: 150 }}
                  className="relative z-10"
                />
              </div>

              <MagicButton
                title={copied ? "Email copied" : "Copy my Email"}
                icon={IoCopyOutline}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
      </div>
    </div>
  </div>
  );
};
