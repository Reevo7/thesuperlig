import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const player = await prisma.user.update({
      where: {
        steamId: body.steamId,
      },
      data: {
        team: body.team,

        leagueMatches: Number(body.leagueMatches),
        leagueGoals: Number(body.leagueGoals),
        leagueAssists: Number(body.leagueAssists),
        leagueSaves: Number(body.leagueSaves),
        leagueMvp: Number(body.leagueMvp),
        leagueYellowCards: Number(body.leagueYellowCards),
        leagueRedCards: Number(body.leagueRedCards),
      },
    });

    return NextResponse.json(player);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Güncelleme başarısız.",
      },
      {
        status: 500,
      }
    );
  }
}