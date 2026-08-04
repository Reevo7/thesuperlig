"use client";

import { useState } from "react";

type Player = {
  steamId: string;
  team: string | null;
  leagueMatches: number;
  leagueGoals: number;
  leagueAssists: number;
  leagueSaves: number;
  leagueMvp: number;
  leagueYellowCards: number;
  leagueRedCards: number;
};


export default function EditPlayerForm({
  player,
}: {
  player: Player;
}) {


  const [loading, setLoading] = useState(false);


  const [team, setTeam] = useState(
    player.team || "Takımı Yok"
  );


  const [leagueMatches, setLeagueMatches] = useState(player.leagueMatches);
  const [leagueGoals, setLeagueGoals] = useState(player.leagueGoals);
  const [leagueAssists, setLeagueAssists] = useState(player.leagueAssists);
  const [leagueSaves, setLeagueSaves] = useState(player.leagueSaves);
  const [leagueMvp, setLeagueMvp] = useState(player.leagueMvp);
  const [leagueYellowCards, setLeagueYellowCards] = useState(player.leagueYellowCards);
  const [leagueRedCards, setLeagueRedCards] = useState(player.leagueRedCards);



  async function kaydet(){

    setLoading(true);


    const res = await fetch("/api/oyuncu-guncelle", {

      method:"POST",

      headers:{
        "Content-Type":"application/json",
      },

      body:JSON.stringify({

        steamId:player.steamId,

        team,

        leagueMatches,
        leagueGoals,
        leagueAssists,
        leagueSaves,
        leagueMvp,
        leagueYellowCards,
        leagueRedCards,

      }),

    });


    setLoading(false);


    if(res.ok){

      alert("Oyuncu başarıyla güncellendi.");

    }else{

      alert("Bir hata oluştu.");

    }

  }



  return (

    <div className="space-y-6">


      {/* Takım */}

      <div>

        <label className="block mb-2 text-white/70">
          Takım
        </label>


        <select

          value={team}

          onChange={(e)=>setTeam(e.target.value)}

          className="
          w-full
          bg-[#111827]
          border
          border-white/10
          rounded-xl
          p-3
          text-white
          "

        >

          <option>Takımı Yok</option>
          <option>West Coast</option>
          <option>Ronins</option>
          <option>Relentless FC</option>
          <option>Aedern</option>
          <option>T1 Global</option>
          <option>Quick Boys</option>
          <option>Mamak FC</option>
          <option>Panthera FC</option>
          <option>Falcon Buffet</option>
          <option>Zirve FK</option>
          <option>İnternazionale Milano</option>
          <option>Nottingham Hotspur</option>
        </select>
      


      </div>




      {/* İstatistikler */}

      <div className="grid grid-cols-2 gap-4">



        <Input
          title="Maç"
          value={leagueMatches}
          setValue={setLeagueMatches}
        />


        <Input
          title="Gol"
          value={leagueGoals}
          setValue={setLeagueGoals}
        />


        <Input
          title="Asist"
          value={leagueAssists}
          setValue={setLeagueAssists}
        />


        <Input
          title="Save"
          value={leagueSaves}
          setValue={setLeagueSaves}
        />


        <Input
          title="MVP"
          value={leagueMvp}
          setValue={setLeagueMvp}
        />


        <Input
          title="Sarı Kart"
          value={leagueYellowCards}
          setValue={setLeagueYellowCards}
        />


        <Input
          title="Kırmızı Kart"
          value={leagueRedCards}
          setValue={setLeagueRedCards}
        />


      </div>





      <div className="flex justify-end">


        <button

          onClick={kaydet}

          disabled={loading}

          className="
          bg-blue-600
          hover:bg-blue-700
          px-8
          py-3
          rounded-xl
          font-bold
          "

        >

          {
            loading
            ?
            "Kaydediliyor..."
            :
            "💾 Kaydet"
          }


        </button>


      </div>


    </div>

  );

}





function Input({

title,
value,
setValue,

}:{

title:string;
value:number;
setValue:(value:number)=>void;

}){


return (

<div>

<label className="
text-white/60
text-sm
">

{title}

</label>


<input

type="number"

value={value}

onChange={(e)=>setValue(Number(e.target.value))}

className="
w-full
bg-[#111827]
rounded-xl
p-3
mt-2
text-white
border
border-white/10
"

/>

</div>

);


}