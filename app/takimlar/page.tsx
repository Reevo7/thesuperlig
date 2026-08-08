import { prisma } from "@/lib/prisma";
import TakimListesi from "./TakimListesi.";

export const dynamic = "force-dynamic";

export default async function Takimlar() {


  const players = await prisma.user.findMany({
    where: {
      team: {
        not: null
      }
    },
    orderBy: {
      username: "asc"
    }
  });

console.log("PLAYERS:", JSON.stringify(players, null, 2));

  const teamNames = [
    "Ronins",
    "Aedern",
    "West Coast",
    "Relentless FC",
   "Real Sociedad",
    "Quick Boys",
    "Mamak FC",
    "Panthera FC",
    "Falcon Buffet",
    "Floria",
    "Nottingham Hotspur",
    "İnternazionale Milano"
  ];



  const logos: Record<string,string> = {

    "Ronins": "/teams/ronins.png",
    "Aedern": "/teams/aedern.png",
    "West Coast": "/teams/west-coast.png",
    "Relentless FC": "/teams/relentless.png",
    "Real Sociedad": "/teams/real-sociedad.png",
    "Quick Boys": "/teams/QuickBoys.png",
    "Mamak FC": "/teams/mamak.png",
    "Panthera FC": "/teams/panthera.png",
    "Falcon Buffet": "/teams/falcon.png",
    "Floria": "/teams/floria.png",
    "Nottingham Hotspur": "/teams/nottingham.png",
    "İnternazionale Milano": "/teams/inter.png"

  };



 const teams = Object.keys(logos).map((name) => ({
    name,
    logo: logos[name] || "/logo.png",

    players: players.filter(
      (player: any) => player.team === name
    )
}));



  return (

    <div className="p-8 pt-14">


      <h1 className="
      text-4xl
      font-black
      text-white
      mb-8
      ">
        Takımlar
      </h1>



      <TakimListesi teams={teams} />


    </div>

  );
}