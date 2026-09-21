"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Figma } from "lucide-react";
import { projectsData } from "@/data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#0A0D14] px-6 py-24 overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Projects
          </p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Proyek Terbaru
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ delay: idx * 0.12 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-xl shadow-black/40 transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-white/10">
                <Image
                  src={project.image}
                  alt={`Thumbnail proyek ${project.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-lg font-bold text-white transition-colors duration-200 group-hover:text-blue-400">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Lihat kode ${project.title} di GitHub`}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all duration-200 hover:from-blue-500 hover:to-indigo-500"
                    >
                      <Github size={16} />
                      Lihat di GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Lihat desain ${project.title} di Figma`}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all duration-200 hover:from-blue-500 hover:to-indigo-500"
                    >
                      <Figma size={16} />
                      Lihat di Figma
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
