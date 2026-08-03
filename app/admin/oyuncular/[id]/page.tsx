import { prisma } from "@/lib/prisma";
import EditPlayerForm from "@/app/components/EditPlayerForm";

export default async function OyuncuDuzenle({
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
      <div className="min-h-screen bg-[#070b14] flex items-center justify-center text-white text-2xl">
        Oyuncu bulunamadı.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070b14] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

          <div className="flex items-center gap-6 mb-10">
            <img
              src={player.avatar || "/logo.png"}
              className="w-28 h-28 rounded-full object-cover"
            />

            <div>
              <h1 className="text-4xl font-black">
                {player.username}
              </h1>

              <p className="text-white/50 mt-2">
                {player.steamId}
              </p>
            </div>
          </div>

          <EditPlayerForm player={player} />

        </div>
      </div>
    </div>
  );
}