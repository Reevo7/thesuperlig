"use client";

import { useState } from "react";
import EditPlayerForm from "./EditPlayerForm";


export default function PlayerEditList({
  players,
}: {
  players:any[];
}) {


  const [search,setSearch] = useState("");



  const filteredPlayers = players.filter((player)=>


    player.username
      .toLowerCase()
      .includes(
        search.toLowerCase()
      )

  );



  return (

    <div className="space-y-6">



      <input

        value={search}

        onChange={(e)=>setSearch(e.target.value)}

        placeholder="🔍 Oyuncu ara..."

        className="
        w-full
        rounded-2xl
        bg-[#111827]
        border
        border-white/10
        p-4
        text-white
        outline-none
        "

      />




      <div className="space-y-5">


      {
        filteredPlayers.map((player)=>(


          <div
          key={player.steamId}
          className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-6
          "
          >



            <div className="
            flex
            items-center
            gap-5
            mb-6
            ">


              <img

              src={player.avatar || "/logo.png"}

              className="
              w-16
              h-16
              rounded-full
              "

              />



              <div>

                <h2 className="
                text-xl
                font-black
                text-white
                ">
                  {player.username}
                </h2>


                <p className="
                text-white/50
                ">
                  Steam ID: {player.steamId}
                </p>


              </div>


            </div>



            <EditPlayerForm

              player={{

                steamId: player.steamId,

                team: player.team,

                leagueMatches: player.leagueMatches,

                leagueGoals: player.leagueGoals,

                leagueAssists: player.leagueAssists,

                leagueSaves: player.leagueSaves,

                leagueMvp: player.leagueMvp,

                leagueYellowCards: player.leagueYellowCards,

                leagueRedCards: player.leagueRedCards,

              }}

            />



          </div>


        ))
      }


      </div>


    </div>

  );

}