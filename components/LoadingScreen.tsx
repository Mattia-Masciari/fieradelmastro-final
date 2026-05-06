"use client";
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const screenRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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

    const finishLoading = () => {
      const exitTl = gsap.timeline({
        onComplete: () => {
          setIsLoading(false);
          // Notify page to start entrance animations
          window.dispatchEvent(new CustomEvent('loader-finished'));
        }
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
    };

    // If we are not on the homepage, exit after a short delay
    if (pathname !== '/') {
      const timeoutId = setTimeout(finishLoading, 800);
      return () => clearTimeout(timeoutId);
    }

    // On homepage, wait for 'hero-assets-ready' or hit the fail-safe timeout (6.5 seconds)
    const failSafeTimeoutId = setTimeout(() => {
      console.warn("Loading screen fail-safe triggered.");
      finishLoading();
    }, 6500);

    const handleAssetsReady = () => {
      clearTimeout(failSafeTimeoutId);
      finishLoading();
    };

    window.addEventListener('hero-assets-ready', handleAssetsReady);

    return () => {
      window.removeEventListener('hero-assets-ready', handleAssetsReady);
      clearTimeout(failSafeTimeoutId);
    };
  }, [pathname]);

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
