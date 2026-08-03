import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-[#070b14] text-white p-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-black mb-3">
          Admin Paneli
        </h1>

        <p className="text-gray-400 mb-10">
          Strikers Club Yönetim Paneli
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <Link
            href="/admin/oyuncular"
            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition"
          >
            <h2 className="text-3xl font-bold mb-2">
              👥 Oyuncular
            </h2>

            <p className="text-gray-400">
              Oyuncuları görüntüle ve düzenle.
            </p>
          </Link>

          <Link
            href="/admin/oyuncu-ekle"
            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition"
          >
            <h2 className="text-3xl font-bold mb-2">
              ➕ Oyuncu Ekle
            </h2>

            <p className="text-gray-400">
              Yeni oyuncu ekle.
            </p>
          </Link>

        </div>

      </div>
    </div>
  );
}