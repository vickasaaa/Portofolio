"use client";

import { motion } from "framer-motion";
import { Palette, Code } from "lucide-react";
import { skillsData } from "@/data/portfolioData";

const categoryIcons = {
  design: Palette,
  development: Code,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const badgeFade = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

function SkillBadge({ skill }) {
  return (
    <motion.div
      variants={badgeFade}
      whileHover={{ scale: 1.06, y: -2 }}
      className="group flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md cursor-default"
    >
      <span className="flex h-6 w-6 shrink-0 items-center justify-center">
        <img
          src={`https://cdn.simpleicons.org/${skill.icon}/${skill.color.replace("#", "")}`}
          alt={`${skill.name} logo`}
          className="h-5 w-5 object-contain transition-transform duration-200 group-hover:scale-110"
          loading="lazy"
        />
      </span>

      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors duration-200">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Skills
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Kemampuan &amp; Keahlian
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillsData.map((card, idx) => {
            const Icon = categoryIcons[card.id] || Code;
            return (
              <motion.div
                key={card.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ delay: idx * 0.15 }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-100 transition-shadow hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <Icon size={22} />
                </div>

                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  {card.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  {card.description}
                </p>

                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex flex-wrap gap-2"
                >
                  {card.skills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} />
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

