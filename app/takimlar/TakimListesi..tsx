"use client";

import { useState } from "react";


export default function TakimListesi({
  teams,
}: {
  teams: any[];
}) {

  const [openTeam, setOpenTeam] = useState<string | null>(null);


  return (

    <div className="space-y-5">

      {teams.map((team) => (

        <div
key={team.name}
style={{
  animationDelay: `${teams.indexOf(team) * 0.12}s`
}}
className="
team-card
rounded-3xl
border
border-white/10
bg-white/5
overflow-hidden
"
>


          <button
            onClick={() =>
              setOpenTeam(
                openTeam === team.name
                  ? null
                  : team.name
              )
            }
            className="
            w-full
            flex
            items-center
            gap-5
            p-6
            text-left
            "
          >


            <img
              src={team.logo}
              className="
              w-20
              h-20
              rounded-full
              object-cover
              border
              border-white/10
              bg-black/20
              p-2
              "
            />


            <div>

              <h2 className="
              text-2xl
              font-black
              text-white
              ">
                {team.name}
              </h2>

              <p className="
              text-white/50
              mt-1
              ">
                Oyuncuları görmek için tıkla
              </p>

            </div>


            <span className="
            ml-auto
            text-2xl
            text-white
            ">
              {openTeam === team.name ? "▲" : "▼"}
            </span>


          </button>




          {openTeam === team.name && (

            <div
              className="
              border-t
              border-white/10
              p-6
              team-detail
              "
            >


              <div className="
              rounded-2xl
              overflow-hidden
              border
              border-white/10
              ">


                {/* Başlık */}

                <div
                  style={{
                    gridTemplateColumns:"2fr 1fr 1fr 1fr 1fr"
                  }}
                  className="
                  grid
                  p-4
                  bg-white/5
                  text-white/50
                  font-semibold
                  items-center
                  "
                >

                  <span>Oyuncu</span>
                  <span className="text-center">Gol</span>
                  <span className="text-center">Asist</span>
                  <span className="text-center">Pas</span>
                  <span className="text-center">Save</span>

                </div>



                {team.players.map((player:any)=>(


                  <div
                    key={player.steamId}
                    style={{
                      gridTemplateColumns:"2fr 1fr 1fr 1fr 1fr"
                    }}
                    className="
                    grid
                    items-center
                    p-4
                    border-t
                    border-white/10
                    text-white
                    "
                  >


                    <div className="
                    flex
                    items-center
                    gap-3
                    ">


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


                    </div>



                    <span className="text-center">
                      {player.leagueGoals}
                    </span>


                    <span className="text-center">
                      {player.leagueAssists}
                    </span>


                    <span className="text-center">
                      0
                    </span>


                    <span className="text-center">
                      {player.leagueSaves}
                    </span>


                  </div>


                ))}


              </div>


            </div>

          )}


        </div>


      ))}


    </div>

  );
}