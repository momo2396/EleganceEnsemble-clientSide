import b1 from "../../assets/Beauty-Products.jpg";
const Banner = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-5 justify-center items-center px-10 bg-[hsl(255,17%,95%)] py-10">
        <div className="">
          <p className="text-4xl font-bold">Make You Elegant</p>
          <p className="pt-5 text-gray-400">
            {" "}
            Get a powerful custom overlook just for you
          </p>
        </div>
        <div className="bg-[#a294cd] py-4 rounded-full px-3">
          <img className="flex-1 rounded-full" src={b1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
