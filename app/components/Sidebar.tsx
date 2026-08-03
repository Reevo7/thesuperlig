"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Sidebar() {


const [user,setUser] = useState<any>(null);
const [open,setOpen] = useState(false);
const ownerSteamId = "76561198756091730";


useEffect(()=>{


const cookies = document.cookie.split(";");


const getCookie = (name:string)=>{

const cookie = cookies.find(
(c)=>c.trim().startsWith(name+"=")
);


return cookie 
? decodeURIComponent(cookie.split("=")[1])
: null;

};



const steamId = getCookie("steamId");
const steamName = getCookie("steamName");
const steamAvatar = getCookie("steamAvatar");



if(steamId){

setUser({

id:steamId,
name:steamName,
avatar:steamAvatar

});

}


},[]);



function logout(){

document.cookie="steamId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie="steamName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie="steamAvatar=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

window.location.reload();

}



return (

<aside className="
fixed
left-0
top-0
h-screen
w-72
border-r
border-white/10
bg-[#070b14]
p-6
text-white
">



<div className="
flex
items-center
gap-3
animate-fade
">


<div
  className="
  relative
  h-14
  w-14
  rounded-full
  overflow-hidden
  border
  border-[#303030]
  shadow-lg
  "
>

<Image

src="/logo.png"

alt="Strikers Club"

fill

className="object-cover"

/>

</div>



<div>

<h1 className="
text-lg
font-black
uppercase
">

Strikers Club

</h1>


<p className="
text-xs
text-slate-400
">

Süper Lig

</p>


</div>


</div>





<nav className="
mt-10
flex
flex-col
gap-2
">


<Menu href="/" text=" Ana Sayfa" />
<Menu href="/puan-durumu" text=" Puan Durumu" />
<Menu href="/fikstur" text=" Fikstür" />
<Menu href="/takimlar" text=" Takımlar" />
<Menu href="/oyuncular" text=" Oyuncular" />
<Menu href="/istatistikler" text=" İstatistikler" />

{
user?.id === ownerSteamId && (
  <Menu 
    href="/oyuncu-duzenleme" 
    text=" 🔒 Oyuncu Düzenleme" 
  />
)
}

</nav>





<div className="
absolute
bottom-6
left-6
right-6
">


{

user ? (


<div>


<div

onClick={()=>setOpen(!open)}

className="
cursor-pointer
flex
w-full
items-center
gap-3
rounded-xl
border
border-white/20
bg-white/5
p-3
transition
hover:bg-white/10
"

>


<Image

src={user.avatar || "/logo.png"}

alt="avatar"

width={42}

height={42}

className="rounded-full"

/>



<div>

<p className="font-bold">

{user.name}

</p>


<p className="
text-xs
text-slate-400
">

Steam

</p>


</div>


</div>





{

open && (

<div className="
absolute
bottom-20
left-0
right-0
rounded-xl
border
border-white/20
bg-[#111827]
p-2
">


<Link

href={`/oyuncu/${user.id}`}

className="
block
rounded-lg
px-3
py-2
hover:bg-white/10
"

>

👤 Profil

</Link>



<button

onClick={logout}

className="
w-full
text-left
rounded-lg
px-3
py-2
hover:bg-white/10
"

>

🚪 Çıkış Yap

</button>



</div>

)

}



</div>


)


:(


<a

href="/api/steam/login"

className="
flex
w-full
items-center
justify-center
gap-3
rounded-xl
border
border-white/20
bg-white/5
py-3
font-bold
transition-all
duration-300
hover:scale-105
hover:-translate-y-1
hover:bg-white/10
hover:shadow-lg
"

>


<Image

src="/steam.png"

alt="Steam"

width={24}

height={24}

/>


Steam ile Giriş


</a>


)


}


</div>



</aside>

);

}





function Menu({

href,

text,

}: {

href:string;

text:string;

}) {


return (

<Link

href={href}

className="
rounded-xl
px-4
py-3
text-slate-300
transition
hover:bg-white/10
hover:text-white
hover:translate-x-2
"

>

{text}

</Link>

);


}