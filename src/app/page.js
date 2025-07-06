"use client";
import { useState } from "react";
import products from "@/data/products";
import Image from 'next/image';

export default function HomePage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "Apakah akun ini resmi?",
      answer:
        "Ya, semua akun berasal dari mitra resmi kami dan dijamin aktif selama masa berlangganan.",
    },
    {
      question: "Berapa lama proses pengiriman akun?",
      answer:
        "Biasanya hanya 5–30 menit setelah pembayaran terkonfirmasi. Kami akan hubungi Anda via WhatsApp.",
    },
    {
      question: "Bagaimana jika akun tidak bisa digunakan?",
      answer:
        "Silakan hubungi kami. Jika login pertama gagal, kami berikan refund atau ganti akun baru.",
    },
    {
      question: "Apakah saya bisa order banyak sekaligus?",
      answer:
        "Tentu saja! Silakan pesan sesuai kebutuhan Anda, dan tuliskan detailnya saat konfirmasi via WhatsApp.",
    },
    {
      question: "Metode pembayaran apa saja yang didukung?",
      answer: "Saat ini hanya mendukung pembayaran via QRIS.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="py-16 text-center"
        style={{ backgroundColor: "#fff5e6" }}
      >
        <h1 className="mb-4 text-4xl font-bold" style={{ color: "#fe9313" }}>
          Selamat Datang di TAVEVE STORE
        </h1>
        <p className="px-16 text-lg text-gray-600">
          tempatnya solusi digital premium untuk kebutuhanmu! Kami menyediakan
          berbagai aplikasi premium populer seperti Netflix, Canva Pro, Viu
          Premium, CapCut Pro, dan masih banyak lagi. Nikmati fitur-fitur
          terbaik, bebas iklan, dan akses tanpa batas untuk hiburan, desain,
          hingga produktivitas. Dapatkan pengalaman digital yang lebih maksimal
          dan efisien bersama TAVEVE STORE sekarang!
        </p>
      </section>

      {/* Produk Section */}
      <section id="products" className="px-4 py-10 bg-gray-50">
        <h2
          className="mb-6 text-2xl font-bold text-center"
          style={{ color: "#fe9313" }}
        >
          Produk Kami
        </h2>
        <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="p-4 bg-white shadow rounded-xl">
              <Image
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-40 rounded"
              />
              <h3 className="mt-2 text-xl font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">
                {product.shortDescription}
              </p>
              <p className="mt-2 font-bold">
                Rp{product.price.toLocaleString()}
              </p>
              <a
                href={`/product/${product.id}`}
                className="inline-block px-4 py-2 mt-3 text-white transition rounded"
                style={{ backgroundColor: "#fe9313" }}
              >
                Lihat Detail
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimoni Section */}
      <section id="testimoni" className="px-4 py-12 text-center bg-white">
        <h2 className="mb-6 text-2xl font-bold" style={{ color: "#fe9313" }}>
          Testimoni Pelanggan
        </h2>
        <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-3">
          <div className="p-4 rounded-lg shadow bg-gray-50">
            <p className="italic text-gray-600">
              "Pelayanan cepat dan terpercaya. Netflix langsung aktif!"
            </p>
            <p className="mt-2 font-semibold">- Rina, Jakarta</p>
          </div>
          <div className="p-4 rounded-lg shadow bg-gray-50">
            <p className="italic text-gray-600">
              "Saya langganan Canva, semua aman dan murah. Rekomen banget!"
            </p>
            <p className="mt-2 font-semibold">- Dodi, Bandung</p>
          </div>
          <div className="p-4 rounded-lg shadow bg-gray-50">
            <p className="italic text-gray-600">
              "TAVEVE STORE terbaik buat jualan akun premium. Proses kilat!"
            </p>
            <p className="mt-2 font-semibold">- Sari, Surabaya</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-4 text-center py-14 bg-gray-50">
        <h2 className="mb-6 text-2xl font-bold" style={{ color: "#fe9313" }}>
          FAQ / Bantuan
        </h2>
        <div className="max-w-4xl mx-auto space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="flex items-center justify-between w-full px-4 py-3 font-semibold text-left text-gray-800"
              >
                {faq.question}
                <span className="text-xl">{openFAQ === index ? "−" : "+"}</span>
              </button>
              {openFAQ === index && (
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 text-center bg-white py-14">
        <h2 className="mb-4 text-2xl font-bold" style={{ color: "#fe9313" }}>
          Hubungi Kami
        </h2>
        <p className="mb-6 text-gray-600">
          Kami aktif di berbagai platform. Klik salah satu tombol berikut:
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/6281232729502"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-lg text-white transition bg-green-600 rounded-full hover:opacity-90"
          >
            WhatsApp
          </a>
          <a
            href="https://instagram.com/tavevestore/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-lg text-white transition bg-pink-500 rounded-full hover:opacity-90"
          >
            Instagram
          </a>
          <a
            href="https://t.me/tavevestore"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-lg text-white transition bg-blue-500 rounded-full hover:opacity-90"
          >
            Telegram
          </a>
        </div>
      </section>
    </div>
  );
}
