import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-[#1c1b1b] text-white py-10 md:py-20 px-6 md:px-16 w-full mt-24 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12 relative z-10 transition-transform duration-300 hover:scale-[1.01]">
        <div className="flex flex-col mb-12 md:mb-0">
          <span className="text-lg font-serif italic text-white tracking-wide mb-4">Fiera del Mastro</span>
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-stone-500">
            © 2026 Fiera del Mastro. All rights reserved. Under Elite Patronage.
          </span>
        </div>
        <div className="flex flex-wrap gap-8 md:gap-12">
          <Link href="/privacy-policy" className="font-sans font-normal text-[10px] tracking-[0.3em] uppercase text-stone-500 hover:text-[#A68B03] transition-all duration-300">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="font-sans font-normal text-[10px] tracking-[0.3em] uppercase text-stone-500 hover:text-[#A68B03] transition-all duration-300">
            Terms of Service
          </Link>
          <Link href="/press-kit" className="font-sans font-normal text-[10px] tracking-[0.3em] uppercase text-stone-500 hover:text-[#A68B03] transition-all duration-300">
            Press Kit
          </Link>
          <a href="https://substack.com/@fieradelmastro" target="_blank" rel="noopener noreferrer" className="font-sans font-normal text-[10px] tracking-[0.3em] uppercase text-stone-500 hover:text-[#A68B03] transition-all duration-300">
            Substack
          </a>
          <a href="https://www.instagram.com/fieradelmastro/" target="_blank" rel="noopener noreferrer" className="font-sans font-normal text-[10px] tracking-[0.3em] uppercase text-stone-500 hover:text-[#A68B03] transition-all duration-300">
            Instagram
          </a>
          <a href="https://x.com/FieraDelMastro" target="_blank" rel="noopener noreferrer" className="font-sans font-normal text-[10px] tracking-[0.3em] uppercase text-stone-500 hover:text-[#A68B03] transition-all duration-300">
            X
          </a>
          <a href="https://www.linkedin.com/company/113184416/" target="_blank" rel="noopener noreferrer" className="font-sans font-normal text-[10px] tracking-[0.3em] uppercase text-stone-500 hover:text-[#A68B03] transition-all duration-300">
            LinkedIn
          </a>
        </div>
      </div>

      {/* Decorative Monograph Background */}
      <div className="absolute -right-16 md:-right-32 -bottom-16 md:-bottom-32 text-[20rem] md:text-[40rem] font-headline font-semibold text-white pointer-events-none select-none opacity-5">
        FDM
      </div>
    </footer>
  );
}
