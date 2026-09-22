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
    <section id="about" className="relative bg-black px-6 py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <span className="inline-block mb-3 text-xs font-mono font-medium uppercase tracking-widest text-zinc-400 bg-zinc-900/80 border border-zinc-800 px-3.5 py-1.5 rounded-full">
            About Me
          </span>
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
            className="rounded-3xl border border-zinc-800/90 bg-zinc-950/80 backdrop-blur-md p-8 shadow-2xl transition-all duration-300 hover:border-zinc-700 md:col-span-4 md:row-span-2 flex flex-col justify-between"
          >
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                Design That Speaks, Code That Works
              </h3>
              <p className="text-base leading-relaxed text-zinc-400">
                {aboutMe.intro}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-zinc-800/80 pt-6">
              {aboutMe.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-extrabold text-white sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-zinc-400 sm:text-sm">
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
                className="group rounded-3xl border border-zinc-800/90 bg-zinc-950/80 backdrop-blur-md p-6 shadow-xl transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/60 md:col-span-2"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-200 transition-transform duration-300 group-hover:scale-110 group-hover:border-zinc-600">
                  <Icon size={20} />
                </div>
                <h4 className="mb-1.5 text-base font-bold text-white">
                  {point.title}
                </h4>
                <p className="text-sm leading-relaxed text-zinc-400">
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
