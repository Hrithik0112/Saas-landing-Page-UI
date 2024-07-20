"use client"
import apexLogo from "../../public/apex.png"
import acmeLogo from "../../public/acme.png"
import celestialLogo from "../../public/celestial.png"
import echoLogo from "../../public/echo.png"
import pulseLogo from "../../public/pulse.png"
import quantumLogo from "../../public/quantum.png"
import Image from "next/image"
import {motion} from "framer-motion"

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
        alt : "celestialLogo1"
    },
    {
        src : echoLogo,
        alt : "echoLogo2"
    },
    
]

export const LogoTicker = ()=> {
    return <div className="bg-black text-white py-[72px] sm:py-24">
        <div className="px-4">
        <h2 className="text-xl text-center text-white/70 ">Trusted by the world's most innovative teams</h2>
        <div className="overflow-hidden flex relative mt-9 before:content-[''] before:z-10 before:absolute before:h-full  before:w-5 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:content-[''] after:absolute after:h-full after:w-5 after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))] after:right-0 before:left-0 after:top-0 before:top-0 ">
            <motion.div
            transition={{
                duration : 10,
                ease : "linear",
                repeat: Infinity,
            }}
            initial={{translateX : 0}}
            animate={{translateX : "-50%"}} 
            className="flex gap-16 flex-none pr-16">

            {Images.map(({src , alt })=> (
                <Image src={src} alt={alt} key={alt} className="flex-none h-8 w-auto"/>
            ))}
            {Images.map(({src , alt})=> (
                <Image src={src} alt={alt} key={alt} className="flex-none h-8 w-auto"/>
            ))}
            </motion.div>
        </div>
        </div>
    </div>
}