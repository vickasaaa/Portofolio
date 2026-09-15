"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";
import { certificatesData, achievementsData } from "@/data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Certificates() {
  return (
    <section id="certificates" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Recognition
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Sertifikat &amp; Prestasi
          </h2>
        </motion.div>

        {/* Certificates Grid */}
        <div className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certificatesData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ delay: idx * 0.1 }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-100 transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full bg-slate-100">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Award size={16} />
                </div>
                <h4 className="mb-1 text-sm font-bold leading-snug text-slate-900">
                  {cert.title}
                </h4>
                <p className="text-xs text-slate-500">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
        >
          <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-slate-900">
            <Trophy size={20} className="text-blue-600" />
            Prestasi Lomba
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {achievementsData.map((ach) => (
              <div
                key={ach.id}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <p className="mb-1 text-xs font-semibold text-blue-600">
                  {ach.year}
                </p>
                <h4 className="mb-1 text-sm font-bold text-slate-900">
                  {ach.title}
                </h4>
                <p className="text-xs leading-relaxed text-slate-500">
                  {ach.issuer}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
