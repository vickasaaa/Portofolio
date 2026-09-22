import "./globals.css";

export const metadata = {
  title: "Muhammad Vicky — UI/UX Designer & Front-End Developer",
  description:
    "Portofolio Muhammad Vicky, mahasiswa Teknik Informatika, UI/UX Designer & Front-End Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth bg-black">
      <body className="bg-black font-sans antialiased text-zinc-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
