import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative flex min-h-screen items-center justify-center px-6">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        >
          <source
            src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="text-6xl font-semibold lowercase tracking-[-0.08em]">
              alt
            </div>

            <div className="text-xs uppercase tracking-[0.35em] text-white/60">
              comunicação
            </div>
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold uppercase leading-[0.92] tracking-[-0.04em] md:text-7xl">
            Marketing com direção comercial.
          </h1>

          <p className="mt-8 max-w-2xl text-xl text-white/70">
            Branding, conteúdo, tráfego, automação e performance
            integrados para transformar atenção em faturamento.
          </p>

          <button className="mt-10 inline-flex items-center gap-4 bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:scale-[1.02]">
            Conhecer a Alt
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </section>
    </main>
  );
}
