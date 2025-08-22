# 🛍️ TAVEVE STORE — Landing Page

Landing page modern untuk toko **penjualan akun & aplikasi digital premium** (Netflix, Canva Pro, Viu, Prime Video, dll) berbasis **Next.js (App Router)**.  
Website ini menampilkan daftar produk, testimoni pelanggan, FAQ, dan tombol kontak cepat ke WhatsApp.  

🔗 Repo GitHub: [sofwanrsd/tavevestore-v1](https://github.com/sofwanrsd/tavevestore-v1)  

---

## ✨ Fitur Utama

- **Landing Page Interaktif**
  - Hero Section (headline & deskripsi brand)
  - Grid Produk (gambar, nama, deskripsi singkat, harga)
  - Halaman Detail Produk `/product/[id]`
- **Testimoni Pelanggan** (statis)
- **FAQ Interaktif** dengan expand/collapse
- **Kontak Cepat**
  - WhatsApp Owner & Admin
  - Instagram
  - Telegram
- **Pembayaran via WhatsApp**  
  Setelah order dipilih, user diarahkan ke WhatsApp untuk konfirmasi pembayaran dan pengiriman akun.  
- **Optimasi Gambar** dengan `next/image`
- **Styling** menggunakan utility classes (mirip Tailwind)

---

## 🧱 Teknologi

- [Next.js 14+](https://nextjs.org/) (App Router)
- React 18
- `next/image` untuk optimasi gambar
- Styling dengan CSS utility (mirip Tailwind, tanpa config tambahan)

---

## 📂 Struktur Folder

```
public/                 # Aset publik (gambar produk, logo, dll)
│── Prime.png
│── YT.png
│── canva.png
│── capcut.jpg
│── netflix.jpg
│── viu.png

src/                    # Source code utama
│
├── app/                # Routing berbasis Next.js (App Router)
│   │── globals.css     # Global styling
│   │── layout.js       # Layout utama (Navbar/Footer)
│   │── page.js         # Halaman landing utama
│   │
│   └── product/[id]/   # Dynamic route untuk detail produk
│       │── page.js
│       │── ProductClient.js
│
├── components/         # Komponen reusable
│   │── Footer.js
│   │── Navbar.js
│
└── data/               # Data statis produk
    │── products.js     # List produk (id, nama, harga, deskripsi, gambar)

.eslintrc.mjs           # Config ESLint
.gitignore              # Ignore file untuk Git
jsconfig.json           # Konfigurasi path alias
next.config.js          # Config Next.js
package.json            # Dependencies & script npm
package-lock.json       # Lockfile npm
postcss.config.mjs      # Config PostCSS
README.md               # Dokumentasi proyek
```

---

## 🛒 Data Produk

Produk di-load dari `src/data/products.js` dengan struktur:

```js
export default [
  {
    id: "netflix-premium",
    name: "Netflix Premium",
    shortDescription: "Akses streaming tanpa iklan.",
    price: 45000,
    image: "/netflix.jpg"
  },
  {
    id: "canva-pro",
    name: "Canva Pro",
    shortDescription: "Desain bebas limit & premium assets.",
    price: 35000,
    image: "/canva.png"
  }
];
```

---

## ▶️ Menjalankan Secara Lokal

1. **Clone repo**
   ```bash
   git clone https://github.com/sofwanrsd/tavevestore-v1.git
   cd tavevestore-v1
   ```

2. **Install dependencies**
   ```bash
   npm install
   # atau
   yarn install
   # atau
   pnpm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```
   Akses di [http://localhost:3000](http://localhost:3000).

---

## 🚀 Build & Deploy

Build untuk produksi:

```bash
npm run build
npm start
```

Bisa dideploy di:
- [Vercel](https://vercel.com/) (disarankan)
- Netlify
- VPS / Server Node.js biasa

---

## 🔗 Alur Order & Pembayaran

1. User memilih produk dari daftar.  
2. Klik tombol **“Lihat Detail”** → diarahkan ke halaman produk `/product/[id]`.  
3. User klik tombol **Order via WhatsApp** → otomatis diarahkan ke WhatsApp Owner/Admin dengan format pesan.  
4. Admin konfirmasi pembayaran dan kirim akun digital.  

---

## 🧩 Komponen Halaman

- **Hero** → judul & deskripsi brand  
- **Products** → daftar produk (dari `products.js`)  
- **Testimonials** → testimoni statis pelanggan  
- **FAQ** → pertanyaan umum dengan toggle  
- **Contact** → tombol ke WhatsApp, Instagram, Telegram  
- **Navbar & Footer** → komponen reusable  

---

## ⚙️ Konfigurasi Link Kontak

Ubah link di section **Contact** sesuai kebutuhan:  
- `https://wa.me/6281232729502` → WhatsApp Owner  
- `https://wa.me/6285722479324` → WhatsApp Admin  
- `https://instagram.com/tavevestore/` → Instagram  
- `https://t.me/tavevestore` → Telegram  

---
