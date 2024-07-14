import Linkedin from "../../public/LinkedIN.svg";
import Youtube from "../../public/youtube.svg";
import TikTok from "../../public/tiktok.svg";
import Twitter from "../../public/x-social.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/30">
    <div className="p-4 mx-auto" >
      <div className=" flex flex-col sm:flex-row sm:justify-between gap-4 ">
        <div className="text-center">© 2024 Hrithik, Inc. All rights reserved</div>
        <ul className="flex gap-2.5 justify-center">
          <li className="bg-white/60">
            <Image src={Linkedin} alt=""  />
          </li>
          <li className="bg-white/60">
            <Image src={Youtube} alt="" />
          </li>
          <li className="bg-white/60">
            <Image src={TikTok} alt="" />
          </li>
          <li className="bg-white/60">
            <Image src={Twitter} alt=""  />
          </li>
        </ul>
      </div>
    </div>
    </footer>
  );
};
