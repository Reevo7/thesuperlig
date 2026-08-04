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
      <div className="min-h-screen bg-[#0a0a0a] p-10 text-white">
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
  "Inter Milan": "/teams/internazionalemilan.png",
};

const teamLogo = teamLogos[player.team || ""] || "/logo.png";

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-8 text-white">
      <div className="max-w-5xl mx-auto">

        <div className="card p-8">

          <div className="flex items-center gap-6">

            <img
              src={player.avatar || "/logo.png"}
              className="w-32 h-32 rounded-full border border-[#303030] object-cover"
              alt={player.username}
            />

            <div>
              <h1 className="text-4xl font-black">
                {player.username}
              </h1>

              <p className="text-zinc-400 mt-2">
                Steam ID: {player.steamId}
              </p>
            </div>

          </div>

          <div className="mt-8 flex items-center gap-4 card p-5">

            <img
              src={teamLogo}
              alt={player.team || "Takımı Yok"}
              className="w-16 h-16 object-contain"
            />

            <div>

              <p className="text-zinc-400">
                Takım
              </p>

              <h2 className="text-2xl font-bold">
                {player.team || "Takımı Yok"}
              </h2>

            </div>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="card p-6">

            <h2 className="text-2xl font-black mb-5">
              🏆 Lig İstatistikleri
            </h2>

            <div className="space-y-3">
              <p>Maç: {player.leagueMatches}</p>
              <p>Gol: {player.leagueGoals}</p>
              <p>Asist: {player.leagueAssists}</p>
              <p>Save: {player.leagueSaves}</p>
              <p>MVP: {player.leagueMvp}</p>
              <p>Sarı Kart: {player.leagueYellowCards}</p>
              <p>Kırmızı Kart: {player.leagueRedCards}</p>
            </div>

          </div>

          <div className="card p-6">

            <h2 className="text-2xl font-black mb-5">
              🌍 Genel İstatistikler
            </h2>

            <div className="space-y-3">
              <p>Toplam Maç: {player.careerMatches}</p>
              <p>Toplam Gol: {player.careerGoals}</p>
              <p>Toplam Asist: {player.careerAssists}</p>
              <p>Toplam Save: {player.careerSaves}</p>
              <p>Toplam MVP: {player.careerMvp}</p>
              <p>Toplam Sarı Kart: {player.careerYellowCards}</p>
              <p>Toplam Kırmızı Kart: {player.careerRedCards}</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}