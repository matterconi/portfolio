"use client";

import { useEffect, useRef, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { MagicButton } from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import HeroPadding from "./HeroPadding";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const blobRef = useRef(null);
  const blobWrapperRef = useRef(null);
  const paddingRef = useRef(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [showArrow, setShowArrow] = useState(true);
  const lastPointerPosition = useRef({ clientX: 0, clientY: 0 });

  // Use react-intersection-observer to track when Hero is in view
  const { ref: heroRef, inView } = useInView({ triggerOnce: false, threshold: 0.5 });

  useEffect(() => {
    const updateBlobPosition = (clientX, clientY) => {
      if (blobWrapperRef.current && paddingRef.current) {
        const heroRect = blobWrapperRef.current.parentElement.getBoundingClientRect();
        const paddingRect = paddingRef.current.getBoundingClientRect();

        const x = clientX - heroRect.left;
        const y = clientY - heroRect.top;

        blobWrapperRef.current.style.left = `${x}px`;
        blobWrapperRef.current.style.top = `${y}px`;

        const isAbovePadding = clientY > paddingRect.top;
        setFadeOut(isAbovePadding);
      }
    };

    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;
      lastPointerPosition.current = { clientX, clientY };
      updateBlobPosition(clientX, clientY);
    };

    const handleScroll = () => {
      const { clientX, clientY } = lastPointerPosition.current;
      updateBlobPosition(clientX, clientY);
    };

    // Add event listeners only when the Hero is in view
    if (inView) {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inView]);

  useEffect(() => {
    if (blobRef.current) {
      blobRef.current.style.transition = "opacity 0.4s ease, transform 0.4s ease";
      if (fadeOut) {
        blobRef.current.style.opacity = "0";
        blobRef.current.style.transform = "scale(0.5)";
      } else {
        blobRef.current.style.opacity = "1";
        blobRef.current.style.transform = "scale(1)";
      }
    }
  }, [fadeOut]);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={heroRef} className="relative h-screen w-full bg-black flex items-center justify-center">
      {/* Blob Effect Wrapper */}
      <div
        ref={blobWrapperRef}
        className="absolute z-20"
        style={{
          left: "0px",
          top: "0px",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          ref={blobRef}
          className="blur-xl animate-rotate"
          style={{
            height: "18vmax",
            aspectRatio: "1",
            background: "linear-gradient(to right, aquamarine, mediumpurple)",
            borderRadius: "50%",
          }}
        ></div>
      </div>

      {/* Spotlight Effects */}
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-40 flex flex-col items-center justify-center text-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
        <p className="uppercase tracking-widest text-xs text-blue-100 max-w-80">
          Magia dinamica con Next.js
        </p>

        <TextGenerateEffect
          words="Trasformo concetti in esperienze digitali interattive."
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
        />

        <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
          Ciao, sono Matteo un Web Developer e vivo in Italia.
        </p>

        <a href="#about">
          <MagicButton title="Show my work" icon={FaLocationArrow} position="right" />
        </a>
      </div>

      {/* Scroll Down Arrow */}
      <div
        className={`absolute bottom-10 flex justify-center w-full transition-opacity duration-500 ${
          showArrow ? "opacity-100" : "opacity-0"
        }`}
      >
        <a href="#next-section" className="animate-slowBounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>

      {/* Hero Padding positioned absolutely at the bottom */}
      <HeroPadding paddingRef={paddingRef} />
    </div>
  );
};

export default Hero;
