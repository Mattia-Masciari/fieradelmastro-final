"use client";
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const screenRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Entrance and breathing animation
    tl.to(logoRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power3.out"
    })
    .to(logoRef.current, {
      scale: 1.05,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Simulate load time (or wait for window load)
    const handleLoad = () => {
      setTimeout(() => {
        const exitTl = gsap.timeline({
          onComplete: () => setIsLoading(false)
        });

        exitTl.to(logoRef.current, {
          scale: 0.9,
          opacity: 0,
          duration: 0.8,
          ease: "power4.inOut"
        })
        .to(screenRef.current, {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut"
        }, "-=0.4");
      }, 1000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      ref={screenRef}
      className="fixed inset-0 z-[9999] bg-surface flex items-center justify-center overflow-hidden"
    >
      <div 
        ref={logoRef}
        className="w-48 h-48 opacity-0 scale-90"
      >
        <img 
          src="/assets/branding/FDM - trademark.svg" 
          alt="Fiera del Mastro" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
