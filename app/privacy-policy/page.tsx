import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#F2F2F2] text-[#1A1A1A] pt-24 pb-32 px-6 md:px-16 lg:pt-32 lg:pb-48">
      <div className="max-w-3xl mx-auto">
        <header className="mb-16">
          <h1 className="text-5xl md:text-8xl font-serif font-semibold text-[#035AA6] mb-4 tracking-tight uppercase leading-none">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl font-serif font-semibold italic text-[#1A1A1A] opacity-80 tracking-wide">
            THE MANIFESTO OF INFORMATION CUSTODIANSHIP
          </p>
        </header>
        
        <div className="space-y-20 text-lg md:text-xl font-sans font-normal leading-[1.6] text-left">
          <section>
            <h2 className="text-2xl md:text-4xl font-serif font-semibold mb-8 text-[#1A1A1A] border-b border-[#1A1A1A]/10 pb-4">
              The Custodian of Matter (Data Controller)
            </h2>
            <div className="space-y-6 opacity-90">
              <p>
                Fiera del Mastro (hereafter "FDM") does not merely collect data; it acts as the Custodian of the information it receives. Every fragment of data is treated with the same surgical care a Mastro reserves for Raw Matter before its Resurrection.
              </p>
              <p className="font-semibold">
                Contact: <a href="mailto:fieradelmastro@gmail.com" className="underline hover:text-[#035AA6] transition-colors">fieradelmastro@gmail.com</a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-4xl font-serif font-semibold mb-8 text-[#1A1A1A] border-b border-[#1A1A1A]/10 pb-4">
              Information Raw Matter (Data Collection)
            </h2>
            <div className="space-y-6 opacity-90">
              <p>
                We collect only what is strictly necessary to nourish the relationship between the Brand and its Patrons.
              </p>
              <ul className="space-y-4 list-none pl-0">
                <li><strong className="text-[#1A1A1A]">Identity Data:</strong> Name, titles, and professional background (Patron, Architect, or Collector).</li>
                <li><strong className="text-[#1A1A1A]">Contact Data:</strong> Digital and physical coordinates required for the delivery of an Opus or for the invitation to the Pilgrimage of 2026.</li>
                <li><strong className="text-[#1A1A1A]">Radical Traceability:</strong> Interaction data within our archive, essential to certify the material's history and your membership in the FDM elite.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-4xl font-serif font-semibold mb-8 text-[#1A1A1A] border-b border-[#1A1A1A]/10 pb-4">
              Alchemy of Transformation (Purpose)
            </h2>
            <div className="space-y-6 opacity-90">
              <p>
                Your data is transformed for precise and declared purposes, without euphemisms:
              </p>
              <ul className="space-y-4 list-none pl-0">
                <li><strong className="text-[#1A1A1A]">Opus Certification:</strong> To document the Patron of each unique piece and guarantee its Radical Traceability.</li>
                <li><strong className="text-[#1A1A1A]">Editorial Experience:</strong> To provide communications with the depth of an author’s monograph, maintaining our Editorial Silence by avoiding standard commercial spam.</li>
                <li><strong className="text-[#1A1A1A]">Pilgrimage 2026:</strong> To manage your physical and spiritual participation in the June event in Calabria.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-4xl font-serif font-semibold mb-8 text-[#1A1A1A] border-b border-[#1A1A1A]/10 pb-4">
              The Archive of Vision (Security)
            </h2>
            <div className="space-y-6 opacity-90">
              <p>
                We do not store data indefinitely. Retention follows the life cycle of the artifact.
              </p>
              <ul className="space-y-4 list-none pl-0">
                <li><strong className="text-[#1A1A1A]">Technical Rigor:</strong> We utilize advanced security protocols—our digital Infinite Vision—to protect the integrity of your profile from unauthorized access.</li>
                <li><strong className="text-[#1A1A1A]">Editorial Silence:</strong> Unnecessary data is destroyed. We do not sell, trade, or dilute the value of your identity with non-certified third parties.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-4xl font-serif font-semibold mb-8 text-[#1A1A1A] border-b border-[#1A1A1A]/10 pb-4">
              Material Truth: Your Rights
            </h2>
            <div className="space-y-6 opacity-90">
              <p>
                As a Patron, you possess sovereign authority over your informational matter. You may request at any time:
              </p>
              <ul className="space-y-4 list-none pl-0">
                <li><strong className="text-[#1A1A1A]">Access and Vision:</strong> To know which data is held within our Archive.</li>
                <li><strong className="text-[#1A1A1A]">Rectification and Editing:</strong> To refine or correct your digital identity.</li>
                <li><strong className="text-[#1A1A1A]">Oblivion and Resurrection:</strong> To request the deletion of your data, ending your traceability within the FDM system.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-4xl font-serif font-semibold mb-8 text-[#1A1A1A] border-b border-[#1A1A1A]/10 pb-4">
              Evolution of the Manifesto
            </h2>
            <p className="opacity-90">
              This document is not static. Just as raw matter changes under the Mastro’s Gesture, this policy may be edited to reflect the evolution of our vision. Any revision will be notified with due authority.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
