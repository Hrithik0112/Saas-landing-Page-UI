"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] h-[375px] rounded-[100%] left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] bg-black top-[calc(100%-110px)] sm:top-[calc(100%-140px)]"></div>
      <div className="p-4 relative">
        <div className="flex justify-center items-center ">
          <a href="#" className="inline-flex gap-3 py-1 px-2 border border-white/30 rounded-lg">
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] bg-clip-text text-transparent [-webkit-background-clip:text] ">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1 ">
              <span className="text-white">Read more</span>
              <ArrowRight color="white" className="w-4 h-4" />
            </span>
          </a>
        </div>
        <div className="flex justify-center mt-8 ">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex">
              One Task <br /> at a Time
            </h1>
            <motion.div
            drag
            dragSnapToOrigin 
            className="absolute right-[476px] top-[108px] hidden sm:inline">
              <Image
                src={"/cursor.png"}
                alt="cursor"
                width={200}
                height={200}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
            <motion.div 
            drag
            dragSnapToOrigin
            className="absolute left-[498px] top-[56px] hidden sm:inline">
              <Image
                src={"/message.png"}
                alt="cursor"
                width={200}
                height={200}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="mt-8 text-center text-xl max-w-md">
            Celebrate the joy of accomplishment with an app designed to track your progress,
            motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black px-5 py-3 rounded-lg font-medium">
            Get for Free
          </button>
        </div>
      </div>
    </div>
  );
};
