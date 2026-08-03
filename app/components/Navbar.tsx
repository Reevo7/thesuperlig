import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="border-b border-white/10 bg-[#070b14] text-white">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Sol taraf */}
        <div className="flex items-center gap-4">

          <div className="relative h-12 w-12">
            <Image
              src="/logo.png"
              alt="Strikers Club"
              fill
              className="object-contain"
            />
          </div>


          <h1 className="text-xl font-black uppercase tracking-wide">
            Strikers Club Süper Lig
          </h1>

        </div>


        {/* Sağ taraf */}
        <div className="flex items-center gap-4">


          {/* Arama */}
          <div className="hidden md:block">
            <input
              placeholder="Oyuncu ara..."
              className="w-64 rounded-xl border border-white/10 bg-[#111827] px-4 py-2 text-sm outline-none placeholder:text-slate-500"
            />
          </div>


          {/* Steam giriş */}
         <button
style={{
  background:"red",
  transform:"scale(1.5)"
}}
>
  Steam ile Giriş
</button>


        </div>

      </div>

    </nav>
  );
}