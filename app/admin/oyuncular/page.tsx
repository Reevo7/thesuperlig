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
    href={`/oyuncu/${player.id}`}
    className="
      block
      rounded-2xl
      bg-white/5
      p-6
      hover:bg-white/10
    "
  >

    <h2 className="text-xl font-black">
      {player.username}
    </h2>

    <p className="text-slate-400">
      {player.team || "Takımı Yok"}
    </p>

    <div className="mt-5 text-sm text-slate-300 space-y-1">

      <p>⚽ Gol: {player.goals}</p>

      <p>🅰️ Asist: {player.assists}</p>

      <p>🧤 Save: {player.saves}</p>

    </div>

  </Link>
))}

          </div>
        )}

      </div>
    </div>
  );
}