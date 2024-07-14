import Linkedin from "../../public/LinkedIN.svg"
import Instagram from "../../public/Instagram.svg"
import Slack from "../../public/Slack.svg"
import Twitter from "../../public/Twitter.svg"
import Image from "next/image"

export const Footer = ()=> {
    return (
        <div className="py-5 bg-black">
            <div className=" flex flex-col items-center sm:flex-row md:mx-auto gap-4 border-t border-white/30">

            <h2 className="text-center text-white/60">© 2024 Hrithik, Inc. All rights reserved</h2>
            <div className="flex gap-2.5 mx-auto items-center">
                <Image src={Linkedin}  alt="" className="text-white/60 w-6 h-6 bg-white/60"/>
                <Image src={Instagram} alt="" className="text-white/60 w-6 h-6 bg-white/60"/>
                <Image src={Slack} alt="" className="text-white/60 w-6 h-6 bg-white/60"/>
                <Image src={Twitter} alt="" className="text-white/60 w-6 h-6 bg-white/60"/>
                
            </div>
            </div>
        </div>
    )
}