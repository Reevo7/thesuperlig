import { prisma } from "@/lib/prisma";

export default async function OyuncuProfil({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const player = await prisma.user.findUnique({
    where: {
      steamId: id,
    },
  });

  if (!player) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        Oyuncu bulunamadı.
      </div>
    );
  }

  const teamLogos: Record<string, string> = {
    "West Coast": "/teams/west-coast.png",
    "Ronins": "/teams/ronins.png",
    "Relentless FC": "/teams/relentless.png",
    "Aedern": "/teams/aedern.png",
    "Real Sociedad": "/teams/real-sociedad.png",
    "Quick Boys": "/teams/QuickBoys.png",
    "Mamak FC": "/teams/mamak.png",
    "Panthera FC": "/teams/panthera.png",
    "Falcon Buffet": "/teams/falcon.png",
    "Zirve FK": "/teams/zirve.png",
    "Nottingham Hotspur": "/teams/nottingham.png",
    "İnternazionale Milano": "/teams/internazionalemilan.png",
  };

  const teamLogo =
    teamLogos[player.team || ""] || "/logo.png";

  const rating = Math.min(
    99,
    Math.max(
      60,
      Math.round(
        60 +
          player.leagueGoals * 2 +
          player.leagueAssists * 1.5 +
          player.leagueMvp * 3 +
          player.leagueSaves * 1.5 +
          player.leagueMatches * 0.3
      )
    )
  );

  return (
    <div className="min-h-screen bg-[#05070d] py-12 px-6">

  <div className="mx-auto w-[430px] rounded-[32px] border border-yellow-500/30 bg-gradient-to-br from-[#09111f] via-[#101010] to-[#211806] p-8 shadow-[0_0_45px_rgba(255,200,0,.18)]">

    <div className="flex justify-between items-start">

      <div>

        <h1 className="text-7xl font-black leading-none text-yellow-400">
          {rating}
        </h1>

        <div className="mt-3 text-4xl">
          🇹🇷
        </div>

      </div>

      <div className="text-5xl font-black tracking-widest">
        ST
      </div>

    </div>

    <div className="mt-8 flex flex-col items-center">

      <img
        src={player.avatar || "/logo.png"}
        alt={player.username}
        className="w-40 h-40 rounded-full border-4 border-yellow-500/40 object-cover shadow-2xl"
      />

      <h1 className="mt-6 text-4xl font-black text-white text-center">
        {player.username}
      </h1>

      <p className="mt-2 text-sm text-zinc-400">
        {player.steamId}
      </p>

      <img
        src={teamLogo}
        alt={player.team || "Takımı Yok"}
        className="w-20 h-20 mt-6 object-contain"
      />

      <h2 className="mt-2 text-xl font-bold text-white">
        {player.team || "Takımı Yok"}
      </h2>

    </div>

    <div className="mt-10 border-t border-white/10 pt-6">
          <div className="grid grid-cols-2 gap-y-5 gap-x-8 text-lg">

        <div className="flex justify-between">
          <span>⚡ PAC</span>
          <span className="font-black">
            {Math.min(99, 60 + player.leagueMatches)}
          </span>
        </div>

        <div className="flex justify-between">
          <span>🎯 SHO</span>
          <span className="font-black">
            {Math.min(99, 60 + player.leagueGoals * 3)}
          </span>
        </div>

        <div className="flex justify-between">
          <span>🎮 PAS</span>
          <span className="font-black">
            {Math.min(99, 60 + player.leagueAssists * 3)}
          </span>
        </div>

        <div className="flex justify-between">
          <span>✨ DRI</span>
          <span className="font-black">
            {Math.min(
              99,
              60 +
                player.leagueGoals +
                player.leagueAssists
            )}
          </span>
        </div>

        <div className="flex justify-between">
          <span>🛡️ DEF</span>
          <span className="font-black">
            {Math.min(99, 60 + player.leagueSaves * 2)}
          </span>
        </div>

        <div className="flex justify-between">
          <span>💪 PHY</span>
          <span className="font-black">
            {Math.min(99, 60 + player.leagueMvp * 4)}
          </span>
        </div>

      </div>

    </div>

  </div>

  <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div className="card p-6">

      <h2 className="text-2xl font-black mb-5">
        🏆 Lig İstatistikleri
      </h2>

      <div className="space-y-3 text-lg">

        <div className="flex justify-between">
          <span>Maç</span>
          <span>{player.leagueMatches}</span>
        </div>

        <div className="flex justify-between">
          <span>Gol</span>
          <span>{player.leagueGoals}</span>
        </div>

        <div className="flex justify-between">
          <span>Asist</span>
          <span>{player.leagueAssists}</span>
        </div>

        <div className="flex justify-between">
          <span>Save</span>
          <span>{player.leagueSaves}</span>
        </div>

        <div className="flex justify-between">
          <span>MVP</span>
          <span>{player.leagueMvp}</span>
        </div>

        <div className="flex justify-between">
          <span>Sarı Kart</span>
          <span>{player.leagueYellowCards}</span>
        </div>

        <div className="flex justify-between">
          <span>Kırmızı Kart</span>
          <span>{player.leagueRedCards}</span>
        </div>

      </div>

    </div>

    <div className="card p-6">

      <h2 className="text-2xl font-black mb-5">
        🌍 Kariyer İstatistikleri
      </h2>

      <div className="space-y-3 text-lg">

        <div className="flex justify-between">
          <span>Toplam Maç</span>
          <span>{player.careerMatches}</span>
        </div>

        <div className="flex justify-between">
          <span>Toplam Gol</span>
          <span>{player.careerGoals}</span>
        </div>

        <div className="flex justify-between">
          <span>Toplam Asist</span>
          <span>{player.careerAssists}</span>
        </div>

        <div className="flex justify-between">
          <span>Toplam Save</span>
          <span>{player.careerSaves}</span>
        </div>

        <div className="flex justify-between">
          <span>Toplam MVP</span>
          <span>{player.careerMvp}</span>
        </div>

        <div className="flex justify-between">
          <span>Toplam Sarı Kart</span>
          <span>{player.careerYellowCards}</span>
        </div>

        <div className="flex justify-between">
          <span>Toplam Kırmızı Kart</span>
          <span>{player.careerRedCards}</span>
        </div>

      </div>

    </div>

  </div>

</div>

  );
}