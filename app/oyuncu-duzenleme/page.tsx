import { prisma } from "@/lib/prisma";
import PlayerEditList from "../components/PlayerEditList";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export default async function OyuncuDuzenleme() {


  const cookieStore = await cookies();

  const steamId = cookieStore.get("steamId")?.value;


  const ownerSteamId = "76561198756091730";


  if(steamId !== ownerSteamId){

    redirect("/");

  }



  const players = await prisma.user.findMany({

    orderBy:{
      username:"asc"
    }

  });



  return (

    <div className="
    p-8
    pt-14
    text-white
    ">


      <h1
      className="
      text-4xl
      font-black
      mb-8
      "
      >
        🔒 Oyuncu Düzenleme
      </h1>



      <PlayerEditList
        players={players}
      />



    </div>

  );

}