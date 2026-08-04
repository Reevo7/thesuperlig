import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function Istatistikler() {


  const players = await prisma.user.findMany({
    orderBy:{
      leagueGoals:"desc"
    }
  });

console.log("İSTATİSTİKLER:", players.length);
console.log(players.map((p) => p.username));

  const golKralligi = [...players]
    .sort((a,b)=>b.leagueGoals - a.leagueGoals)
    .slice(0,10);


  const asistKralligi = [...players]
    .sort((a,b)=>b.leagueAssists - a.leagueAssists)
    .slice(0,10);


  const saveKralligi = [...players]
    .sort((a,b)=>b.leagueSaves - a.leagueSaves)
    .slice(0,10);



  return (

    <div className="p-8 text-white">


      <h1 className="
      text-4xl
      font-black
      mb-10
      ">
        📊 İstatistikler
      </h1>



      <div className="
      grid
      md:grid-cols-3
      gap-6
      ">



        <StatCard
        title="⚽ Gol Krallığı"
        players={golKralligi}
        type="gol"
        />


        <StatCard
        title="🎯 Asist Krallığı"
        players={asistKralligi}
        type="asist"
        />


        <StatCard
        title="🧤 Save Krallığı"
        players={saveKralligi}
        type="save"
        />


      </div>


    </div>

  );

}




function StatCard({
  title,
  players,
  type
}:any){


return (

<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-6
">


<h2 className="
text-2xl
font-black
mb-6
">
{title}
</h2>



<div className="space-y-4">


{
Array.from({length:10},(_,index)=>{

const player = players[index];


return (

<div
key={index}
className="
flex
items-center
justify-between
bg-black/20
rounded-xl
p-3
"
>


<div className="
flex
items-center
gap-3
">


<span className="
font-black
text-blue-400
">
{index+1}
</span>



{
player ? (

<>

<img
src={player.avatar || "/logo.png"}
className="
w-10
h-10
rounded-full
"
/>


<span className="font-bold">
{player.username}
</span>

</>


) : (

<span className="
font-bold
text-white/30
">
-
</span>

)

}



</div>



<span className="
font-black
">

{
player
?
(
type==="gol"
?
player.leagueGoals+" Gol"
:
type==="asist"
?
player.leagueAssists+" Asist"
:
player.leagueSaves+" Save"
)
:
"-"
}

</span>


</div>

)

})
}


</div>


</div>

)

}