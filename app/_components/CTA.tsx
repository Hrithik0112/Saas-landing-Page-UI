import HelixImage from "../../public/helix2.png"
import emojistarImage from "../../public/emojistar.png"
import Image from "next/image";


export const CTA = () => {
  return (
    <div className="py-[72px] bg-black text-white text-center sm:py-24 ">
      <div className="p-4 max-w-xl mx-auto relative ">
        <Image src={HelixImage} alt="" className="absolute top-6 left-[calc(100%+36px)] "/>
        <Image src={emojistarImage} alt="" className="absolute -top-[120px] right-[calc(100%+24px)]"/>
        <h2 className="text-5xl sm:text-6xl text-center font-bold tracking-tighter">
        Get instant access
        </h2>
        
          <p className="text-xl text-white/70 text-center mt-5">
          Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
          </p>
        
        <div className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
        <input type="text" placeholder="your@email.com" className="text-[#9CA3AF] bg-white/20 px-5 h-12 rounded-lg font-medium sm:flex-1" />
        <button className=" font-medium px-5 bg-white text-black h-12  rounded-lg ">Get Access</button>
        </div>
      </div>
    </div>
  );
};
