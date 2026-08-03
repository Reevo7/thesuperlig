"use client";

import { useState } from "react";

export default function Fikstur() {

const [week,setWeek] = useState(1);

const weeks = Array.from({length:22},(_,i)=>i+1);


const getLogo = (team:string)=>{

const logos:any={

"Quick Boys":"/teams/QuickBoys.png",
"Zirve FK":"/teams/zirve.png",
"Nottingham Hotspur":"/teams/nottingham.png",
"Panthera FC":"/teams/panthera.png",
"İnternazionale Milano":"/teams/inter.png",
"Falcon Buffet":"/teams/falcon.png",
"Ronins":"/teams/ronins.png",
"T1 Global":"/teams/t1.png",
"Mamak FC":"/teams/mamak.png",
"Aedern":"/teams/aedern.png",
"Relentless FC":"/teams/relentless.png",
"West Coast":"/teams/west-coast.png"

};

return logos[team] || "/logo.png";

};



const week1 = {

matches:[

["Quick Boys","3 - 1","Zirve FK"],
["Nottingham Hotspur","6 - 0","Panthera FC"],
["İnternazionale Milano","3 - 0","Falcon Buffet"],
["Ronins","2 - 0","T1 Global"],
["Mamak FC","1 - 8","Aedern"],
["Relentless FC","1 - 2","West Coast"]

]

};

const week2 = {

matches:[

["Nottingham Hotspur","7 - 4","Ronins"],
["Mamak FC","0 - 9","İnternazionale Milano"],
["Relentless FC","5 - 0","Zirve FK"],
["West Coast","3 - 0","Panthera FC"],
["Aedern","3 - 0","Quick Boys"],
["T1 Global","0 - 3","Falcon Buffet"]

]

};

const week3 = {

matches:[

["Relentless FC","","Ronins"],
["West Coast","","İnternazionale Milano"],
["Aedern","","Zirve FK"],
["T1 Global","","Panthera FC"],
["Nottingham Hotspur","","Mamak FC"],
["Falcon Buffet","","Quick Boys"]

]

};

const week4 = {

matches:[

["Aedern","","Relentless FC"],
["T1 Global","","Mamak FC"],
["Nottingham Hotspur","","West Coast"],
["Falcon Buffet","","Ronins"],
["Quick Boys","","İnternazionale Milano"],
["Panthera FC","","Zirve FK"]

]

};

const week5 = {

matches:[

["Quick Boys","","T1 Global"],
["Nottingham Hotspur","","Falcon Buffet"],
["Panthera FC","","Aedern"],
["Zirve FK","","West Coast"],
["İnternazionale Milano","","Relentless FC"],
["Ronins","","Mamak FC"]

]

};

const week6 = {

matches:[

["İnternazionale Milano","","Panthera FC"],
["Nottingham Hotspur","","Zirve FK"],
["Ronins","","Quick Boys"],
["Mamak FC","","Falcon Buffet"],
["Relentless FC","","T1 Global"],
["West Coast","","Aedern"]

]

};

const week7 = {

matches:[

["Nottingham Hotspur","","İnternazionale Milano"],
["Ronins","","Zirve FK"],
["Mamak FC","","Panthera FC"],
["Relentless FC","","Quick Boys"],
["West Coast","","Falcon Buffet"],
["Aedern","","T1 Global"]

]

};

const week8 = {

matches:[

["T1 Global","","West Coast"],
["Falcon Buffet","","Relentless FC"],
["Nottingham Hotspur","","Aedern"],
["Quick Boys","","Mamak FC"],
["Panthera FC","","Ronins"],
["Zirve FK","","İnternazionale Milano"]

]

};

const week9 = {

matches:[

["Nottingham Hotspur","","Relentless FC"],
["West Coast","","Mamak FC"],
["Aedern","","Ronins"],
["T1 Global","","İnternazionale Milano"],
["Falcon Buffet","","Zirve FK"],
["Quick Boys","","Panthera FC"]


]

};

const week10 = {

matches:[

["Panthera FC","","Falcon Buffet"],
["Zirve FK","","T1 Global"],
["Nottingham Hotspur","","Quick Boys"],
["İnternazionale Milano","","Aedern"],
["Ronins","","West Coast"],
["Mamak FC","","Relentless FC"]

]

};

const week11 = {

matches:[

["Falcon Buffet","","Aedern"],
["Quick Boys","","West Coast"],
["Panthera FC","","Relentless FC"],
["Nottingham Hotspur","","T1 Global"],
["Zirve FK","","Mamak FC"],
["İnternazionale Milano","","Ronins"]

]

};

const week12 = {

matches:[

["Ronins","","Nottingham Hotspur"],
["İnternazionale Milano","","Mamak FC"],
["Zirve FK","","Relentless FC"],
["Panthera FC","","West Coast"],
["Quick Boys","","Aedern"],
["Falcon Buffet","","T1 Global"]

]

};

const week13 = {

matches:[

["West Coast","","T1 Global"],
["Relentless FC","","Falcon Buffet"],
["Mamak FC","","Quick Boys"],
["Ronins","","Panthera FC"],
["Aedern","","Nottingham Hotspur"],
["İnternazionale Milano","","Zirve FK"]

]

};

const week14 = {

matches:[

["Mamak FC","","West Coast"],
["Relentless FC","","Nottingham Hotspur"],
["Ronins","","Aedern"],
["İnternazionale Milano","","T1 Global"],
["Zirve FK","","Falcon Buffet"],
["Panthera FC","","Quick Boys"]

]

};

const week15 = {

matches:[

["Relentless FC","","Aedern"],
["Mamak FC","","T1 Global"],
["Ronins","","Falcon Buffet"],
["İnternazionale Milano","","Quick Boys"],
["West Coast","","Nottingham Hotspur"],
["Zirve FK","","Panthera FC"]

]

};

const week16 = {

matches:[

["Falcon Buffet","","Nottingham Hotspur"],
["T1 Global","","Quick Boys"],
["Aedern","","Panthera FC"],
["West Coast","","Zirve FK"],
["Relentless FC","","İnternazionale Milano"],
["Mamak FC","","Ronins"]

]

};

const week17 = {

matches:[

["Panthera FC","","İnternazionale Milano"],
["Quick Boys","","Ronins"],
["Zirve FK","","Nottingham Hotspur"],
["Falcon Buffet","","Mamak FC"],
["T1 Global","","Relentless FC"],
["Aedern","","West Coast"]

]

};

const week18 = {

matches:[

["Aedern","","Falcon Buffet"],
["West Coast","","Quick Boys"],
["Relentless FC","","Panthera FC"],
["Mamak FC","","Zirve FK"],
["T1 Global","","Nottingham Hotspur"],
["Ronins","","İnternazionale Milano"]

]

};

const week19 = {

matches:[

["Mamak FC","","Nottingham Hotspur"],
["Ronins","","Relentless FC"],
["İnternazionale Milano","","West Coast"],
["Zirve FK","","Aedern"],
["Panthera FC","","T1 Global"],
["Quick Boys","","Falcon Buffet"]

]

};

const week20 = {

matches:[

["Falcon Buffet","","Panthera FC"],
["T1 Global","","Zirve FK"],
["Aedern","","İnternazionale Milano"],
["Quick Boys","","Nottingham Hotspur"],
["West Coast","","Ronins"],
["Relentless FC","","Mamak FC"]

]

};

const week21 = {

matches:[

["Quick Boys","","Zirve FK"],
["Panthera FC","","Nottingham Hotspur"],
["Falcon Buffet","","İnternazionale Milano"],
["T1 Global","","Ronins"],
["Aedern","","Mamak FC"],
["West Coast","","Relentless FC"]

]

};

const week22 = {

matches:[

["Zirve FK","","Ronins"],
["Panthera FC","","Mamak FC"],
["Quick Boys","","Relentless FC"],
["Falcon Buffet","","West Coast"],
["İnternazionale Milano","","Nottingham Hotspur"],
["T1 Global","","Aedern"]

]

};

return (

<div className="
min-h-screen
bg-[#070b14]
p-8
text-white
">


<h1 className="
text-4xl
font-black
mb-8
">
📅 Fikstür
</h1>



<div className="
flex
gap-3
overflow-x-auto
pb-5
">


{weeks.map((w)=>(

<button

key={w}

onClick={()=>setWeek(w)}

className={`

min-w-[75px]
rounded-xl
py-3
font-bold
transition-all
duration-300

${
week===w
?
"bg-blue-500 scale-105"
:
"bg-white/10 hover:bg-white/20 hover:-translate-y-1"

}

`}

>

{w}. Hafta

</button>

))}


</div>




<div className="
h-1
bg-blue-500/40
rounded-full
mb-10
">
</div>



<h2 className="
text-3xl
font-black
mb-8
">
{week}. HAFTA
</h2>




{

[week1,week2,week3,week4,week5,week6,week7,week8,week9,week10,week11,week12,week13,week14,week15,week16,week17,week18,week19,week20,week21,week22][week-1] && (

<div className="
space-y-4
">


{

[week1,week2,week3,week4,week5,week6,week7,week8,week9,week10,week11,week12,week13,week14,week15,week16,week17,week18,week19,week20,week21,week22][week-1].matches.map((match,index)=>(


<div

key={index}

className="
match-card
rounded-3xl
border
border-white/10
bg-white/5
p-6
transition-all
duration-300
hover:-translate-y-2
hover:border-blue-500/50
"

style={{
animationDelay:`${index * 0.1}s`
}}

>


<div className="
grid
grid-cols-[1fr_auto_1fr]
items-center
gap-5
w-full
">



<div className="
flex
items-center
gap-3
">


<img

src={getLogo(match[0])}

className="
w-12
h-12
object-contain
"

/>


<span className="
font-bold
">

{match[0]}

</span>


</div>





<div className="
flex
flex-col
items-center
">


<div className="
bg-black/30
rounded-xl
px-5
py-2
font-black
text-xl
">

{match[1] || "-"}

</div>





</div>





<div className="
flex
items-center
justify-end
gap-3
">


<span className="
font-bold
text-right
">

{match[2]}

</span>



<img

src={getLogo(match[2])}

className="
w-12
h-12
object-contain
"

/>


</div>



</div>


</div>


))

}


</div>


)


}


</div>


);


}