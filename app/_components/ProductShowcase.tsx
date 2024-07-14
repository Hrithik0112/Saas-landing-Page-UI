import Image from "next/image";
import productImage from "../../public/app-screen.png";

export const Product = () => {
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

        <Image src={productImage} alt="product Image" className="mt-14 mx-auto" />
      </div>
    </div>
  );
};
