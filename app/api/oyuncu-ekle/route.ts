import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req: Request) {


  try {


    const body = await req.json();



    const steamResponse = await fetch(
      `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${process.env.STEAM_API_KEY}&steamids=${body.steamId}`
    );



    const steamData = await steamResponse.json();



    const steamPlayer = steamData.response.players[0];



    if (!steamPlayer) {


      return NextResponse.json(
        {
          error:"Steam oyuncusu bulunamadı."
        },
        {
          status:404
        }
      );


    }





    const player = await prisma.user.create({


      data: {

  steamId: body.steamId,

  username: steamPlayer.personaname,

  avatar: steamPlayer.avatarfull,

  team: body.team || "Takımı Yok",

  // Lig İstatistikleri
  leagueGoals: 0,
  leagueAssists: 0,
  leagueSaves: 0,
  leagueMatches: 0,
  leagueMvp: 0,
  leagueYellowCards: 0,
  leagueRedCards: 0,

  // Genel İstatistikler
  careerGoals: 0,
  careerAssists: 0,
  careerSaves: 0,
  careerMatches: 0,
  careerMvp: 0,
  careerYellowCards: 0,
  careerRedCards: 0,

}

    });





    return NextResponse.json(player);



  } catch(error){



    console.log(
      "OYUNCU EKLE HATASI:",
      error
    );



    return NextResponse.json(

      {

        error:String(error)

      },

      {

        status:500

      }

    );



  }


}