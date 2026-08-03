import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(req: Request) {

  try {

    const { searchParams } = new URL(req.url);

    const steamId = searchParams.get("steamId");


    if (!steamId) {

      return NextResponse.json(
        {
          error: "Steam ID gerekli."
        },
        {
          status: 400
        }
      );

    }


    const player = await prisma.user.findUnique({

      where: {
        steamId: steamId,
      },

    });



    if (!player) {

      return NextResponse.json(
        {
          error: "Oyuncu bulunamadı."
        },
        {
          status: 404
        }
      );

    }



    return NextResponse.json(player);



  } catch (error) {

    console.log("ARAMA HATASI:", error);


    return NextResponse.json(
      {
        error: "Sunucu hatası."
      },
      {
        status: 500
      }
    );

  }

}