import { Banner } from "./_components/Banner";
import { Features } from "./_components/Features";
import { Hero } from "./_components/Hero";
import { LogoTicker } from "./_components/LogoTicker";
import { Navbar } from "./_components/Nvabar";
import { Product } from "./_components/ProductShowcase";


export default function Home() {
  return (
    <>
    <Banner/>
    <Navbar/>
    <Hero/>
    <LogoTicker/>
    <Features/>
    <Product/>
    </>
  );
}
