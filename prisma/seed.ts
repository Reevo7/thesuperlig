import { prisma } from "../lib/prisma";


async function main() {


  await prisma.match.createMany({

    data:[

      // 1. Hafta

      {
        week:1,
        homeTeam:"Quick Boys",
        awayTeam:"Floria",
        homeScore:3,
        awayScore:1,
        played:true
      },

      {
        week:1,
        homeTeam:"Nottingham Hotspur",
        awayTeam:"Panthera FC",
        homeScore:6,
        awayScore:0,
        played:true
      },

      {
        week:1,
        homeTeam:"İnternazionale Milano",
        awayTeam:"Falcon Buffet",
        homeScore:3,
        awayScore:0,
        played:true
      },


      {
        week:1,
        homeTeam:"Ronins",
        awayTeam:"Real Sociedad",
        homeScore:2,
        awayScore:0,
        played:true
      },


      {
        week:1,
        homeTeam:"Mamak FC",
        awayTeam:"Aedern",
        homeScore:1,
        awayScore:8,
        played:true
      },


      {
        week:1,
        homeTeam:"Relentless FC",
        awayTeam:"West Coast",
        homeScore:1,
        awayScore:2,
        played:true
      },


    ]

  });



  console.log("Maçlar eklendi");

}



main()

.catch((e)=>{

console.error(e);

})

.finally(async()=>{

await prisma.$disconnect();

});