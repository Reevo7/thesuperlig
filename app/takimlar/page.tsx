import { prisma } from "@/lib/prisma";
import TakimListesi from "./TakimListesi.";


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



  const teamNames = [
    "Ronins",
    "Aedern",
    "West Coast",
    "Relentless FC",
    "T1 Global",
    "Quick Boys",
    "Mamak FC",
    "Panthera FC",
    "Falcon Buffet",
    "Zirve FK",
    "Nottingham Hotspur",
    "Inter Milan"
  ];



  const logos: Record<string,string> = {

    "Ronins": "/teams/ronins.png",
    "Aedern": "/teams/aedern.png",
    "West Coast": "/teams/west-coast.png",
    "Relentless FC": "/teams/relentless.png",
    "T1 Global": "/teams/t1.png",
    "Quick Boys": "/teams/QuickBoys.png",
    "Mamak FC": "/teams/mamak.png",
    "Panthera FC": "/teams/panthera.png",
    "Falcon Buffet": "/teams/falcon.png",
    "Zirve FK": "/teams/zirve.png",
    "Nottingham Hotspur": "/teams/nottingham.png",
    "Inter Milan": "/teams/inter.png"

  };



  const teams = teamNames.map((name)=>({

    name,

    logo: logos[name] || "/logo.png",

    players: players.filter(
      player => player.team === name
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