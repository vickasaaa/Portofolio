"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, MessageCircle } from "lucide-react";
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
      className="relative flex min-h-screen items-center overflow-hidden bg-white px-6 pt-32 pb-20"
    >
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-50/60 blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[auto_1fr]">
        {/* Profile Photo */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="flex justify-center md:justify-start"
        >
          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-xl shadow-slate-200 ring-1 ring-slate-200 sm:h-48 sm:w-48">
            <Image
              src={profile.photo}
              alt={`Foto profil ${profile.name}`}
              fill
              sizes="192px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600"
          >
            {profile.status}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            {profile.headline}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mx-auto mt-5 max-w-xl text-lg text-slate-600 md:mx-0"
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
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700 hover:shadow-blue-300"
            >
              Lihat Proyek
              <ArrowRight size={16} />
            </a>

            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border-2 border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50"
            >
              <Download size={16} />
              Unduh CV
            </a>

            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              <MessageCircle size={16} />
              Hubungi saya
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
