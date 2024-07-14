import { Banner } from "./_components/Banner";
import { CTA } from "./_components/CTA";
import { FAQs } from "./_components/FAQs";
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
    <FAQs/>
    <CTA/>
    </>
  );
}
