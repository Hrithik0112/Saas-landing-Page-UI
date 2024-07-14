import { Banner } from "./_components/Banner";
import { Features } from "./_components/Features";
import { Hero } from "./_components/Hero";
import { LogoTicker } from "./_components/LogoTicker";
import { Navbar } from "./_components/Nvabar";


export default function Home() {
  return (
    <>
    <Banner/>
    <Navbar/>
    <Hero/>
    <LogoTicker/>
    <Features/>
    </>
  );
}
