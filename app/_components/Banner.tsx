export const Banner = () => {
  return (
    <div className="flex justify-center items-center px-4 bg-[linear-gradient(to_right,#FCD6FF70,#29D8FF70,#FFFD8070,#F89ABF70,#FCD6FF70)] ">
      <div className="p-4">
        <p className="font-bold text-base flex ">
          <span className="hidden sm:flex">Introducing a completely redesigned interface — </span>
          <a href="#" className="underline underline-offset-3">
            Explore The demo
          </a>
        </p>
      </div>
    </div>
  );
};
