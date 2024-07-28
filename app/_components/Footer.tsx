
import { GitHubLogoIcon, LinkedInLogoIcon, NotionLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/30">
    <div className="p-4 mx-auto md:px-20" >
      <div className=" flex flex-col sm:flex-row sm:justify-between gap-4 ">
        <div className="text-center">© 2024 Hrithik, Inc. All rights reserved</div>
        <ul className="flex gap-4 justify-center">
          <li><GitHubLogoIcon className="text-white/60 w-6 h-6 hover:text-white transition-colors"/> </li>
          <li><TwitterLogoIcon className="text-white/60 w-6 h-6 hover:text-white transition-colors"/> </li>
          <li><NotionLogoIcon className="text-white/60 w-6 h-6 hover:text-white transition-colors"/> </li>
          <li><LinkedInLogoIcon className="text-white/60 w-6 h-6 hover:text-white transition-colors"/> </li>
        </ul>
      </div>
    </div>
    </footer>
  );
};
