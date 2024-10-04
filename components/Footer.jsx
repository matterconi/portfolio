"use client";

import React from 'react';
import { MagicButton } from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';

export default function Footer() {
  return (
    <footer 
      id="contact"
      className='relative h-[500px] pt-20 pb-10 w-full overflow-hidden'
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      {/* Wrapper for fixed sticky effect */}
      <div className='fixed bottom-0 inset-x-0 h-[500px] max-w-full mx-auto'>
        {/* Background grid */}
        <div className="absolute inset-0">
          <img
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-50 object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center w-full px-4">
          <h1 className="heading lg:max-w-[45vw] text-center">
            Pronto a portare la <span className="text-purple">tua</span> presenza digitale al livello successivo?
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Contattattami oggi per parlare di come posso aiutarti a raggiungere i tuoi obiettivi!
          </p>
          <a href="mailto:matterconi@gmail.com">
            <MagicButton title="contattami" icon={FaLocationArrow} position="right" />
          </a>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex mt-16 md:flex-row flex-col justify-center items-center md:gap-8 px-4">
          <p className="md:text-base text-sm md:font-normal font-light max-md:mb-8 text-center">
            Copyright © 2024 Matteo
          </p>
          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((profile) => (
              <div
                key={profile.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={profile.img} alt={profile.id} width={20} height={20} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
