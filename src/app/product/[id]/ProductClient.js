"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProductClient({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  const createMessage = () => {
    const now = new Date();
    const date = now.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    const time = now.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return `
Halo Admin, saya ingin order:

📦 Produk: ${product.name}
📂 Varian: ${selectedVariant.name}
💰 Harga: Rp${selectedVariant.price.toLocaleString()}

🕒 Waktu Pemesanan: ${date}, ${time}

Saya sudah membaca dan menyetujui Syarat & Ketentuan.
Mohon diproses ya kak. Terima kasih!
    `.trim();
  };

  const waLink = `https://wa.me/6285722479324?text=${encodeURIComponent(createMessage())}`;

  return (
    <div className="max-w-3xl px-4 py-10 mx-auto">
      <h1 className="mb-4 text-3xl font-bold" style={{ color: "#fe9313" }}>
        {product.name}
      </h1>

      <div className="mb-4">
        <Image
          src={product.image}
          alt={product.name}
          width={800}
          height={400}
          className="object-cover w-full h-64 rounded"
        />
      </div>

      <p className="mb-6 text-lg text-gray-700">{product.fullDescription}</p>

      {/* Syarat & Ketentuan */}
      <div className="p-4 mb-6 border-l-4 border-orange-400 bg-orange-50 rounded">
        <h2 className="mb-2 font-semibold text-orange-600">Syarat & Ketentuan:</h2>
        <ul className="text-sm text-gray-700 whitespace-pre-line list-disc list-inside">
          {product.terms.split("\n").map((term, index) => (
            <li key={index}>{term}</li>
          ))}
        </ul>
      </div>

      {/* Pilih Varian */}
      {product.variants.length > 1 && (
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-gray-800">Pilih Varian:</label>
          <select
            onChange={(e) =>
              setSelectedVariant(product.variants.find((v) => v.name === e.target.value))
            }
            className="w-full p-2 border rounded-md"
            value={selectedVariant.name}
          >
            {product.variants.map((variant) => (
              <option key={variant.name} value={variant.name}>
                {variant.name} – Rp{variant.price.toLocaleString()}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Tombol WA */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 text-white rounded-md hover:opacity-90 transition"
        style={{ backgroundColor: "#fe9313" }}
      >
        Setuju & Beli Sekarang
      </a>
    </div>
  );
}
