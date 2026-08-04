import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  const { searchParams } = new URL(req.url);

  const claimedId = searchParams.get("openid.claimed_id");

  if (!claimedId) {
    return NextResponse.redirect(baseUrl);
  }

  const steamId = claimedId.split("/").pop();

  const steamResponse = await fetch(
    `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${process.env.STEAM_API_KEY}&steamids=${steamId}`
  );

  const steamData = await steamResponse.json();

  const player = steamData.response.players[0];

  if (!player) {
    return NextResponse.redirect(baseUrl);
  }

  await prisma.user.upsert({
    where: {
      steamId: steamId!,
    },

    update: {
      username: player.personaname,
      avatar: player.avatarfull,
    },

    create: {
      steamId: steamId!,

      username: player.personaname,

      avatar: player.avatarfull,

      team: null,

      leagueGoals: 0,
      leagueAssists: 0,
      leagueSaves: 0,
      leagueMatches: 0,
      leagueMvp: 0,
      leagueYellowCards: 0,
      leagueRedCards: 0,

      careerGoals: 0,
      careerAssists: 0,
      careerSaves: 0,
      careerMatches: 0,
      careerMvp: 0,
      careerYellowCards: 0,
      careerRedCards: 0,
    },
  });

  const response = NextResponse.redirect(baseUrl);

  response.cookies.set("steamId", steamId!, {
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });

  response.cookies.set("steamName", player.personaname, {
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });

  response.cookies.set("steamAvatar", player.avatarfull, {
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });

  return response;
}