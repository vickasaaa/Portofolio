"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-20"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65 z-0" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[auto_1fr]">
        {/* Profile Photo */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="flex justify-center md:justify-start"
        >
          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 border-white/30 shadow-2xl shadow-indigo-900/60 ring-2 ring-indigo-400/30 sm:h-48 sm:w-48">
            <Image
              src={profile.photo}
              alt={`Foto profil ${profile.name}`}
              fill
              sizes="190px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="text-center md:text-left">

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {profile.headline}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mx-auto mt-5 max-w-xl text-lg text-slate-200 md:mx-0"
          >
            {profile.subHeadline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start"
          >
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 backdrop-blur-sm"
            >
              Lihat Proyek
              <ArrowRight size={16} />
            </a>

            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 backdrop-blur-sm"
            >
              <Download size={16} />
              Unduh CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
