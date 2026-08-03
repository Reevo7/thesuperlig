import { weeks } from "@/app/data/fikstur";


export default function PuanDurumu() {


const teamList = [

{
name:"Aedern",
logo:"/teams/aedern.png"
},

{
name:"Nottingham Hotspur",
logo:"/teams/nottingham.png"
},

{
name:"İnternazionale Milano",
logo:"/teams/inter.png"
},

{
name:"Quick Boys",
logo:"/teams/quickboys.png"
},

{
name:"Ronins",
logo:"/teams/ronins.png"
},

{
name:"West Coast",
logo:"/teams/west-coast.png"
},

{
name:"Relentless FC",
logo:"/teams/relentless.png"
},

{
name:"Zirve FK",
logo:"/teams/zirve.png"
},

{
name:"T1 Global",
logo:"/teams/t1.png"
},

{
name:"Falcon Buffet",
logo:"/teams/falcon.png"
},

{
name:"Panthera FC",
logo:"/teams/panthera.png"
},

{
name:"Mamak FC",
logo:"/teams/mamak.png"
}

];

let teams = teamList.map(team => ({

  ...team,

  o:0,
  g:0,
  b:0,
  m:0,
  ag:0,
  yg:0,
  av:"0",
  p:0

}));

weeks.forEach(week=>{

  week.matches.forEach(match=>{

    const home = teams.find(
      t=>t.name === match[0]
    );

    const away = teams.find(
      t=>t.name === match[2]
    );


    if(!home || !away) return;


    if(!match[1]) return;


    const score = match[1].split("-");


    const homeScore = Number(score[0].trim());
    const awayScore = Number(score[1].trim());


    home.o++;
    away.o++;


    home.ag += homeScore;
    home.yg += awayScore;

    away.ag += awayScore;
    away.yg += homeScore;


    if(homeScore > awayScore){

      home.g++;
      home.p += 3;

      away.m++;

    }


    else if(homeScore < awayScore){

      away.g++;
      away.p += 3;

      home.m++;

    }


    else{

      home.b++;
      away.b++;

      home.p++;
      away.p++;

    }

  });

});

teams.forEach(team=>{

  const average = team.ag - team.yg;

  if(average > 0){
    team.av = "+" + average;
  }
  else{
    team.av = String(average);
  }

});

teams.sort((a,b)=>{

  if(b.p !== a.p){
    return b.p - a.p;
  }


  const avA = a.ag - a.yg;
  const avB = b.ag - b.yg;


  if(avB !== avA){
    return avB - avA;
  }


  return b.ag - a.ag;

});

  return (

    <div className="p-8">


      <h1 className="
      text-4xl
      font-black
      text-white
      mb-8
      ">
        🏆 Puan Durumu
      </h1>




      <div className="
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/5
      ">


      <table className="
w-full
text-white
table-fixed
">



        <thead className="
        bg-white/10
        text-slate-400
        ">

          <tr>

            <th className="
            p-5
            text-left
            ">
              TAKIM
            </th>

           <th className="w-12 text-center">O</th>
<th className="w-12 text-center">G</th>
<th className="w-12 text-center">B</th>
<th className="w-12 text-center">M</th>
<th className="w-14 text-center">AG</th>
<th className="w-14 text-center">YG</th>
<th className="w-14 text-center">AV</th>
<th className="w-12 text-center">P</th>
          </tr>


        </thead>




        <tbody>


        {teams.map((team,index)=>{


          let color="";


          if(index===0)
            color="bg-green-500/20";


          if(index>=1 && index<=4)
            color="bg-yellow-500/20";


          if(index>=10)
            color="bg-red-500/20";




          return (

         <tr
key={team.name}
style={{
animationDelay:`${index * 0.08}s`
}}
className={`
table-row
border-t
border-white/10
transition
hover:bg-white/10
${color}
`}
>



            <td className="
            p-4
            ">


              <div className="
              flex
              items-center
              gap-4
              ">


                <span className="
                w-6
                text-center
                text-slate-400
                font-bold
                ">
                  {index+1}
                </span>



                <img
src={team.logo}
alt={team.name}
className="
h-9
w-9
object-contain
"
/>



                <span className="
                font-bold
                text-white
                ">
                  {team.name}
                </span>



              </div>


            </td>




            <td className="text-center">
              {team.o}
            </td>

            <td className="text-center">
              {team.g}
            </td>

            <td className="text-center">
              {team.b}
            </td>

            <td className="text-center">
              {team.m}
            </td>

            <td className="text-center">
              {team.ag}
            </td>

            <td className="text-center">
              {team.yg}
            </td>

            <td className="
            text-center
            font-bold
            ">
              {team.av}
            </td>


            <td className="
            text-center
            font-black
            text-blue-400
            ">
              {team.p}
            </td>


          </tr>


          )


        })}



        </tbody>


      </table>


      </div>
<div className="
mt-6
flex
flex-col
gap-3
">


<div className="
flex
items-center
gap-3
bg-green-500/10
border
border-green-500/30
rounded-xl
p-3
">

<div className="
w-5
h-5
rounded-md
bg-green-500/60
">
</div>

<span className="
font-bold
text-green-300
">
Şampiyonluk Turu
</span>

</div>



<div className="
flex
items-center
gap-3
bg-yellow-500/10
border
border-yellow-500/30
rounded-xl
p-3
">

<div className="
w-5
h-5
rounded-md
bg-yellow-500/60
">
</div>

<span className="
font-bold
text-yellow-300
">
Play-off
</span>

</div>



<div className="
flex
items-center
gap-3
bg-red-500/10
border
border-red-500/30
rounded-xl
p-3
">

<div className="
w-5
h-5
rounded-md
bg-red-500/60
">
</div>

<span className="
font-bold
text-red-300
">
Küme Hattı
</span>

</div>


</div>

    </div>

  );


}