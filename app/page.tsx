import PlayerSearch from "./components/PlayerSearch";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070b14] text-white">

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div
          className="
          hero-box
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-12
          text-center
          backdrop-blur-xl
          "
        >

          <p
            className="
            text-blue-400
            font-bold
            tracking-[5px]
            animate-fade
            "
          >
            STRIKERS CLUB SÜPER LİG
          </p>

          <h1
            className="
            mt-6
            text-5xl
            font-black
            uppercase
            leading-tight
            transition
            hover:text-blue-400
            "
          >
            Oyuncu
            <br />
            İstatistiklerini Gör
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Steam ID girerek Strikers Club oyuncu profilini,
            lig istatistiklerini ve performans bilgilerini görüntüle.
          </p>

          <PlayerSearch />

        </div>

        {/* İstatistik Kartları */}

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <Stat
            title="Oyuncular"
            value="0"
            icon="👤"
            delay={100}
          />

          <Stat
            title="Takımlar"
            value="0"
            icon="🛡"
            delay={250}
          />

          <Stat
            title="Sezon"
            value="2026"
            icon="🏆"
            delay={400}
          />

        </div>

      </section>

    </main>
  );
}

function Stat({
  title,
  value,
  icon,
  delay,
}: {
  title: string;
  value: string;
  icon: string;
  delay: number;
}) {

  return (

    <div
      style={{ animationDelay: `${delay}ms` }}
      className="
      home-stat
      group
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-7
      backdrop-blur-xl
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-blue-500/50
      "
    >

      <div className="text-3xl">
        {icon}
      </div>

      <p className="mt-5 text-slate-400">
        {title}
      </p>

      <h2
        className="
        mt-2
        text-5xl
        font-black
        transition
        group-hover:text-blue-400
        "
      >
        {value}
      </h2>

    </div>

  );
}