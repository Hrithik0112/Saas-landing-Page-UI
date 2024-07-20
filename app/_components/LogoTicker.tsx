"use client"
import apexLogo from "../../public/apex.png"
import acmeLogo from "../../public/acme.png"
import celestialLogo from "../../public/celestial.png"
import echoLogo from "../../public/echo.png"
import pulseLogo from "../../public/pulse.png"
import quantumLogo from "../../public/quantum.png"
import Image from "next/image"


const Images = [
    {
        src : acmeLogo,
        alt : "acmeLogo"
    },
    {
        src : quantumLogo,
        alt : "quantumLogo"
    },
    {
        src : echoLogo,
        alt : "echoLogo"
    },
    {
        src : apexLogo,
        alt : "apexLogo"
    },
   
    {
        src : celestialLogo,
        alt : "celestialLogo"
    },
    
    {
        src : pulseLogo,
        alt : "pulseLogo"
    },
    {
        src : celestialLogo,
        alt : "celestialLogo"
    },
    
    {
        src : pulseLogo,
        alt : "pulseLogo"
    },
    {
        src : celestialLogo,
        alt : "celestialLogo"
    },
    
    {
        src : pulseLogo,
        alt : "pulseLogo"
    },
    

]

export const LogoTicker = ()=> {
    return <div className="bg-black text-white py-[72px] sm:py-24">
        <div className="px-4">
        <h2 className="text-xl text-center text-white/70 ">Trusted by the world's most innovative teams</h2>
        <div className="overflow-hidden relative mt-9 before:content-[''] before:absolute before:h-full  before:w-5 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:content-[''] after:absolute after:h-full after:w-5 after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))] after:right-0 before:left-0 after:top-0 before:top-0 ">
            <div className="flex gap-16">

            {Images.map(({src , alt})=> (
                <Image src={src} alt={alt} className="flex-none h-8 w-auto"/>
            ))}
            </div>
        </div>
        </div>
    </div>
}