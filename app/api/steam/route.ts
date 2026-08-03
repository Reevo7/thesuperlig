import { NextResponse } from "next/server";

export async function GET(req: Request) {

  const { searchParams } = new URL(req.url);

  const steamId = searchParams.get("steamId");


  if (!steamId) {
    return NextResponse.json(
      { error: "Steam ID gerekli" },
      { status: 400 }
    );
  }


  const response = await fetch(
    `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${process.env.STEAM_API_KEY}&steamids=${steamId}`
  );


  const data = await response.json();


  const player = data.response.players[0];


  if (!player) {
    return NextResponse.json(
      { error: "Steam oyuncusu bulunamadı" },
      { status: 404 }
    );
  }


  return NextResponse.json({

    username: player.personaname,

    avatar: player.avatarfull

  });

}