import React from 'react';

export default function PressKit() {
  return (
    <main className="min-h-screen bg-[#F2F2F2] text-[#1A1A1A] pt-24 pb-32 px-6 md:px-16 lg:pt-32 lg:pb-48">
      <div className="max-w-3xl mx-auto">
        <header className="mb-16">
          <h1 className="text-5xl md:text-8xl font-serif font-semibold text-[#1A1A1A] mb-4 tracking-tight uppercase leading-none">
            Press Kit
          </h1>
          <p className="text-xl md:text-2xl font-serif italic text-[#1A1A1A] opacity-80 tracking-wide">
            THE NARRATIVE OF MATERIAL RESURRECTION
          </p>
        </header>
        
        <div className="space-y-24 text-lg md:text-xl font-body leading-[1.6] text-left">
          {/* Section 01 */}
          <section className="space-y-12">
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#1A1A1A] border-b border-[#1A1A1A]/10 pb-6 uppercase tracking-wider">
              THE BRAND MANIFESTO (THE NARRATIVE)
            </h2>
            
            <div className="space-y-16">
              {/* 01.1 */}
              <div className="space-y-8">
                <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#1A1A1A]">
                  THE BRAND MONOGRAPH
                </h3>
                <h4 className="text-xl md:text-2xl font-serif font-bold text-[#1A1A1A] uppercase">
                  <span className="text-[#035AA6]">Material Resurrection</span>: A Manifesto of Radical Luxury
                </h4>
                
                <div className="space-y-8 opacity-90">
                  <div>
                    <h5 className="font-serif font-semibold text-[#1A1A1A] mb-2">The Starting Point (The Silence)</h5>
                    <p>In a world saturated with industrial perfection and soulless serial design, true rarity is found in the inaccessible and the forgotten. The Calabrian coasts and mountains guard a silent treasure: wood marked by salt, millennial granites, and debris that time has transformed into honest witnesses of the territory.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-serif font-semibold text-[#1A1A1A] mb-2">Our Vision (The Alchemy)</h5>
                    <p>Fiera del Mastro (FDM) is not a sales platform; it is a speculative design laboratory where debris becomes a relic. We believe in Material Resurrection: an alchemical process that takes detritus and ennobles it through signature design. We do not seek sterile perfection, but Material Truth: that raw beauty that does not apologize for its wounds.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-serif font-semibold text-[#1A1A1A] mb-2">The Contrast (Archaic and Post-Digital)</h5>
                    <p>Our engine is the tension between two worlds: the Raw Hands of our Mastri and the Infinite Vision of technology. We utilize Artificial Intelligence not to create the object, but to build the editorial scenography that hosts it, projecting the ancient gesture into a future we did not yet know we wanted to inhabit.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-serif font-semibold text-[#1A1A1A] mb-2">The Belonging (The Patronage)</h5>
                    <p>We do not recognize customers, but Patrons. Those who acquire an FDM Opus do not simply own furniture; they safeguard a fragment of Calabrian history, certified in its traceability and ennobled by the human gesture.</p>
                  </div>
                </div>
              </div>

              {/* 01.2 */}
              <div className="space-y-8">
                <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#1A1A1A]">
                  THE STORY OF THE MASTRO
                </h3>
                <h4 className="text-xl md:text-2xl font-serif font-bold text-[#1A1A1A] uppercase">
                  The <span className="text-[#035AA6]">Gesture</span> is the Most Advanced Technology We Have
                </h4>
                
                <div className="space-y-8 opacity-90">
                  <div>
                    <h5 className="font-serif font-semibold text-[#1A1A1A] mb-2">The Keeper of the Secret</h5>
                    <p>The Mastro is not a simple craftsman; he is the keeper of a technical secret that AI can never replicate. He is the one who knows how to read the resistance of wood and the hardness of stone, acting as a philosopher of matter.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-serif font-semibold text-[#1A1A1A] mb-2">The Bridge between Generations</h5>
                    <p>FDM was born to give a voice to this ancient knowledge that risked dying in silence due to the lack of a contemporary language. We are the bridge that allows the gesture of Mastro Rocco or patterns from centuries ago to dialogue with architects in London or collectors in New York. The Mastro does not endure the future; he defines it through the resistance of his hand.</p>
                  </div>
                </div>
              </div>

              {/* 01.3 */}
              <div className="space-y-8">
                <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#1A1A1A]">
                  THE ELEVATOR PITCH
                </h3>
                <h4 className="text-xl md:text-2xl font-serif font-bold text-[#1A1A1A] uppercase">
                  <span className="text-[#035AA6]">FDM</span> in 30 sec
                </h4>
                <p className="opacity-90">
                  FDM transforms raw matter and debris from the Calabrian coast into collectible radical luxury works. We merge the ancestral knowledge of local Mastri with an avant-garde editorial vision to redefine Mediterranean excellence. Each of our Opus is a unique piece that brings the story of an untamed territory into the most exclusive architecture projects in the world. Our journey culminates in 2026 with the Pilgrimage of Radical Vision: the event that will forever change the meaning of identity luxury.
                </p>
              </div>
            </div>
          </section>

          {/* Media Contacts */}
          <section className="pt-16 border-t border-[#1A1A1A]/10">
            <h2 className="text-2xl md:text-4xl font-serif font-semibold mb-8 text-[#1A1A1A]">
              Media Contacts
            </h2>
            <div className="space-y-6 opacity-90">
              <p>
                For all media inquiries, interview requests, or high-resolution asset access, please contact our editorial team.
              </p>
              <p className="font-semibold text-xl">
                Contact: <a href="mailto:fieradelmastro@gmail.com" className="underline hover:text-[#035AA6] transition-colors">fieradelmastro@gmail.com</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
