const Stat = () => {
  return (
    <div className="max-w-[1440px] mx-auto w-full my-10 px-5">
      <h3 className="font-serif text-[#a294cd] text-center text-xl lg:text-4xl font-bold pb-5">
        Statistics
      </h3>
      <div className="py-10 stats stats-vertical lg:stats-horizontal shadow w-full">
        <div className="stat mx-auto w-fit text-center">
          <div className="stat-title text-2xl">Total Regular Clients</div>
          <div className="stat-value text-[#a294cd] font-serif">10K+</div>
          <div className="stat-desc text-2xl">2018-2023</div>
        </div>

        <div className="stat mx-auto w-fit text-center">
          <div className="stat-title text-2xl">Total Collaborative Brands</div>
          <div className="stat-value text-[#a294cd] font-serif ">45+</div>
          <div className="stat-desc text-2xl">2018-2023</div>
        </div>

        <div className="stat mx-auto w-fit text-center">
          <div className="stat-title text-2xl">Registered Clients</div>
          <div className="stat-value text-[#a294cd] font-serif">22K+</div>
          <div className="stat-desc text-2xl">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
