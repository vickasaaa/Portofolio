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
    <section id="contact" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Contact
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Mari Berdiskusi
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            Punya proyek atau ingin sekadar berdiskusi soal desain dan
            teknologi? Silakan hubungi saya melalui dibawah ini.
          </p>
        </motion.div>

        <div className="flex justify-center">
          {/* Info Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 w-full max-w-md"
          >
            <div>
              <h3 className="mb-4 text-lg font-bold text-slate-900">
                Informasi Kontak
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Mail size={18} />
                  </span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm text-slate-600 hover:text-blue-600"
                  >
                    {profile.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <MapPin size={18} />
                  </span>
                  <span className="text-sm text-slate-600">
                    {profile.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold text-slate-900">
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
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:border-blue-600 hover:text-blue-600"
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
