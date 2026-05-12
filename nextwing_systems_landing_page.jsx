export default function NextWingLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 opacity-90" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-zinc-300 mb-6">
            NEXTWING SYSTEMS by Honoré Labs
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight max-w-4xl">
            Modular UAV Systems
            <span className="block text-zinc-400">for the Future</span>
          </h1>

          <p className="mt-8 text-lg text-zinc-300 max-w-2xl leading-relaxed">
            NextWing Systems develops low-cost modular UAV platforms focused on emergency response, aerial monitoring, autonomous navigation, and experimental VTOL architectures.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-white text-black px-6 py-3 font-semibold hover:scale-105 transition">
              Explore Projects
            </button>

            <button className="rounded-2xl border border-white/20 px-6 py-3 font-semibold hover:bg-white/10 transition">
              Mission Overview
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
            About
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Experimental aerospace engineering built in Mexico.
          </h2>

          <p className="text-zinc-300 leading-relaxed text-lg">
            Founded by Honoré Villanueva, NextWing Systems focuses on developing modular UAV platforms using accessible engineering, rapid prototyping, embedded systems, and adaptive flight architectures.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8 shadow-2xl">
          <h3 className="text-2xl font-bold mb-6">Core Technologies</h3>

          <div className="grid grid-cols-2 gap-4 text-zinc-300">
            <div className="rounded-2xl bg-black/40 p-4 border border-white/5">
              Autonomous Navigation
            </div>
            <div className="rounded-2xl bg-black/40 p-4 border border-white/5">
              VTOL Research
            </div>
            <div className="rounded-2xl bg-black/40 p-4 border border-white/5">
              Modular Payload Systems
            </div>
            <div className="rounded-2xl bg-black/40 p-4 border border-white/5">
              Flight Stabilization
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="border-t border-white/10 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
            Projects
          </p>

          <h2 className="text-4xl font-bold mb-12">Current Development Platforms</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-white/10 bg-black/40 p-8 hover:border-white/30 transition">
              <p className="text-zinc-500 text-sm mb-3">NF-X1</p>
              <h3 className="text-3xl font-bold mb-4">Night Fury X1</h3>
              <p className="text-zinc-300 leading-relaxed">
                A modular fixed-wing UAV platform featuring custom stabilization systems, mission payload integration, and experimental autonomous flight capabilities.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/40 p-8 hover:border-white/30 transition">
              <p className="text-zinc-500 text-sm mb-3">VT-X1</p>
              <h3 className="text-3xl font-bold mb-4">VT-X1 Hybrid Platform</h3>
              <p className="text-zinc-300 leading-relaxed">
                Experimental distributed-lift architecture designed to explore assisted VTOL operations, adaptive stabilization, and future autonomous transition systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-6 text-center text-zinc-500 text-sm">
        NextWing Systems by Honoré Labs — Experimental UAV Research & Development
      </footer>
    </div>
  )
}
