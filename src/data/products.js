const products = [
  {
    id: "netflix-1",
    name: "Netflix Premium",
    shortDescription:
      "Netflix Premium 1 Profil untuk 1 User, akses aman dengan PIN selama 1 bulan",
    fullDescription:
      "Paket 1P1U adalah paket Netflix Premium yang berlaku selama satu bulan. Paket ini berbagi dengan pengguna lain, namun akses ke profil kamu dilindungi dengan PIN. Dengan 1 Profil, kamu hanya bisa menonton Netflix di satu perangkat saja. Kamu akan mendapatkan akun dan password Netflix, serta satu nama profil yang dilengkapi PIN untuk masuk (sign in).",
    terms:
      "Dilarang ubah email dan password\n1 Profil =  1 Device\nDilarang Otak Atik\nDilarang Menggunakan VPN\nDilarang Masuk Profil Lain\nDilarang Pindah-Pindah Device\nBebas Edit Profil dan PIN\nGaransi FIX 1x24 jam\n25-30 hari = 1 bulan",
    price: 30000,
    image: "/netflix.jpg",
    variants: [{ name: "1P1U", price: 30000 }],
  },
  {
    id: "canva-1",
    name: "Canva Pro",
    shortDescription:
      "Mulai Rp 4.000, dapatkan Canva Pro! Desain pro, harga ekonomis.",
    fullDescription:
      "Dengan Canva Pro mulai dari Rp 4.000, Anda dapat mengakses jutaan aset premium (foto, video, grafis), hapus latar belakang instan, Magic Resize untuk berbagai format, serta brand kit lengkap. Fitur kolaborasi tim juga tersedia. Semua ini memudahkan Anda membuat desain profesional, cepat, efektif, dan tentunya sangat ekonomis.",
    terms: "1. butuh email pembeli\n2. bergaransi",
    price: 4000,
    image: "/canva.png",
    variants: [
      { name: "1 Bulan (Via Invite)", price: 4000 },
      { name: "1 Tahun (Garansi 6 Bulan)", price: 14000 },
      { name: "Lifetime (Garansi 6 Bulan)", price: 20000 },
      { name: "Lifetime (Garansi 1 Tahun)", price: 25000 },
    ],
  },
  {
    id: "viu-1",
    name: "Viu Premium",
    shortDescription:
      "Upgrade ke Viu Premium dan tonton tayangan pilihanmu tanpa batas! Streaming lancar, kualitas HD, dan ribuan jam hiburan menantimu.",
    fullDescription:
      "Dengan Viu Premium, Anda bisa menikmati seluruh konten Viu tanpa gangguan iklan. Nikmati kualitas HD, unduhan tak terbatas untuk tontonan offline, dan akses cepat ke episode terbaru dari drama Korea, anime, serta berbagai film dan acara Asia favorit Anda. Semua ini demi pengalaman streaming yang lancar dan memuaskan, kapan pun dan di mana pun.",
    terms: "1. Akun Dari Seller\n2. Garansi 6 Bulan",
    price: 5000,
    image: "/viu.png",
    variants: [{ name: "1 Tahun", price: 5000 }],
  },
  {
    id: "capcut-1",
    name: "CapCut Pro",
    shortDescription:
      "Upgrade ke CapCut Pro sekarang! Editor video powerful di genggamanmu, dengan semua fitur premium untuk kreasi tanpa batas.",
    fullDescription:
      "Upgrade ke CapCut Pro dan nikmati fitur premium, efek eksklusif, serta aset tak terbatas. Video kamu jadi lebih profesional dan tanpa watermark, semua dari genggamanmu. Edit cepat, hasil memukau!",
    terms:
      "Tidak Menerima Komplain Limit Login Setelah Berhasil Login\n25-28 Hari = 1 Bulan",
    price: 6000,
    image: "/capcut.jpg",
    variants: [
      { name: "7 hari", price: 6000 },
      { name: "1 Bulan", price: 12000 },
    ],
  },
  {
    id: "primevideo-1",
    name: "Prime Video",
    shortDescription:
      "Nonton film, serial, dan tayangan eksklusif Prime Video. Kualitas tinggi, tanpa iklan.",
    fullDescription:
      "Dengan Prime Video, nikmati akses ke ribuan film blockbuster, serial TV populer, dan Prime Video Originals eksklusif. Semua dalam kualitas tinggi dan bebas iklan. Unduh untuk tonton offline. Hiburan premium lengkap ada di tangan Anda.",
    terms:
      "Tidak Menerima Komplain Limit Login Setelah Berhasil Login\n25-28 Hari = 1 Bulan\nGaransi Backfree ya Bukan Non-Aktif",
    price: 12000,
    image: "/Prime.png",
    variants: [{ name: "1 Bulan", price: 12000 }],
  },
  {
    id: "yt-1",
    name: "YouTube Premium",
    shortDescription:
      "Bebas iklan, putar offline, plus YouTube Music. Dapatkan YouTube Premium sekarang!",
    fullDescription:
      "Dapatkan YouTube Premium untuk pengalaman menonton yang tak tertandingi. Nikmati video bebas iklan, putar di latar belakang saat Anda membuka aplikasi lain atau layar terkunci, dan unduh video favorit untuk tontonan offline. Termasuk juga akses penuh ke YouTube Music Premium. Rasakan YouTube yang lebih nyaman dan tanpa batas.",
    terms:
      "Tidak Menerima Komplain Limit Login Setelah Berhasil Login\n25-28 Hari = 1 Bulan\nGaransi Backfree ya Bukan Non-Aktif",
    price: 5000,
    image: "/YT.png",
    variants: [
      { name: "Member Family Plan 1 Bulan", price: 5000 },
      { name: "Head Family Plan 1 Bulan", price: 8000 },
      { name: "Individual Plan 1 Bulan", price: 10000 },
      { name: "Mix Plan 3 Bulan", price: 23000 },
    ],
  },
];

export default products;
