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
    <section id="projects" className="relative bg-black px-6 py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <span className="inline-block mb-3 text-xs font-mono font-medium uppercase tracking-widest text-zinc-400 bg-zinc-900/80 border border-zinc-800 px-3.5 py-1.5 rounded-full">
            Projects
          </span>
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
              className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-800/90 bg-zinc-950/80 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-zinc-700"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-900 border-b border-zinc-800">
                <Image
                  src={project.image}
                  alt={`Thumbnail proyek ${project.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-lg font-bold text-white transition-colors duration-200 group-hover:text-zinc-200">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-zinc-900 border border-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300"
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
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-zinc-200 border border-white"
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
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-zinc-200 border border-white"
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
