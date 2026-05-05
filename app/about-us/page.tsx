"use client";
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Scroll Reveals for Sections
    const sections = gsap.utils.toArray('.reveal-section');
    sections.forEach((section: any) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    });

    // Scrubbing Text Reveals
    const scrubTexts = gsap.utils.toArray('.scrub-text');
    scrubTexts.forEach((text: any) => {
      const words = text.innerText.split(' ');
      text.innerHTML = words.map((word: string) => `<span>${word} </span>`).join('');
      const spans = text.querySelectorAll('span');

      gsap.fromTo(spans,
        { opacity: 0.1 },
        {
          scrollTrigger: {
            trigger: text,
            start: 'top 75%',
            end: 'bottom 45%',
            scrub: true,
          },
          opacity: 1,
          stagger: 0.1,
          ease: 'none',
        }
      );
    });

    // Animated Highlight (Draws and Erases on Scroll)
    const highlights = gsap.utils.toArray('.highlight');
    highlights.forEach((h: any) => {
      gsap.fromTo(h,
        { backgroundSize: '0% 100%' },
        {
          backgroundSize: '100% 100%',
          scrollTrigger: {
            trigger: h,
            start: 'top 85%',
            end: 'bottom 65%',
            scrub: true,
          },
          ease: 'none'
        }
      );
    });

    // Image Hover Physics (Parallax-ish scroll scaling)
    const images = gsap.utils.toArray('.scroll-scale');
    images.forEach((img: any) => {
      gsap.fromTo(img,
        { scale: 0.95, opacity: 0.9 },
        {
          scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
          scale: 1,
          opacity: 1,
        }
      );
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="relative z-10 overflow-x-hidden w-full max-w-full bg-surface">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 pt-32 pb-20 reveal-section">
        <div className="max-w-[1600px] mx-auto w-full">
          <h1 className="font-serif font-semibold text-5xl md:text-8xl lg:text-[10rem] leading-[0.9] tracking-tighter max-w-full text-left uppercase">
            MATERIAL<br />
            <span className="italic ml-0 md:ml-32 block md:inline-block">RESURRECTION</span>
          </h1>
          <div className="mt-20 flex flex-col md:flex-row justify-between items-start gap-12 border-t border-[#1c1b1b]/10 pt-10">
            <h2 className="font-medium text-sm md:text-base uppercase tracking-[0.2em] opacity-40">FROM FRAGMENT TO OPUS</h2>
            <p className="max-w-xl text-lg font-normal leading-relaxed text-on-surface-variant text-left md:text-justify scrub-text">
              An exploration of ancestral craftsmanship through the lens of modern curation. We exhume the soul of raw materials to redefine luxury as a dialogue with the past.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Purpose */}
      <section className="editorial-silence px-6 md:px-16 reveal-section">
        <div className="editorial-grid max-w-[1600px] mx-auto items-start">
          <div className="col-span-12 md:col-span-12 lg:col-span-5 md:pr-12">
            <h3 className="font-serif font-semibold text-4xl md:text-6xl mb-10 leading-tight text-left">Geographic silence as<br />radical luxury.</h3>
            <p className="text-on-surface-variant font-normal leading-loose mb-12 text-lg scrub-text">
              In a hyper-connected world, true rarity is found in the inaccessible. We embrace the geographic and cultural silence of rural landscapes, transforming perceived isolation into the ultimate mark of artisanal exclusivity.
            </p>
            <p className="font-light italic text-2xl opacity-80 text-[#1c1b1b]">"Isolation is the sacred perimeter where the mastro’s gesture begins. In this silence, raw matter is resurrected into a monolithic Opus of radical luxury."</p>
          </div>
          <div className="col-span-12 md:col-start-7 md:col-span-6 mt-12 md:mt-32">
            <figure className="w-full">
              <img
                alt="Portrait representing the isolation and exclusivity of the craft"
                className="w-full aspect-[3/4] object-cover grayscale brightness-90 scroll-scale"
                src="/assets/about/Isolation.png"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Section 2: Mission */}
      <section className="editorial-silence px-6 md:px-16 reveal-section">
        <div className="editorial-grid max-w-[1600px] mx-auto items-start">
          <div className="col-span-12 md:col-span-6 order-2 md:order-1 mt-12 md:mt-0">
            <div className="grid grid-cols-2 gap-6 items-start">
              <figure className="w-full mt-24">
                <img
                  alt="Ancestral knowledge preservation detail"
                  className="w-full aspect-[3/4] object-cover scroll-scale"
                  src="/assets/about/connectingancestral-1.png"
                />
              </figure>
              <figure className="w-full">
                <img
                  alt="Ancient weaving looms"
                  className="w-full aspect-[3/4] object-cover scroll-scale"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI3b1IPVQxmtbXjvuFc0n_op55eqjRAkypm0r1fAHUPh0uk2kwqOq82VhNwRMuJzp0vnZ0mz6GwkENpUFdvtCTl54tSJEqk0_jQV7hkjLEUcemLmJh9cFQHZm0GgJMH6pMb38L72tyPaip4G2dwXd2oqjSBdctVWXrOD8TJTD-2_wos6dfEWgiIXJd-QKAU3gAFwwH5Q0mkxHVRhpQu-9tv2V10VVgfKzhK2EJcglse1vxn5MqyOK_r7fso5CjCx9uQaApl3V8XBHK"
                />
              </figure>
            </div>
          </div>
          <div className="col-span-12 md:col-start-8 md:col-span-5 order-1 md:order-2 md:pl-12">
            <h3 className="font-serif font-semibold text-4xl md:text-6xl mb-10 leading-tight text-left">Connecting<br />Ancestral Knowledge.</h3>
            <p className="text-on-surface-variant font-normal leading-loose mb-12 text-lg scrub-text">
              We act as the bridge between the silent hands of the elders and the curious minds of the global avant-garde. Our mission is to document, preserve, and elevate techniques that are on the verge of extinction.
            </p>
            <p className="font-light italic text-2xl opacity-80 text-[#1c1b1b]">"Bridging archaic secrets with infinite vision."</p>
          </div>
        </div>
      </section>

      {/* Section 3: Vision */}
      <section className="editorial-silence px-6 md:px-16 bg-[#1c1b1b] text-[#fcf9f8] reveal-section">
        <div className="max-w-[1600px] mx-auto text-left">
          <h3 className="font-serif font-semibold text-4xl md:text-8xl mb-12 leading-none max-w-5xl break-words">Calabria as a<br />Laboratory.</h3>
          <p className="text-[#e5e2e1]/80 max-w-2xl text-lg font-normal leading-relaxed mb-20 scrub-text">
            We view Calabria not as a margin, but as a fertile ground for radical experimentation. Here, the rough material meets the sharp intent of contemporary design.
          </p>
          <figure className="relative w-full aspect-[16/9] overflow-hidden">
            <img
              alt="Laboratory work and experimentation in Calabria"
              className="w-full h-full object-cover opacity-60 grayscale scroll-scale"
              src="/assets/about/calabriaasalaboratory.png"
            />
            <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
              <span className="font-serif italic font-semibold text-2xl md:text-7xl text-white drop-shadow-lg">"The Alchemy of the indomitable"</span>
            </div>
          </figure>
        </div>
      </section>

      {/* Section 4: Editore */}
      <section className="editorial-silence px-6 md:px-16 bg-[#e5e2e1] reveal-section">
        <div className="editorial-grid max-w-[1600px] mx-auto items-start">
          <div className="col-span-12 md:col-span-4 md:pr-12">
            <h3 className="font-serif font-semibold text-3xl md:text-6xl mb-10 leading-tight text-left">We do not select,<br />we edit.</h3>
            <p className="font-light italic text-2xl opacity-80 text-[#1c1b1b]">"Publishing the raw narrative of archaic matter."</p>
          </div>
          <div className="col-span-12 md:col-start-6 md:col-span-7 mt-12 md:mt-0">
            <div className="space-y-12 md:space-y-20">
              <div className="flex gap-8 items-start">
                <p className="text-xl md:text-3xl font-sans font-normal leading-relaxed text-[#1c1b1b]">
                  Our process is surgical. We don't just display craft; we redefine its narrative through strict visual curation and context-shifting.
                </p>
              </div>
              <div className="flex gap-8 items-start">
                <p className="text-xl md:text-3xl font-sans font-normal leading-relaxed text-[#1c1b1b]">
                  Every artisan is a protagonist in an edited story. We focus on the imperfections, the raw edges, and the gravity of the handmade.
                </p>
              </div>
              <div className="pt-12 border-t border-[#1c1b1b]/10">
                <a 
                  href="https://substack.com/@fieradelmastro" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex px-12 py-7 bg-[#1c1b1b] text-white font-sans font-normal text-xs uppercase tracking-[0.3em] hover:bg-[#A68B03] hover:shadow-[0_0_20px_#A68B03] transition-all duration-500 group items-center rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] hover:rounded-[40%_60%_70%_30%_/_30%_60%_40%_70%] decoration-none"
                >
                  Explore the Archive
                  <span className="material-symbols-outlined align-middle ml-4 group-hover:translate-x-2 transition-transform duration-500">arrow_right_alt</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
