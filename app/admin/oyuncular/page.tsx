import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function OyuncularPage() {
  const players = await prisma.user.findMany({
    orderBy: {
      username: "asc",
    },
  });

  return (
    <div className="min-h-screen bg-[#070b14] text-white p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-black mb-8">
          Oyuncular
        </h1>

        {players.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            Henüz oyuncu bulunmuyor.
          </div>
        ) : (
          <div className="space-y-4">

  {players.map((player: any) => (
              <Link
                key={player.id}
                href={`/admin/oyuncular/${player.steamId}`}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <div className="flex items-center gap-4">

                  <img
                    src={player.avatar || "/logo.png"}
                    alt={player.username}
                    className="w-16 h-16 rounded-full object-cover"
                  />

                  <div>

                    <h2 className="text-2xl font-bold">
                      {player.username}
                    </h2>

                    <p className="text-gray-400">
                      {player.team || "Takımı Yok"}
                    </p>

                  </div>

                </div>

                <div className="rounded-xl bg-blue-600 px-5 py-2 font-bold">
                  Düzenle
                </div>

              </Link>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}