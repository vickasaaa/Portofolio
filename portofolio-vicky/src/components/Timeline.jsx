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
    <ol className="relative border-l-2 border-slate-200 pl-8">
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
          <span className="absolute -left-[19px] flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white ring-4 ring-white">
            <Icon size={16} />
          </span>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-100">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
              {item.period}
            </p>
            <h4 className="text-base font-bold text-slate-900">{item.title}</h4>
            <p className="mb-2 text-sm font-medium text-slate-500">
              {item.place}
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
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
    <section id="experience" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Experiences
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Pendidikan &amp; Pengalaman
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-slate-900">
              <GraduationCap size={20} className="text-blue-600" />
              Pendidikan
            </h3>
            <TimelineList items={educationTimeline} icon={GraduationCap} />
          </div>

          <div>
            <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-slate-900">
              <Briefcase size={20} className="text-blue-600" />
              Pengalaman
            </h3>
            <TimelineList items={experienceTimeline} icon={Briefcase} />
          </div>
        </div>
      </div>
    </section>
  );
}
