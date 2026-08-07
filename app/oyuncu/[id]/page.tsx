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
      <div className="flex min-h-screen items-center justify-center text-white">
        Oyuncu bulunamadı.
      </div>
    );
  }

  const teamLogos: Record<string, string> = {
    "West Coast": "/teams/west-coast.png",
    Ronins: "/teams/ronins.png",
    "Relentless FC": "/teams/relentless.png",
    Aedern: "/teams/aedern.png",
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
    <div className="min-h-screen bg-[#05070d] py-10 px-8">

  <div className="mx-auto flex max-w-7xl items-start gap-10">

    {/* PLAYER CARD */}

    <div className="w-[430px] rounded-[30px] border border-yellow-500/30 bg-gradient-to-br from-[#08111f] via-[#101010] to-[#211806] p-8 shadow-[0_0_45px_rgba(255,200,0,.18)]">

      <div className="flex justify-between items-start">

        <div>

          <h1 className="text-7xl font-black leading-none text-white">
            {rating}
          </h1>

          <div className="mt-2 text-4xl">
            ST
          </div>

        </div>

      </div>

      <div className="mt-8 flex flex-col items-center">

        <img
          src={player.avatar || "/logo.png"}
          alt={player.username}
          className="w-44 h-44 rounded-full border-4 border-yellow-500/30 object-cover shadow-2xl"
        />

        <h1 className="mt-6 text-4xl font-black text-white text-center">
          {player.username}
        </h1>

    
        <div className="mt-4 mb-4 flex items-center justify-center gap-2">

  <img
    src={teamLogo}
    alt={player.team || ""}
    className="w-7 h-7 object-contain"
  />

  <img
    src="/flags/tr.png"
    alt="Türkiye"
    className="w-6 h-4 rounded-sm object-cover"
  />

</div>
      </div>

      <div className="mt-auto border-t border-white/10 pt-6">

        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-lg">
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

    {/* SAĞ TARAF */}

    <div className="flex-1 space-y-6 pt-1">
            <div className="rounded-3xl border border-white/10 bg-[#10131b] p-6">

        <h2 className="mb-6 text-2xl font-black">
          🏆 Lig İstatistikleri
        </h2>

        <div className="space-y-3">

          <div className="flex justify-between"><span>Maç</span><span>{player.leagueMatches}</span></div>
          <div className="flex justify-between"><span>Gol</span><span>{player.leagueGoals}</span></div>
          <div className="flex justify-between"><span>Asist</span><span>{player.leagueAssists}</span></div>
          <div className="flex justify-between"><span>Save</span><span>{player.leagueSaves}</span></div>
          <div className="flex justify-between"><span>MVP</span><span>{player.leagueMvp}</span></div>
          <div className="flex justify-between"><span>Sarı Kart</span><span>{player.leagueYellowCards}</span></div>
          <div className="flex justify-between"><span>Kırmızı Kart</span><span>{player.leagueRedCards}</span></div>

        </div>

      </div>

      <div className="rounded-3xl border border-white/10 bg-[#10131b] p-6">

        <h2 className="mb-6 text-2xl font-black">
          🌍 Kariyer İstatistikleri
        </h2>

        <div className="space-y-3">

          <div className="flex justify-between"><span>Toplam Maç</span><span>{player.careerMatches}</span></div>
          <div className="flex justify-between"><span>Toplam Gol</span><span>{player.careerGoals}</span></div>
          <div className="flex justify-between"><span>Toplam Asist</span><span>{player.careerAssists}</span></div>
          <div className="flex justify-between"><span>Toplam Save</span><span>{player.careerSaves}</span></div>
          <div className="flex justify-between"><span>Toplam MVP</span><span>{player.careerMvp}</span></div>
          <div className="flex justify-between"><span>Toplam Sarı Kart</span><span>{player.careerYellowCards}</span></div>
          <div className="flex justify-between"><span>Toplam Kırmızı Kart</span><span>{player.careerRedCards}</span></div>

        </div>

      </div>

    </div>

  </div>

</div>

  );
}