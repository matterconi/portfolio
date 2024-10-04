"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { motivation, softSkill } from "@/data";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Motivation = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredLetterIndex, setHoveredLetterIndex] = useState(null);
  const purpleColor = "#CBACF9";

  // Simplified function to calculate color intensity
  const calculateColor = (distance, maxDistance) => {
    const intensity = Math.max(0, (maxDistance - distance) / maxDistance);
    const red = 203;
    const green = 172;
    const blue = 249;

    const blendedRed = Math.round(255 * (1 - intensity) + red * intensity);
    const blendedGreen = Math.round(255 * (1 - intensity) + green * intensity);
    const blendedBlue = Math.round(255 * (1 - intensity) + blue * intensity);

    return `rgb(${blendedRed}, ${blendedGreen}, ${blendedBlue})`;
  };

  return (
    <section id="motivation">
      <h1 className="heading">
        Le mie <span className="text-purple">Carte Vincenti</span>
      </h1>
      <div className="flex flex-col items-center">
        <div className="rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards items={motivation} direction="left" speed="slow" className="my-20" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {softSkill.map(({ id, img, text }) => (
            <div key={id} className="flex items-center justify-center gap-2">
              <img src={img} alt={text} className="md:w-10 w-5" />
              <motion.div
                className="text-center font-bold text-lg relative flex"
                onMouseEnter={() => setHoveredIndex(id)}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setHoveredLetterIndex(null);
                }}
              >
                {text.split("").map((letter, index) => {
                  const distance =
                    hoveredLetterIndex !== null ? Math.abs(index - hoveredLetterIndex) : null;
                  const maxDistance = 3;
                  return (
                    <motion.span
                      key={index}
                      className="inline-block"
                      onMouseEnter={() => setHoveredLetterIndex(index)}
                      style={{
                        color:
                          hoveredIndex === id && hoveredLetterIndex !== null && distance <= maxDistance
                            ? calculateColor(distance, maxDistance)
                            : "white",
                      }}
                      animate={{
                        y:
                          hoveredIndex === id && hoveredLetterIndex !== null && distance <= maxDistance
                            ? -Math.max(15 - distance * 5, 0)
                            : 0,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {letter}
                    </motion.span>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Motivation;
