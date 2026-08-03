"use client";

import { useState } from "react";

type Player = {
  username: string;
  steamId: string;
  avatar?: string | null;
  team?: string | null;
  goals: number;
  assists: number;
  saves: number;
  matches: number;
  mvp?: number;
};

export default function PlayerSearch() {

  const [steamId, setSteamId] = useState("");
  const [player, setPlayer] = useState<Player | null>(null);
  const [message, setMessage] = useState("");



  const searchPlayer = async () => {

    if (!steamId) {
      setMessage("⚠️ Steam ID giriniz.");
      return;
    }


    setMessage("🔍 Oyuncu aranıyor...");
    setPlayer(null);


    try {

      const res = await fetch(
        `/api/oyuncu?steamId=${steamId}`
      );


      const data = await res.json();


      if (!res.ok) {

        setMessage("❌ Oyuncu bulunamadı.");
        return;

      }


      setPlayer(data);
      setMessage("");


    } catch {

      setMessage("⚠️ Sunucu hatası.");

    }

  };



  return (

    <div className="mx-auto mt-10 max-w-3xl">


      <div className="
      flex
      gap-3
      rounded-3xl
      border
      border-white/10
      bg-[#111827]/70
      p-3
      backdrop-blur-xl
      ">


        <input

          value={steamId}

          onChange={(e)=>setSteamId(e.target.value)}

          placeholder="Steam Profil ID gir..."

          className="
          flex-1
          bg-transparent
          px-6
          py-4
          text-white
          outline-none
          "

        />


        <button

          onClick={searchPlayer}

          className="
          rounded-2xl
          bg-blue-600
          px-10
          font-black
          hover:bg-blue-500
          "

        >

          ARA

        </button>


      </div>




      {message && (

        <p className="
        mt-5
        text-center
        text-slate-400
        ">

          {message}

        </p>

      )}






      {player && (

        <div className="
        mt-10
        rounded-3xl
        border
        border-white/10
        bg-gradient-to-br
        from-[#111827]
        to-[#070b14]
        p-8
        shadow-2xl
        ">



          <div className="
          flex
          items-start
          gap-6
          ">



            <div className="
            h-24
            w-24
            overflow-hidden
            rounded-3xl
            bg-blue-600
            ">


              {player.avatar ? (

                <img

                src={player.avatar}

                className="
                h-full
                w-full
                object-cover
                "

                />

              ) : (

                <div className="
                flex
                h-full
                items-center
                justify-center
                text-5xl
                font-black
                ">

                {player.username[0]}

                </div>

              )}


            </div>





            <div className="-ml-2 mt-0">


              <h2
className="
text-4xl
font-black
uppercase
-ml-12
"
>

                {player.username}

              </h2>




              <div className="
mt-1
flex
items-center
gap-3
">


                <img

                src="/teams/ronins.png"

                className="
                h-10
                w-10
                object-contain
                "

                />



                <p
className="
text-lg
font-bold
text-blue-400
-ml-2
"
>
  {player.team ?? "Takımsız"}
</p>

              </div>





              <p className="
              mt-1
              text-sm
              text-slate-500
              ">

                Steam ID: {player.steamId}

              </p>



            </div>


          </div>





          <div className="
          mt-10
          grid
          grid-cols-2
          gap-5
          md:grid-cols-5
          ">


            <Stat title="⚽ Gol" value={player.goals}/>
            <Stat title="🎯 Asist" value={player.assists}/>
            <Stat title="🧤 Save" value={player.saves}/>
            <Stat title="🎮 Maç" value={player.matches}/>
            <Stat title="🏆 MVP" value={player.mvp ?? 0}/>


          </div>



        </div>

      )}


    </div>

  );

}



function Stat({

title,
value,

}:{

title:string;
value:number;

}){


return (

<div className="
rounded-2xl
border
border-white/10
bg-[#0b1220]
p-5
text-center
">


<p className="text-sm text-slate-400">
{title}
</p>


<h3 className="
mt-3
text-4xl
font-black
">

{value}

</h3>


</div>

);


}