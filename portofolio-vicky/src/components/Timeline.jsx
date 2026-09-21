"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { educationTimeline, experienceTimeline } from "@/data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function TimelineList({ items, icon: Icon }) {
  return (
    <ol className="relative border-l-2 border-slate-800 pl-8">
      {items.map((item, idx) => (
        <motion.li
          key={item.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ delay: idx * 0.12 }}
          className="mb-10 last:mb-0"
        >
          <span className="absolute -left-[19px] flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white ring-4 ring-[#0A0D14] shadow-lg shadow-blue-500/20">
            <Icon size={16} />
          </span>
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6 shadow-xl shadow-black/40 transition-all duration-300 hover:border-blue-500/30">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-400">
              {item.period}
            </p>
            <h4 className="text-base font-bold text-white">{item.title}</h4>
            <p className="mb-2 text-sm font-medium text-slate-400">
              {item.place}
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              {item.description}
            </p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}

export default function Timeline() {
  return (
    <section id="experience" className="relative bg-[#0A0D14] px-6 py-24 overflow-hidden">
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
            Experiences
          </p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Pendidikan &amp; Pengalaman
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 flex items-center gap-2.5 text-lg font-bold text-white">
              <GraduationCap size={22} className="text-blue-400" />
              Pendidikan
            </h3>
            <TimelineList items={educationTimeline} icon={GraduationCap} />
          </div>

          <div>
            <h3 className="mb-6 flex items-center gap-2.5 text-lg font-bold text-white">
              <Briefcase size={22} className="text-blue-400" />
              Pengalaman
            </h3>
            <TimelineList items={experienceTimeline} icon={Briefcase} />
          </div>
        </div>
      </div>
    </section>
  );
}
