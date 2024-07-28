import { Menu, SquareMenu } from "lucide-react";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="p-4 md:px-20 bg-black">
      <div className="py-4 flex justify-between items-center">
        <div className="relative">
          <div className="absolute h-full w-full top-0 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
          <Image
            src={"/logosaas.png"}
            alt="Logo Saas"
            width={48}
            height={48}
            className="w-12 h-12 relative"
          />
        </div>

        <div className="border border-white border-opacity-30 h-10 w-10 sm:hidden inline-flex justify-center items-center rounded-lg">
          <Menu color="white" size={24} />
        </div>
        <nav className="sm:flex hidden justify-between items-center gap-6 ">
            <a href="#" className="hover:text-white hover:text-opacity-100 transition text-white text-opacity-60">About</a>
            <a href="#" className="hover:text-white hover:text-opacity-100 transition text-white text-opacity-60">Features</a>
            <a href="#" className="hover:text-white hover:text-opacity-100 transition text-white text-opacity-60">Updates</a>
            <a href="#" className="hover:text-white hover:text-opacity-100 transition text-white text-opacity-60">Help</a>
            <a href="#" className="hover:text-white hover:text-opacity-100 transition text-white text-opacity-60">Customer</a>
            <button className="bg-white text-black px-4 py-2 rounded-lg">Get for Free</button>
        </nav>
      </div>
    </div>
  );
};
