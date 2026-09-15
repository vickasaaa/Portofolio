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
    <section id="about" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            About Me
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
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
            className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:col-span-4 md:row-span-2"
          >
            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              Desain yang Berbicara, Kode yang Bekerja
            </h3>
            <p className="text-base leading-relaxed text-slate-600">
              {aboutMe.intro}
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6">
              {aboutMe.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                  <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
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
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100 transition-shadow hover:shadow-md md:col-span-2"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={20} />
                </div>
                <h4 className="mb-1.5 text-base font-semibold text-slate-900">
                  {point.title}
                </h4>
                <p className="text-sm leading-relaxed text-slate-600">
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
