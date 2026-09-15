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
    "Mahasiswa Teknik Informatika — UI/UX Designer & Front-End Developer",
  photo: "/profile.jpg",
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
    { label: "Proyek Selesai", value: "10+" },
    { label: "Sertifikat", value: "5+" },
    { label: "Tahun Belajar", value: "3+" },
  ],
};

export const skillsData = [
  {
    id: "design",
    title: "Design Tools & Methods",
    description:
      "Perangkat dan metodologi yang digunakan dalam proses riset hingga desain antarmuka.",
    skills: [
      { name: "Figma", icon: "figma", color: "#F24E1E" },
      { name: "Sketch", icon: "sketch", color: "#F7B500" },
      { name: "Miro", icon: "miro", color: "#050038" },
      { name: "Maze", icon: "maze", color: "#FF4F26" },
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
      { name: "HTML5", icon: "html5", color: "#E34F26" },
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
    image: "/projects/ecommerce.png",
    tech: ["Php Native", "Boostrap CSS", "JavaScript"],
    githubUrl: "https://github.com/vickasaaa/Airify",
  },
  {
    id: 2,
    title: "Sales Prediction System",
    description:
      "Dashboard web untuk memvisualisasikan hasil prediksi penjualan, dilengkapi grafik interaktif dan filter data periode.",
    image: "/projects/sales-prediction.png",
    tech: ["Next.js", "Tailwind CSS", "Chart.js"],
    demoUrl: "https://example.com/demo-sales-prediction",
    githubUrl: "https://github.com/muhammadvicky/sales-prediction-system",
  },
  {
    id: 3,
    title: "UI Kit Design - Fintech App",
    description:
      "Rancangan UI Kit lengkap untuk aplikasi fintech, mencakup design system, komponen, dan panduan penggunaan warna & tipografi.",
    image: "/projects/fintech-ui.png",
    tech: ["Figma", "Design System", "UI Kit"],
    demoUrl: "https://www.figma.com/design/8W3aEKs2tIMDktYXj6koTI/Gemastik_UI_UX?node-id=187-1170&t=oNbuMPqhwmTvbnY1-0https://www.figma.com/design/8W3aEKs2tIMDktYXj6koTI/Gemastik_UI_UX?node-id=0-1&m=dev&t=oNbuMPqhwmTvbnY1-1",
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
      "Fokus pada Pengembangan Perangkat Lunak & Interaksi Manusia-Komputer. IPK 3.7/4.00.",
  },
];

export const experienceTimeline = [
  {
    id: "exp-1",
    type: "experience",
    title: "UI/UX Design Intern",
    place: "PT Digital Kreatif Indonesia",
    period: "Jun 2024 — Sep 2024",
    description:
      "Merancang wireframe dan prototype untuk aplikasi mobile banking, serta melakukan usability testing bersama 20+ pengguna.",
  },
  {
    id: "exp-2",
    type: "experience",
    title: "Staff Divisi Desain & Multimedia",
    place: "Himpunan Mahasiswa Teknik Informatika",
    period: "2023 — 2024",
    description:
      "Bertanggung jawab atas kebutuhan desain visual untuk publikasi acara dan media sosial organisasi.",
  },
  {
    id: "exp-3",
    type: "experience",
    title: "Front-End Developer (Freelance)",
    place: "Proyek Independen",
    period: "2023 — Sekarang",
    description:
      "Mengerjakan beberapa proyek website untuk UMKM dan startup lokal menggunakan Next.js dan Tailwind CSS.",
  },
];

export const certificatesData = [
  {
    id: "cert-1",
    title: "Google UI/UX Design Professional Certificate",
    issuer: "Google (Coursera)",
    year: "2024",
    image: "/certificates/google-uiux.png",
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
