"use client";
import Link from 'next/link';
import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isMenuOpen) {
      gsap.fromTo(dropdownRef.current,
        { opacity: 0, y: -10, scaleY: 0.8, transformOrigin: 'top left' },
        { opacity: 1, y: 0, scaleY: 1, duration: 0.4, ease: 'power4.out' }
      );
    }
  }, [isMenuOpen]);

  return (
    <nav className="sticky top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-16 py-1 md:py-2 bg-[#fcf9f8]/90 backdrop-blur-xl transition-all duration-500 border-b border-stone-100/50">
      {/* Left: Menu Trigger (FDM Trademark) */}
      <div className="flex items-center gap-6">
        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:scale-110 transition-all duration-500"
          >
            <svg id="Livello_1" data-name="Livello 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" className="w-full h-full object-contain">
              <path fill="#035AA6" d="M440.54,809.44c-64.83-4.11-200.24,22.79-217.91-18.25a22.31,22.31,0,0,1-1.33-11.34c12-104.1-18.51-242.47,13.12-335.89a24.77,24.77,0,0,1,24.63-16.57c161,6.82,338.38-5.25,494.06,10.95a24.86,24.86,0,0,1,22.29,24.22c.8,39.4,4.45,114.53-9.42,108.08-426.67-5.79-223.42-44.46-300,220.82A24.88,24.88,0,0,1,440.54,809.44Z"/>
              <path fill="#035AA6" d="M773.07,639.55c17.49,232-24.56,178.29-182.74,172.64-29.19-1.05-53.05-24.12-55.68-53.65-6.15-69-22.1-157.71,50.13-143.74C632.47,628.35,767,588.79,773.07,639.55Z"/>
              <path fill="#035AA6" d="M629.19,382.94c1.06-131.26-28-220.61,106.53-199.16a48.49,48.49,0,0,1,41,47.91c-.48,126.75,41.06,198.68-142.63,170.67C625.49,402.31,629.14,387.8,629.19,382.94Z"/>
              <path fill="#035AA6" d="M366.84,306.68c-.88,49.14,15.72,104.1-47.26,93.31A162.41,162.41,0,0,0,294,397.65c-98.08-1.12-59.42,15.59-64.86-142.66-1.49-101.61-7.89-72.14,76.23-73.62a194.19,194.19,0,0,0,22.71-2c65.6-8.91,35.55,66,38.3,113.6C366.65,297.56,366.92,302.11,366.84,306.68Z"/>
              <path fill="#035AA6" d="M421.89,379.3C431.57,239.44,378.42,162.43,524,181.77A45.09,45.09,0,0,1,563.15,226c.9,82.87,37.07,201.13-72.13,174.59C469,394.61,413.85,415.66,421.89,379.3Z"/>
            </svg>
          </button>

          {isMenuOpen && (
            <div
              ref={dropdownRef}
              className="absolute top-full left-0 mt-4 bg-[#fcf9f8] border border-stone-200 shadow-xl py-8 px-6 md:py-6 md:px-5 w-48 md:w-32 flex flex-col gap-6 z-[60] backdrop-blur-sm items-start"
            >
              {/* Navigation Links */}
              <div className="flex flex-col gap-6 md:gap-4 w-full items-start text-left">
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="block w-full text-[#035AA6] font-normal text-xs md:text-[10px] uppercase tracking-[0.2em] py-2 md:py-0">
                  Manifesto
                </Link>
                <Link href="/about-us" onClick={() => setIsMenuOpen(false)} className="block w-full text-[#1c1b1b] hover:text-[#A68B03] transition-colors duration-500 font-normal text-xs md:text-[10px] uppercase tracking-[0.2em] py-2 md:py-0">
                  About Us
                </Link>
                <Link href="/archives" onClick={() => setIsMenuOpen(false)} className="block w-full text-[#1c1b1b] hover:text-[#A68B03] transition-colors duration-500 font-normal text-xs md:text-[10px] uppercase tracking-[0.2em] py-2 md:py-0">
                  Archives
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right: Brand Wordmark */}
      <div className="flex items-center gap-12">
        <Link href="/" className="text-xl md:text-2xl font-serif font-semibold tracking-tight uppercase text-[#035AA6]">
          FIERA DEL MASTRO
        </Link>
      </div>
    </nav>
  );
}
