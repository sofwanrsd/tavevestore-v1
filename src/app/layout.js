import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "TAVEVE STORE",
  description: "Taveve Store – Jual akun premium murah dan bergaransi! Tersedia Netflix, Canva Pro, YouTube Premium, Viu, Prime Video, CapCut dan lainnya. Order mudah via website atau WhatsApp.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
