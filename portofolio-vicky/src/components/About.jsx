"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, Lightbulb, TrendingUp } from "lucide-react";
import { aboutMe } from "@/data/portfolioData";

const icons = [Sparkles, Code2, Lightbulb];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="relative bg-[#0A0D14] px-6 py-24 overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">
            About Me
          </p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Mengenal Lebih Dekat
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-6 md:grid-rows-2">
          {/* Intro - large card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-8 shadow-2xl shadow-black/40 transition-all duration-300 hover:border-blue-500/30 md:col-span-4 md:row-span-2 flex flex-col justify-between"
          >
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                Design That Speaks, Code That Works
              </h3>
              <p className="text-base leading-relaxed text-slate-300">
                {aboutMe.intro}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {aboutMe.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-400 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Points - small cards */}
          {aboutMe.points.map((point, idx) => {
            const Icon = icons[idx] || TrendingUp;
            return (
              <motion.div
                key={point.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ delay: idx * 0.1 }}
                className="group rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-6 shadow-xl shadow-black/30 transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-900/80 hover:shadow-blue-500/10 md:col-span-2"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 transition-transform duration-300 group-hover:scale-110 group-hover:border-blue-400">
                  <Icon size={20} />
                </div>
                <h4 className="mb-1.5 text-base font-bold text-white">
                  {point.title}
                </h4>
                <p className="text-sm leading-relaxed text-slate-300">
                  {point.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
