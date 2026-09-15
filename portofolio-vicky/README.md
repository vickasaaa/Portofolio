# Portofolio — Muhammad Vicky

Website portofolio pribadi (Single Page Scrollable Application) dibangun dengan Next.js (App Router) + Tailwind CSS + Framer Motion + Lucide Icons.

## Cara Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000 di browser.

## Aset yang Perlu Ditambahkan

Letakkan file berikut di dalam folder `public/` (folder `public/projects` dan `public/certificates` sudah disiapkan, tinggal isi gambarnya):

- `public/profile.jpg` — foto profil (disarankan rasio 1:1)
- `public/cv-muhammad-vicky.pdf` — file CV untuk tombol "Unduh CV"
- `public/projects/ecommerce.png`
- `public/projects/sales-prediction.png`
- `public/projects/fintech-ui.png`
- `public/certificates/google-uiux.png`
- `public/certificates/dicoding-frontend.png`
- `public/certificates/dicoding-fundamental.png`
- `public/certificates/dicoding-backend.png`

## Konfigurasi Data

Semua teks, data proyek, timeline, sertifikat, dan link sosial media diatur secara terpusat di:

```
src/data/portfolioData.js
```

Edit file tersebut untuk mengganti nama, nomor WhatsApp, email, link sosial media, dan detail proyek sesuai kebutuhan.

## Form Kontak

Form pada `src/components/Contact.jsx` saat ini masih placeholder (simulasi `setTimeout`). Untuk membuatnya benar-benar mengirim email, sambungkan ke salah satu dari:

- Formspree (https://formspree.io)
- EmailJS (https://www.emailjs.com)
- Next.js API Route + Nodemailer/Resend

## Struktur Proyek

```
src/
├── app/
│   ├── layout.jsx
│   ├── page.jsx
│   └── globals.css
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Timeline.jsx
│   ├── Certificates.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
└── data/
    └── portfolioData.js
```
