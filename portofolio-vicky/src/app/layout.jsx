import "./globals.css";

export const metadata = {
  title: "Muhammad Vicky — UI/UX Designer & Front-End Developer",
  description:
    "Portofolio Muhammad Vicky, mahasiswa Teknik Informatika, UI/UX Designer & Front-End Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-white font-sans antialiased text-slate-900">
        {children}
      </body>
    </html>
  );
}
