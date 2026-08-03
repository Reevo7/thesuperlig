import { prisma } from "../lib/prisma";


async function main() {

  const player = await prisma.user.create({
    data: {
      username: "StrikersTest",
      steamId: "123456789",
      team: "Ronins",

      goals: 15,
      assists: 8,
      saves: 4,
      matches: 12,
      mvp: 3,
    },
  });


  console.log(player);

}


main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });