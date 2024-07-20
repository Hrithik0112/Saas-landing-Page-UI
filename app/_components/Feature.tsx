"use client"
import { MotionValue, useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { Box } from "lucide-react";
import React, { useEffect, useRef } from "react";

const Feature = ({title , description} : {title : string , description : string}) => {

    const OffsetX = useMotionValue(0)
    const OffsetY = useMotionValue(0)
    const maskImage : MotionValue<string> = useMotionTemplate`radial-gradient(100px 100px at ${OffsetX}px ${OffsetY}px, black, transparent)`
    const maskImagevalue = maskImage.get()

    const border = useRef<HTMLDivElement>(null)
    useEffect(() => {
      const updateMousePosition = (e : MouseEvent)=> {
        // e.x
        //e.y
        if(!border.current) return;

        const borderLoc = border.current?.getBoundingClientRect()
        OffsetX.set(e.x - borderLoc.x) 
        OffsetY.set(e.y - borderLoc.y) 
      }
        window.addEventListener("mousemove", updateMousePosition)
      return () => {
        window.removeEventListener("mousemove", updateMousePosition)
      }
    }, [])
    
  return (
    <div
      className="relative border border-white/30 rounded-xl flex flex-col justify-center items-center px-5 py-10 sm:flex-1"
    >
        <motion.div className="absolute inset-0 border-2 border-purple-400 rounded-xl"
        ref={border}
        style={{ WebkitMaskImage : maskImage, maskImage }}
        ></motion.div>
      <div className="h-14 w-14 flex justify-center items-center bg-white rounded-lg">
        <Box color="black" size={20} />
      </div>
      <h3 className="font-bold text-base text-center mt-6 ">{title}</h3>
      <p className="text-center text-white/70">{description}</p>
    </div>
  );
};

export default Feature;
