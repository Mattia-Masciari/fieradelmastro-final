"use client";
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const cycleRef = useRef<HTMLDivElement>(null);
  const rawHandsRef = useRef<HTMLSpanElement>(null);
  const infiniteVisionRef = useRef<HTMLSpanElement>(null);

  const [loadedCount, setLoadedCount] = useState(0);
  const totalAssets = 22; // 8 videos + 14 images

  const handleAssetLoaded = () => {
    setLoadedCount((prev) => {
      const next = prev + 1;
      if (next >= totalAssets) {
        window.dispatchEvent(new CustomEvent('hero-assets-ready'));
      }
      return next;
    });
  };

  useEffect(() => {
    // Fail-safe in case some media assets take too long or fail to trigger load events
    const failSafe = setTimeout(() => {
      console.warn("Hero assets load fail-safe triggered.");
      window.dispatchEvent(new CustomEvent('hero-assets-ready'));
    }, 5500);

    return () => clearTimeout(failSafe);
  }, []);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      let { isDesktop, isMobile } = context.conditions as any;

      // Set initial opacity of texts to 0 on mount to avoid flashing
      gsap.set([rawHandsRef.current, infiniteVisionRef.current], { opacity: 0 });

      // 1. Hero Entrance Animation
      const handleLoaderFinished = () => {
        const entranceTl = gsap.timeline();
        entranceTl.to(rawHandsRef.current, {
          opacity: 1,
          duration: 1.5,
          ease: 'power4.out',
        })
        .to(infiniteVisionRef.current, {
          opacity: 1,
          duration: 1.5,
          ease: 'power4.out',
        }, "+=1.0") // Starts exactly 1.0 second after Raw Hands completes
        .fromTo('.group-0',
          { y: 40, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 1.5, ease: 'power4.out', stagger: 0.1 },
          "<" // Starts at the same time as Infinite Vision
        );
      };

      window.addEventListener('loader-finished', handleLoaderFinished);

      // 2. Hero 2D Scatter Sequence
      if (heroRef.current) {
        const totalGroups = 10;
        const mediaTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '+=900%',
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          }
        });

        for (let i = 0; i <= totalGroups; i++) {
          const currentGroup = `.group-${i}`;
          const duration = 2.5;
          const startTime = i * 0.5;

          if (i > 0) {
            mediaTl.fromTo(currentGroup,
              { autoAlpha: 0, y: 100 },
              { autoAlpha: 1, y: 0, duration: 1.5, ease: 'power4.out' },
              startTime
            );
          }

          // Same scatter logic for both, optimized for bounds
          mediaTl.to(currentGroup, {
            x: (index) => {
              const w = window.innerWidth;
              // On mobile, reduce the spread slightly to prevent extreme overflow
              const spreadMult = isMobile ? 0.7 : 1;
              const spread = (1 + index * 0.1) * spreadMult;
              return index === 0 ? -w * spread : w * spread;
            },
            y: (index) => {
              const h = window.innerHeight;
              const spreadMult = isMobile ? 0.7 : 1.2;
              const dir = i % 2 === 0 ? 1 : -1;
              return index === 0 ? -h * spreadMult * dir : h * spreadMult * dir;
            },
            rotation: (index) => {
              const rot = i % 2 === 0 ? 1 : -1;
              return index === 0 ? -12 * rot : 15 * rot;
            },
            duration: duration,
            ease: 'power1.inOut'
          }, startTime);

          const mediaElements = gsap.utils.toArray(`${currentGroup} .hero-asset-media`);
          if (mediaElements.length > 0) {
            mediaTl.to(mediaElements, {
              scale: 1.5,
              duration: duration,
              ease: 'power1.inOut',
              transformOrigin: 'center center'
            }, startTime);
          }

          mediaTl.set(currentGroup, { autoAlpha: 0 }, startTime + duration);
        }
      }

      // Scroll Reveals
      const revealSections = gsap.utils.toArray('.reveal-section');
      revealSections.forEach((section: any) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
        });
      });

      // The Sacred Cycle - Panel Replacement
      if (cycleRef.current) {
        const steps = gsap.utils.toArray('.cycle-panel');
        
        // Restore pinning for mobile to match desktop exactly
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: cycleRef.current,
            start: 'top top',
            end: '+=500%',
            pin: true,
            scrub: true,
            anticipatePin: 1,
          }
        });

        tl.to({}, { duration: 1 });

        steps.forEach((step: any, i) => {
          if (i < steps.length - 1) {
            const currentStep = steps[i] as any;
            const nextStep = steps[i + 1] as any;

            tl.to(currentStep, { autoAlpha: 0, scale: 0.95, duration: 1.5, ease: 'power2.inOut' }, `step-${i}`)
              .to({}, { duration: 0.5 })
              .fromTo(nextStep,
                { autoAlpha: 0, scale: 1.05 },
                { autoAlpha: 1, scale: 1, duration: 1.5, ease: 'power2.inOut' },
                `step-${i}+=1`
              );

            tl.to({}, { duration: 0.8 });
          }
        });
      }

      return () => {
        window.removeEventListener('loader-finished', handleLoaderFinished);
      };
    });
  }, { scope: containerRef });

  const heroAssets = [
    { type: 'video', src: '/assets/hero/ARGILLA.mp4' },
    { type: 'video', src: '/assets/hero/FERRO.mp4' },
    { type: 'video', src: '/assets/hero/VIMINI.mp4' },
    { type: 'video', src: '/assets/hero/TELAIO .mp4' },
    { type: 'video', src: '/assets/hero/AGO E FILO.mp4' },
    { type: 'video', src: '/assets/hero/PIATTO.mp4' },
    { type: 'video', src: '/assets/hero/PIPA.mp4' },
    { type: 'video', src: '/assets/hero/TELAIO 2.mp4' },
    { type: 'image', src: '/assets/hero/Dettagli_Tecnici_Fotografici_202604171501.png' },
    { type: 'image', src: '/assets/hero/PROMPT_1__Categoria_202604210654.png' },
    { type: 'image', src: '/assets/hero/PROMPT_1__Categoria_202604210700.png' },
    { type: 'image', src: '/assets/hero/PROMPT_1__Categoria_202604210714.png' },
    { type: 'image', src: '/assets/hero/PROMPT_1__Categoria_202604210716.png' },
    { type: 'image', src: '/assets/hero/PROMPT_1__Categoria_202604210809.png' },
    { type: 'image', src: '/assets/hero/PROMPT_1__Categoria_202604210854.png' },
    { type: 'image', src: '/assets/hero/PROMPT_1__Categoria_202604210855.png' },
    { type: 'image', src: '/assets/hero/PROMPT_1__Categoria_202604210924.png' },
    { type: 'image', src: '/assets/hero/PROMPT_2__Categoria_202604202220.png' },
    { type: 'image', src: '/assets/hero/Perfetto,_adesso_invece_202604251545.jpeg' },
    { type: 'image', src: '/assets/hero/ROMPT_2__Categoria_202604210639.png' },
    { type: 'image', src: '/assets/hero/parti_da_questa_202604261441 (1).jpeg' },
    { type: 'image', src: '/assets/hero/parti_da_questo_202604261441.jpeg' },
  ];

  // Clean, fixed starting positions around the text
  const getInitialPosition = (i: number) => {
    const mod = i % 3;
    if (mod === 0) return 'top-[10%] left-[10%] w-[22%]'; // Top-Left
    if (mod === 1) return 'bottom-[10%] right-[10%] w-[20%]'; // Bottom-Right
    return 'top-[45%] left-[65%] w-[18%] -translate-y-1/2'; // Middle-Right
  };

  const getAspect = (index: number) => {
    const aspects = ['aspect-[3/4]', 'aspect-square', 'aspect-video', 'aspect-[4/5]', 'aspect-[2/3]', 'aspect-[3/2]'];
    return aspects[index % aspects.length];
  };

  return (
    <main ref={containerRef} className="relative w-full bg-surface">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-surface">

        {/* Gallery Container */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {heroAssets.map((item, i) => {
            const groupIdx = Math.floor(i / 2); // 2 items per group
            return (
              <div
                key={i}
                className={`hero-asset opacity-0 invisible group-${groupIdx} absolute ${getInitialPosition(i)} ${getAspect(i)} overflow-hidden shadow-2xl`}
                style={{ zIndex: 100 - groupIdx }}
              >
                {item.type === 'video' ? (
                  <video autoPlay loop muted playsInline onLoadedData={handleAssetLoaded} className="hero-asset-media w-full h-full object-cover">
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <img src={item.src} alt={`Hero context ${i}`} onLoad={handleAssetLoaded} className="hero-asset-media w-full h-full object-cover" />
                )}
              </div>
            );
          })}
        </div>

        {/* Floating Titles */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center pointer-events-none">
          <h1 className="font-serif italic text-2xl md:text-4xl lg:text-[3.5rem] leading-[0.85] tracking-[-0.05em] font-semibold flex flex-col items-center mix-blend-multiply">
            <span ref={rawHandsRef} className="block text-black">RAW HANDS.</span>
            <span ref={infiniteVisionRef} className="block text-black">INFINITE VISION.</span>
          </h1>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="relative bg-surface py-12 md:py-20 px-6 md:px-16 overflow-hidden reveal-section">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-24 items-center">
          <div className="md:col-span-7">
            <p className="font-serif font-semibold text-4xl md:text-8xl tracking-tight text-on-surface">
              <span className="block">We defy the serial. We</span>
              <span className="block"><span className="italic text-[#035AA6]">resurrect</span> the archaic.</span>
            </p>
          </div>
          <div className="md:col-span-5 relative mt-24 md:mt-0">
            <div className="aspect-[4/5] bg-surface-container-low overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Monolithic marble block sitting in a minimal gallery space"
                src="/assets/homepage/wedefy.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Sacred Cycle */}
      <section ref={cycleRef} className="relative bg-surface overflow-hidden h-screen px-6 md:px-16">
        <div className="max-w-7xl mx-auto h-full relative">

          {/* 00 Introduction Panel */}
          <div className="cycle-panel absolute inset-0 flex flex-col justify-center items-center text-center">
            <div className="max-w-4xl px-4">
              <h2 className="font-serif font-semibold text-4xl md:text-[10rem] tracking-tight mb-12">The Sacred Cycle</h2>
              <p className="font-light italic text-2xl md:text-3xl text-on-surface-variant leading-relaxed">
                "The matter is the most honest witness to the passage of time and the weight of the human soul."
              </p>
            </div>
          </div>

          {/* 01 Raw Matter Panel */}
          <div className="cycle-panel absolute inset-0 grid md:grid-cols-12 gap-12 items-center opacity-0 pointer-events-none">
            <div className="md:col-span-7">
              <h3 className="font-serif font-semibold text-4xl md:text-7xl mb-8">Raw Matter</h3>
              <p className="font-normal text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
                The dialogue begins with the material. We listen to the stone, the fiber, the grain before the first intervention. Every fragment holds a memory of the earth.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="aspect-square overflow-hidden shadow-2xl">
                <img
                  className="w-full h-full object-cover"
                  alt="Raw stone and materials being selected by an artisan"
                  src="/assets/homepage/rawmatter-1.png"
                />
              </div>
            </div>
          </div>

          {/* 02 The Gesture Panel */}
          <div className="cycle-panel absolute inset-0 grid md:grid-cols-12 gap-12 items-center opacity-0 pointer-events-none">
            <div className="md:col-span-5">
              <div className="aspect-square overflow-hidden shadow-2xl">
                <img
                  className="w-full h-full object-cover"
                  alt="Detail of artisan hands executing a precise traditional gesture"
                  src="/assets/homepage/gesture-2.jpeg"
                />
              </div>
            </div>
            <div className="md:col-span-7 text-right flex flex-col items-end">
              <h3 className="font-serif font-semibold text-4xl md:text-7xl mb-8">The Gesture</h3>
              <p className="font-normal text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
                Controlled violence and delicate precision. The hand acts as the bridge between ancestral knowledge and future form. A singular rhythm, unrepeatable and absolute.
              </p>
            </div>
          </div>

          {/* 03 The Opus Panel */}
          <div className="cycle-panel absolute inset-0 grid md:grid-cols-12 gap-12 items-center opacity-0 pointer-events-none">
            <div className="md:col-span-7">
              <h3 className="font-serif font-semibold text-4xl md:text-7xl mb-8">The Opus</h3>
              <p className="font-normal text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
                The final realization. A monolith of craft that exists beyond time, trends, and the ephemeral noise of the digital. The soul captured in physical permanence.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="aspect-square overflow-hidden shadow-2xl">
                <img
                  className="w-full h-full object-cover"
                  alt="The completed masterpiece displayed in a minimal setting"
                  src="/assets/homepage/opus-3.jpeg"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Archive Footer CTA Section */}
      <section className="relative bg-[#1c1b1b] text-white pt-16 md:pt-48 pb-10 md:pb-20 px-6 md:px-16 w-full mt-12 md:mt-24 reveal-section">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-32 relative z-10">
          <div className="md:col-span-8">
            <a href="https://substack.com/@fieradelmastro" target="_blank" rel="noopener noreferrer" className="group cursor-none inline-block">
              <h3 className="font-serif font-semibold text-5xl md:text-9xl tracking-tighter leading-[0.9] mb-16 group-hover:translate-x-8 transition-transform duration-1000 text-white">
                Enter the <br /><span className="italic font-semibold text-[#A68B03]">Archive</span>
              </h3>
              <div className="flex items-center gap-8">
                <div className="w-20 h-20 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] border border-white/20 flex items-center justify-center group-hover:bg-[#A68B03] group-hover:border-[#A68B03] group-hover:shadow-[0_0_15px_#A68B03] group-hover:rounded-[40%_60%_70%_30%_/_30%_60%_40%_70%] transition-all duration-700">
                  <span className="material-symbols-outlined group-hover:text-white transition-colors duration-500">arrow_outward</span>
                </div>
                <p className="text-sm tracking-[0.2em] uppercase font-medium max-w-[240px] leading-[1.8] text-stone-400 group-hover:text-white transition-colors duration-500">Discover documented mastery on Substack.</p>
              </div>
            </a>
          </div>
          <div className="md:col-span-4 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/5 pt-12 md:pt-16 md:pl-16 mt-12 md:mt-0">
            <div>
              <p className="text-sm leading-[2] text-white font-normal">
                Corso Mazzini<br />
                Catanzaro, Italy<br />
                By Appointment Only
              </p>
            </div>
            <div className="mt-32 md:mt-0">
              <p className="text-sm mb-4 text-stone-500 uppercase tracking-widest font-medium">Contact</p>
              <a href="mailto:fieradelmastro@gmail.com" className="block text-sm mb-4 text-white font-normal hover:text-[#A68B03] transition-colors duration-500 cursor-none">fieradelmastro@gmail.com</a>
              <div className="flex flex-col gap-4 mt-8">
                <a href="https://www.instagram.com/fieradelmastro/" target="_blank" rel="noopener noreferrer" className="text-sm text-white font-normal hover:text-[#A68B03] transition-colors duration-500 cursor-none flex items-center gap-2">
                  <span className="opacity-40 uppercase tracking-tighter text-[10px]">IG</span> @fieradelmastro
                </a>
                <a href="https://x.com/FieraDelMastro" target="_blank" rel="noopener noreferrer" className="text-sm text-white font-normal hover:text-[#A68B03] transition-colors duration-500 cursor-none flex items-center gap-2">
                  <span className="opacity-40 uppercase tracking-tighter text-[10px]">X</span> @FieraDelMastro
                </a>
                <a href="https://www.linkedin.com/company/113184416/" target="_blank" rel="noopener noreferrer" className="text-sm text-white font-normal hover:text-[#A68B03] transition-colors duration-500 cursor-none flex items-center gap-2">
                  <span className="opacity-40 uppercase tracking-tighter text-[10px]">LI</span> Fiera Del Mastro
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
