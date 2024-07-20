"use client"
import Image from "next/image";
import productImage from "../../public/app-screen.png";
import {motion, useScroll, useTransform} from "framer-motion"
import { useRef } from "react";

export const Product = () => {

  const imageref  = useRef<HTMLImageElement>(null)

  const { scrollYProgress } = useScroll ({
      target : imageref,
      offset : ["start end" , "end end"]
  })

  const rotateX = useTransform(scrollYProgress ,[0, 1], [50, 0])
  const opacity = useTransform(scrollYProgress , [0, 1] , [0.5 , 1])
  return (
    <div className="py-[72px] bg-black text-white sm:py-24 bg-gradient-to-b from-black to-[#5D2CA8]">
      <div className="px-4 mx-auto">
        <h2 className="text-5xl sm:text-6xl text-center font-bold tracking-tighter">
          Intuitive interface
        </h2>
        <div className="max-w-xl mx-auto mt-5">
          <p className="text-xl text-white/70 text-center">
            Celebrate the joy of accomplishment with an app designed to track your progress,
            motivate your efforts, and celebrate your successes, one task at a time.
          </p>
        </div>
        <motion.div 
        style={{
            opacity : opacity,
            rotateX :rotateX,
            transformPerspective : "800px"
        }}>

        <Image 
        src={productImage} 
        alt="product Image" 
        className="mt-14 mx-auto"
        ref={imageref} />
        </motion.div>
      </div>
    </div>
  );
};
