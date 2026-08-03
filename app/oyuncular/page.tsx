import { prisma } from "@/lib/prisma";

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

        <div className="space-y-4">

          {players.map((player: any) => (
            <div
              key={player.id}
              className="rounded-2xl bg-white/5 p-6"
            >

              <h2 className="text-2xl font-bold">
                {player.username}
              </h2>

              <p className="text-gray-400">
                {player.team || "Takımı Yok"}
              </p>

              <div className="mt-4 space-y-1">
                <p>⚽ Gol: {player.goals}</p>
                <p>🅰️ Asist: {player.assists}</p>
                <p>🧤 Save: {player.saves}</p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}