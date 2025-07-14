"use client";

import { useSearchParams } from "next/navigation";
import products from "@/data/products";

export default function CartPage() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("product");
  const variantIndex = parseInt(searchParams.get("variant")) || 0;

  const product = products.find((p) => p.id === productId);
  const variant = product?.variants?.[variantIndex];

  if (!product || !variant) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Keranjang Kosong</h1>
        <p className="text-gray-600">Silakan pilih produk terlebih dahulu.</p>
      </div>
    );
  }

  // Format tanggal (tanpa jam)
  const now = new Date();
  const tanggal = now.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const message = `
Halo Admin TAVEVE STORE! Saya ingin melakukan pemesanan berikut:

🗓️ Tanggal: ${tanggal}

📄 Detail Pesanan:
- Produk: ${product.name}
- Varian: ${variant.name}
- Harga: Rp${variant.price.toLocaleString()}

Saya akan melakukan pembayaran melalui QRIS yang tersedia di Profil > Katalog.

Setelah ini saya akan kirim bukti pembayaran ya. Terima kasih 🙏
  `.trim();

  const encodedMessage = encodeURIComponent(message);
  const whatsappNumber = "6281232729502";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <div className="max-w-xl mx-auto px-4 py-20">
      <h1 className="text-2xl font-bold mb-4">Konfirmasi Pesanan</h1>
      <div className="bg-white shadow rounded p-4 mb-6">
        <p className="text-gray-700 mb-2">🗓️ <b>{tanggal}</b></p>
        <p className="text-gray-700 mb-1">📄 <b>{product.name}</b></p>
        <p className="text-gray-700 mb-1">📦 Varian: {variant.name}</p>
        <p className="text-gray-700 mb-1">💰 Harga: Rp{variant.price.toLocaleString()}</p>
      </div>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-semibold transition"
      >
        Kirim ke WhatsApp
      </a>
    </div>
  );
}
