import b1 from "../../assets/Beauty-Products.jpg";
const Banner = () => {
  return (
    <div className="px-10 bg-[hsl(255,17%,95%)] py-10">
      <div className="flex flex-col lg:flex-row gap-5 justify-center items-center ">
        <div className="">
          <div className="font-serif text-4xl lg:text-8xl font-bold flex flex-col justify-center items-center">
            <p>Make You</p>
            <p>Elegant</p>
          </div>
        </div>
        <div className="bg-[#a294cd] py-4 rounded-full px-3">
          <img className="flex-1 rounded-full" src={b1} alt="" />
        </div>
      </div>
      <div className="text-2xl font-serif  text-gray-400 text-center">
        <p className="pt-5"> Get a powerful custom overlook just for you</p>
        <p className="pt-5 text-black font-bold">100% Original</p>
      </div>
    </div>
  );
};

export default Banner;
