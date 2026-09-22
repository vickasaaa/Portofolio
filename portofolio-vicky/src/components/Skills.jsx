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
      whileHover={{ scale: 1.05, y: -2 }}
      className="group flex items-center gap-2.5 rounded-2xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-md px-4 py-2.5 transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-850 cursor-default"
    >
      <span className="flex h-6 w-6 shrink-0 items-center justify-center">
        <img
          src={skill.localIcon || `https://cdn.simpleicons.org/${skill.icon}/${skill.color.replace("#", "")}`}
          alt={`${skill.name} logo`}
          className="h-5 w-5 object-contain transition-transform duration-200 group-hover:scale-110"
          loading="lazy"
        />
      </span>

      <span className="text-sm font-medium text-zinc-300 transition-colors duration-200 group-hover:text-white">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative bg-black px-6 py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <span className="inline-block mb-3 text-xs font-mono font-medium uppercase tracking-widest text-zinc-400 bg-zinc-900/80 border border-zinc-800 px-3.5 py-1.5 rounded-full">
            Skills
          </span>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
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
                className="rounded-3xl border border-zinc-800/90 bg-zinc-950/80 backdrop-blur-md p-8 shadow-xl transition-all duration-300 hover:border-zinc-700"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-800 text-white">
                  <Icon size={22} />
                </div>

                <h3 className="mb-2 text-xl font-bold text-white">
                  {card.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-zinc-400">
                  {card.description}
                </p>

                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex flex-wrap gap-2.5"
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
