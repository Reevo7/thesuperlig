import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function OyuncularPage() {
  const players = await prisma.user.findMany({
    orderBy: {
      username: "asc",
    },
  });

console.log(players);

  return (
    <div className="min-h-screen bg-[#070b14] text-white p-8">
      <div className="max-w-[1800px] mx-auto">

        <h1 className="text-4xl font-black mb-8">
          Oyuncular
        </h1>

        <div className="grid grid-cols-7 gap-4">

          {players.map((player: any, index: number) => (
            <div
  key={player.id}
  className="
    animate-[slideDown_.5s_ease_forwards]
    rounded-2xl
    bg-white/5
    p-4
    hover:bg-white/10
    transition
    border
    border-white/10
    opacity-0
  "
  style={{
    animationDelay: `${index * 0.08}s`,
  }}
>
              <div className="flex flex-col items-center">

               <img
  src={player.avatar || "/logo.png"}
  alt={player.username}
  className="w-20 h-20 rounded-full border-2 border-white object-cover"
/>

                <h2 className="text-lg font-bold mt-3 text-center">
                  {player.username}
                </h2>

                <p className="text-sm text-gray-400 text-center">
  {player.team || "Takımı Yok"}
</p>

                <div className="mt-4 w-full text-sm space-y-1">
  <p>⚽ Gol: {player.leagueGoals}</p>
  <p>🅰️ Asist: {player.leagueAssists}</p>
  <p>🧤 Save: {player.leagueSaves}</p>
</div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}