import { prisma } from "@/lib/prisma";
import Link from "next/link";


export default async function Oyuncular(){


const players = await prisma.user.findMany({

orderBy:{
createdAt:"desc"
}

});



return (

<div className="
min-h-screen
bg-[#070b14]
p-8
text-white
">


<div className="
max-w-6xl
mx-auto
">


<h1 className="
text-4xl
font-black
mb-8
">

Oyuncular

</h1>



<div className="
grid
md:grid-cols-3
gap-6
">



{

players.map((player: any)=>{


<Link

key={player.id}

href={`/oyuncu/${player.steamId}`}

className="
player-card
bg-white/5
border
border-white/10
rounded-3xl
p-6
transition-all
duration-300
hover:scale-105
hover:bg-white/10
"


>



<div className="
flex
items-center
gap-4
">



<img

src={player.avatar || "/logo.png"}

className="
w-20
h-20
rounded-full
object-cover
border
border-white/20
"

/>



<div>


<h2 className="
text-xl
font-black
">

{player.username}

</h2>



<p className="
text-slate-400
">

{player.team || "Takımı Yok"}

</p>


</div>


</div>




<div className="
mt-5
text-sm
text-slate-300
space-y-1
">


<p>
⚽ Gol: {player.goals}
</p>


<p>
🎯 Asist: {player.assists}
</p>


<p>
🧤 Save: {player.saves}
</p>


</div>




</Link>


))


}



</div>



</div>


</div>

);


}