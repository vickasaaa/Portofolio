"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, Instagram, MessageCircle } from "lucide-react";
import { profile, socialLinks } from "@/data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const iconMap = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  whatsapp: MessageCircle,
};

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black px-6 py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <span className="inline-block mb-3 text-xs font-mono font-medium uppercase tracking-widest text-zinc-400 bg-zinc-900/80 border border-zinc-800 px-3.5 py-1.5 rounded-full">
            Contact
          </span>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Mari Berdiskusi
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-zinc-400">
            Punya proyek atau ingin sekadar berdiskusi soal desain dan
            teknologi? Silakan hubungi saya melalui di bawah ini.
          </p>
        </motion.div>

        <div className="flex justify-center">
          {/* Info Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex flex-col justify-between rounded-3xl border border-zinc-800/90 bg-zinc-950/80 backdrop-blur-md p-8 w-full max-w-md shadow-2xl transition-all duration-300 hover:border-zinc-700"
          >
            <div>
              <h3 className="mb-6 text-lg font-bold text-white">
                Informasi Kontak
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-300 shrink-0">
                    <Mail size={18} />
                  </span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
                  >
                    {profile.email}
                  </a>
                </div>
                <div className="flex items-center gap-3.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-300 shrink-0">
                    <MapPin size={18} />
                  </span>
                  <span className="text-sm font-medium text-zinc-400">
                    {profile.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-zinc-800/80 pt-6">
              <p className="mb-4 text-sm font-semibold text-zinc-300">
                Temukan saya di
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-zinc-300 transition-all duration-200 hover:border-white hover:text-white hover:bg-zinc-800 hover:scale-105"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
