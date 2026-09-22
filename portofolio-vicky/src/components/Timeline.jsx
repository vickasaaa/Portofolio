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
    <ol className="relative border-l-2 border-zinc-800 pl-8">
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
          <span className="absolute -left-[19px] flex h-9 w-9 items-center justify-center rounded-full bg-white text-black ring-4 ring-black shadow-lg">
            <Icon size={16} />
          </span>
          <div className="rounded-2xl border border-zinc-800/90 bg-zinc-950/80 backdrop-blur-md p-6 shadow-xl transition-all duration-300 hover:border-zinc-700">
            <p className="mb-1 text-xs font-mono font-medium uppercase tracking-wide text-zinc-400">
              {item.period}
            </p>
            <h4 className="text-base font-bold text-white">{item.title}</h4>
            <p className="mb-2 text-sm font-medium text-zinc-400">
              {item.place}
            </p>
            <p className="text-sm leading-relaxed text-zinc-400">
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
    <section id="experience" className="relative bg-black px-6 py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <span className="inline-block mb-3 text-xs font-mono font-medium uppercase tracking-widest text-zinc-400 bg-zinc-900/80 border border-zinc-800 px-3.5 py-1.5 rounded-full">
            Experiences
          </span>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Pendidikan &amp; Pengalaman
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 flex items-center gap-2.5 text-lg font-bold text-white">
              <GraduationCap size={22} className="text-zinc-300" />
              Pendidikan
            </h3>
            <TimelineList items={educationTimeline} icon={GraduationCap} />
          </div>

          <div>
            <h3 className="mb-6 flex items-center gap-2.5 text-lg font-bold text-white">
              <Briefcase size={22} className="text-zinc-300" />
              Pengalaman
            </h3>
            <TimelineList items={experienceTimeline} icon={Briefcase} />
          </div>
        </div>
      </div>
    </section>
  );
}
