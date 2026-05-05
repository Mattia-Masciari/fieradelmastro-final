"use client";
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Archives() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Staggered Entry for Archive Items
    const items = gsap.utils.toArray('.archive-card');
    gsap.from(items, {
      scrollTrigger: {
        trigger: '.archives-grid',
        start: 'top 80%',
      },
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
    });

    // Hover Physics Logic (Desktop only)
    let mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      items.forEach((item: any) => {
        const content = item.querySelector('.card-content');
        const img = item.querySelector('img');
        
        item.addEventListener('mousemove', (e: MouseEvent) => {
          const { left, top, width, height } = item.getBoundingClientRect();
          const x = (e.clientX - left) / width - 0.5;
          const y = (e.clientY - top) / height - 0.5;

          gsap.to(content, {
            x: x * 20,
            y: y * 20,
            rotateX: -y * 10,
            rotateY: x * 10,
            duration: 0.6,
            ease: 'power2.out'
          });

          gsap.to(img, {
            scale: 1.1,
            x: -x * 30,
            y: -y * 30,
            duration: 0.6,
            ease: 'power2.out'
          });
        });

        item.addEventListener('mouseleave', () => {
          gsap.to(content, { x: 0, y: 0, rotateX: 0, rotateY: 0, duration: 0.8, ease: 'power3.out' });
          gsap.to(img, { scale: 1, x: 0, y: 0, duration: 0.8, ease: 'power3.out' });
        });
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-[#fcf9f8]">
      <img 
        alt="Cinematic background texture" 
        className="bg-video-mask" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp-Ew-guBDnhwBdezYCiOHIROxpFlsPoea6WwVo75TIXx5Gz32kFSZSNvKG6Iq82gfMqr1ZU_6c5SjKILOQXBVpQUMywqCdLI5y2EXYySSgrJyN0-HfP3TE7D0IcnJdzwah2-riTasocOlDI5OVl4CWjWsyXbiUL5fiwubcMtboUAqd8bKN-P9jcgPLoaIe4ETZuwemJQHPe744cyVEpWbWYC1e4-fUiNICOgQc3mkz9BraaW5gytqjX6KvZZBMB0U0PUC3vrJ-JrQ"
      />
      
      <main className="relative z-10">
        {/* Header Section */}
        <section className="px-6 md:px-16 pt-24 md:pt-48 pb-12 md:pb-32 border-b border-stone-100">
          <div className="max-w-[1800px] mx-auto">
            <h1 className="font-serif text-[15vw] leading-[0.8] font-semibold tracking-tighter uppercase mb-12">
              Archives
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                <p className="font-sans font-normal text-xl md:text-2xl tracking-[0.2em] max-w-2xl opacity-80 uppercase leading-relaxed">
                    A collection of material resurrections and curated thought. Strictly limited and documented.
                </p>
                <div className="flex gap-4">
                    <span className="w-12 h-[1px] bg-stone-300 mt-4"></span>
                    <p className="font-sans font-normal text-[10px] uppercase tracking-[0.4em] text-stone-400">Inventory 001—004</p>
                </div>
            </div>
          </div>
        </section>

        {/* Immersive Grid Section */}
        <section className="archives-grid grid grid-cols-1 md:grid-cols-2 w-full border-b border-stone-100">
          {/* Card 1 */}
          <article className="archive-card relative aspect-[4/5] md:aspect-square overflow-hidden border-r border-b border-stone-100 group cursor-none">
            <img 
              alt="Raw obsidian rock textures" 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 transition-all duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZz2kDnNhHM8noURqlLMjIdQjBJAxGT1qoOHH9nRJji_-Nevkg3ymPDlEkEUsAkQNd2QGWB2pkXBu_6YlEhTp07vs0vlMpzRlBeDqLLev7bXjRECnMYxAAGvnChvMU7RAkfCzpWZ9ogmL-Qbf60gFiSiYpGUj9fw83GRKR4Fj_giaDoq1G1KQjpfweibPgaKSfIHYIW8Sxim8K6qJNL3Eyx6I9OqVrZ1WRhcPgAJeu595idl7mQZAZZzSXTNcTm-vP8YuR3NS969ic"
            />
            <div className="card-content absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-20 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                <h2 className="font-serif font-semibold text-4xl md:text-5xl lg:text-7xl text-white mb-6 transform transition-transform duration-700 group-hover:-translate-y-4">The Weight <br/>of Silence</h2>
                <p className="text-white/60 font-sans font-normal text-lg uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">Obsidian / 37.7°N</p>
            </div>
          </article>

          {/* Card 2 */}
          <article className="archive-card relative aspect-[4/5] md:aspect-square overflow-hidden border-b border-stone-100 group cursor-none">
            <img 
              alt="Brutalist concrete structure" 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 transition-all duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHbOudSLQskVZdJ-BJyHmwkicnTxECLVU_mWA2qR41oy3LLaKLC92SfbtZu7zTKsT4jNQFoCkgZXi4PfTJnVToqE2FjFc5qJqsmsN9HHluG8OfGcqVKKI-E4fd9H8-xEqJyTCgU4ClfYtkxsCoN-hYfIVegiEUlmGpOJCjZKaP5IfmijCSZ9cttZcuY5Aep6GjPbIjuXU6cdWmfZNL9bgYRhKI_BeSqcVribRGONnlEHM8_TfpChQm6ya1xJN34LvCDOnEfoVLoqGQ"
            />
            <div className="card-content absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-20 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                <h2 className="font-serif font-semibold text-4xl md:text-5xl lg:text-7xl text-white mb-6 transform transition-transform duration-700 group-hover:-translate-y-4">Oxidized <br/>Ambition</h2>
                <p className="text-white/60 font-sans font-normal text-lg uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">Corten / 41.9°N</p>
            </div>
          </article>

          {/* Card 3 */}
          <article className="archive-card relative aspect-[4/5] md:aspect-square overflow-hidden border-r border-stone-100 group cursor-none">
            <img 
              alt="Weathered parchment" 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 transition-all duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc3uvkP-L_1Ya9swuf9I1fVr3_AFU4uBGe0Uib9jzAhVTRnCeG3kxkgcD2kkJmAIH2YFyAKOgK_AxQR_Wzxsvgd48czHu1-zcg33OECdnCkhpxK5KC9tTpDffeQ9HOgVdk-tlMg2tODjcZEBULRvrBmGRtCvfrCwquuTLtFLhJuKuXUyHU78WyiAeVP61zLCYcckic_O8Cti05OgfxRku5XsVde3-GO65nX4Xe0T8k-gNl4xbZQXEwL6fF7cKHRydE7PTswXpiC59N"
            />
            <div className="card-content absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-20 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                <h2 className="font-serif font-semibold text-4xl md:text-5xl lg:text-7xl text-white mb-6 transform transition-transform duration-700 group-hover:-translate-y-4">Paper & <br/>Permanence</h2>
                <p className="text-white/60 font-sans font-normal text-lg uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">Vellum / 48.8°N</p>
            </div>
          </article>

          {/* Card 4 */}
          <article className="archive-card relative aspect-[4/5] md:aspect-square overflow-hidden group cursor-none">
            <img 
              alt="Light shaft and plaster" 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 transition-all duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjscZX43HYYtX54deXeqG8fyeiRxJ3RGSQcojNeuYHOqzDl5ggwFdCIFFI0Kb2UNyIui0dgn-Podh5fmNAFRObnDV4DU3fr0s3Jul9kf3orhwUtJ-kx52BjhrJvds67kArTb77m9G1VLLV3nDAlX7KU2mDd1movuOc0y5J7SWF2mvOhj6MrhsJzLPE-43vwIKXsKntNxb6OhuxNWvGyEvaO5XjPLFFLWOOA9bitP2ZkC8USprHuhnLBbFNYqtx-tN0Lsyj99dd1-2j"
            />
            <div className="card-content absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-20 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                <h2 className="font-serif font-semibold text-4xl md:text-5xl lg:text-7xl text-white mb-6 transform transition-transform duration-700 group-hover:-translate-y-4">Curated <br/>Absence</h2>
                <p className="text-white/60 font-sans font-normal text-lg uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">Plaster / 51.5°N</p>
            </div>
          </article>
        </section>

        {/* Footer CTA */}
        <section className="bg-[#001c3a] text-[#fcf9f8] py-32 md:py-64 px-6 md:px-16 relative overflow-hidden">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
            <h3 className="font-serif font-semibold text-5xl md:text-9xl mb-12 tracking-tight">Request <br/><span className="italic font-semibold">Patronage</span></h3>
            <p className="font-sans font-normal text-sm tracking-[0.6em] uppercase mb-16 opacity-70">
              Limited to curated collections
            </p>
            <div className="w-full max-w-2xl flex flex-col items-center gap-8">
              <p className="font-sans font-normal text-sm tracking-[0.4em] uppercase text-[#fcf9f8]/60 mb-8">
                Join the inner circle of material resurrection
              </p>
              <a 
                href="https://substack.com/@fieradelmastro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#fcf9f8] text-[#001c3a] font-sans font-normal text-xs tracking-[0.4em] uppercase py-8 px-16 hover:bg-[#A68B03] hover:text-white hover:shadow-[0_0_25px_#A68B03] transition-all duration-500 whitespace-nowrap rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] hover:rounded-[40%_60%_70%_30%_/_30%_60%_40%_70%]"
              >
                Subscribe to Substack
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
