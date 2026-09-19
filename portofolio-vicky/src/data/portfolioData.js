// src/data/portfolioData.js

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const profile = {
  name: "Muhammad Vicky",
  shortName: "Vickasaaa",
  role: "UI/UX Designer | Front-End Developer",
  headline: "Hi, I'm Muhammad Vicky",
  subHeadline:
    "UI/UX Designer & Front-End Developer",
  photo: "/projects/profile.jpg",
  cv: "/cv-muhammad-vicky.pdf",
  whatsapp: "https://wa.me/6285813288426",
  email: "mhmdvicky09@email.com",
  location: "Karawang, Indonesia",
};

export const aboutMe = {
  intro:
    "Saya adalah mahasiswa Teknik Informatika yang antusias pada desain dan teknologi. Fokus saya adalah merancang pengalaman digital yang intuitif melalui riset UI/UX, lalu mewujudkannya menjadi produk web yang fungsional dan performan.",
  points: [
    {
      title: "UI/UX Design",
      desc: "Merancang alur pengguna, wireframe, hingga high-fidelity prototype yang berpusat pada kebutuhan pengguna.",
    },
    {
      title: "Front-End Development",
      desc: "Mengubah desain menjadi kode yang rapi, responsif, dan siap produksi menggunakan Next.js & Tailwind CSS.",
    },
    {
      title: "Problem Solver",
      desc: "Terbiasa memecah masalah kompleks menjadi solusi desain dan teknis yang sederhana serta terukur.",
    },
  ],
  stats: [
    { label: "Proyek Selesai", value: "3+" },
    { label: "Tahun Belajar", value: "3+" },
  ],
};

export const skillsData = [
  {
    id: "design",
    title: "Design Tools & Methods",
    description:
      "Design Toold dan metode yang digunakan dalam proses riset hingga desain interface.",
    skills: [
      { name: "Figma", icon: "figma", color: "#F24E1E" },
      { name: "StarUML", localIcon: "/icons/staruml.jpg", color: "#E25A1C" },
      { name: "Canva", localIcon: "/icons/canva.jpg", color: "#00C4CC" },
    ],
  },
  {
    id: "development",
    title: "Front-End Development",
    description:
      "Teknologi yang digunakan untuk membangun antarmuka web modern dan responsif.",
    skills: [
      { name: "Next.js", icon: "nextdotjs", color: "#000000" },
      { name: "React.js", icon: "react", color: "#61DAFB" },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "HTML", icon: "html5", color: "#E34F26" },
      { name: "CSS", icon: "css", color: "#663399" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
      { name: "Git", icon: "git", color: "#F05032" },
    ],
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Airify",
    description:
      "Airify adalah Aplikasi Berbasis Website, Untuk Memonitoring Kualitas Udara pada seluruh Kampus di Karawang.",
    image: "/projects/Airify.jpg",
    tech: ["Php Native", "Boostrap CSS", "JavaScript"],
    githubUrl: "https://github.com/vickasaaa/Airify",
  },
  {
    id: 2,
    title: "ZETA (Zona E-Procurement Tender Akses)",
    description:
      "ZETA merupakan sebuah Mobile Apps yang dimana kita bisa melakukan lelang melelang barang atau jasa sampai dengan melakukan pembayaran, saya dan tim membuat ZETA untuk tugas akhir matakuliah pemrograman mobile ",
    image: "/projects/zeta.jpg",
    tech: ["TypeScript", "Tailwind CSS",],
    githubUrl: "https://github.com/vickasaaa/mobile_e-tender",
  },
  {
    id: 3,
    title: "Visualearn",
    description:
      "Visualearn adalah aplikasi berbasis mobile yang bisa melakukan text to speech untuk membantu mahasiswa tuli untuk melakukan pembelajaran, saya dan tim merancang desain ini untuk mengikuti lomba UI/UX di GEMASTIK 2026",
    image: "/projects/Gemastik.jpg",
    tech: ["Figma"],
    demoUrl: "https://www.figma.com/proto/8W3aEKs2tIMDktYXj6koTI/Gemastik_UI_UX?node-id=181-2&p=f&t=mC5iXUQaETvTvDJM-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=156%3A2",
    githubUrl: null,
  },
];

export const educationTimeline = [
  {
    id: "edu-1",
    type: "education",
    title: "S1 Teknik Informatika",
    place: "Universitas Buana Perjuangan Karawang",
    period: "2024 — Sekarang",
    description:
      "Fokus pada Pengembangan Perangkat Lunak & Desain Grafis.",
  },
];

export const experienceTimeline = [
  {
    id: "exp-1",
    type: "experience",
    title: "Web Developer",
    place: "SMAN 3 CIKAMPEK",
    period: "Jun 2023 — Sep 2023",
    description:
      "Membuat Blog daftar guru dan staff SMAN 3 CIKAMPEK diperuntukan untuk masa mpls agar siswa dapet mengenal seluruh guru dan staff ",
  },
  {
    id: "exp-2",
    type: "experience",
    title: "Staff Divisi Desain & Multimedia",
    place: "UKM Mahasiswa Melawan Narkotika (MALAKA)",
    period: "2024 — 2025",
    description:
      "Bertanggung jawab atas kebutuhan desain visual untuk publikasi acara dan edukasi untuk masyarakat.",
  },

];

export const certificatesData = [
  {
    id: "cert-1",
    title: "SQL",
    issuer: "TESTDOME",
    year: "2025",
    image: "/certificates/SQL.jpg",
  },
  {
    id: "cert-2",
    title: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding Indonesia",
    year: "2023",
    image: "/certificates/dicoding-frontend.png",
  },
  {
    id: "cert-3",
    title: "Belajar Fundamental Aplikasi Web",
    issuer: "Dicoding Indonesia",
    year: "2023",
    image: "/certificates/dicoding-fundamental.png",
  },
  {
    id: "cert-4",
    title: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    issuer: "Dicoding Indonesia",
    year: "2024",
    image: "/certificates/dicoding-backend.png",
  },
];

export const achievementsData = [
  {
    id: "ach-1",
    title: "Juara 2 - UI/UX Design Competition",
    issuer: "Hackathon Nasional Teknologi Kreatif",
    year: "2024",
  },
  {
    id: "ach-2",
    title: "Finalis - Startup Digital Challenge",
    issuer: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    year: "2023",
  },
  {
    id: "ach-3",
    title: "Best Design Award",
    issuer: "Campus Web Development Competition",
    year: "2023",
  },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/muhammadvicky", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/vickasaaa", icon: "github" },
  { label: "Instagram", href: "https://instagram.com/vickasaaa", icon: "instagram" },
  { label: "WhatsApp", href: "https://wa.me/6285813288426", icon: "whatsapp" },
];
