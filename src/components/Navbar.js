import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="flex items-center justify-between max-w-6xl px-4 py-3 mx-auto">
        <Link
          href="/"
          className="text-xl font-bold"
          style={{ color: "#fe9313" }}
        >
          TAVEVE STORE
        </Link>
        <div className="space-x-4">
          <a href="#products" className="text-gray-700 hover:text-orange-500">
            Produk
          </a>
          <a href="#testimoni" className="text-gray-700 hover:text-orange-500">
            Testimoni
          </a>
          <a href="#faq" className="text-gray-700 hover:text-orange-500">
            FAQ
          </a>
          <a href="#contact" className="text-gray-700 hover:text-orange-500">
            Kontak
          </a>
        </div>
      </div>
    </nav>
  );
}
