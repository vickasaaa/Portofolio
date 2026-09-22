"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-20 bg-black"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark gradient overlay blending space into pure black */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black z-0 pointer-events-none" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[auto_1fr]">
        {/* Profile Photo */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="flex justify-center md:justify-start"
        >
          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl ring-2 ring-zinc-700 sm:h-48 sm:w-48">
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
            className="mx-auto mt-5 max-w-xl text-lg text-zinc-300 md:mx-0 font-normal"
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
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-zinc-200 border border-white shadow-lg"
            >
              Lihat Proyek
              <ArrowRight size={16} />
            </a>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
