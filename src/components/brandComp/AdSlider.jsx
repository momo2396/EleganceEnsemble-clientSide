import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, EffectFlip, Pagination, Navigation } from "swiper/modules";
const AdSlider = () => {
  const images = [
    "https://i.ibb.co/1Jxyctj/1933460-bigthumbnail.jpg",
    "https://i.ibb.co/mJLcLYM/o-37898.jpg",
    "https://i.ibb.co/D7hm8k1/3348901609777-1-750x.jpg",
  ];
  return (
    <Swiper
      effect={"flip"}
      loop={true}
      grabCursor={true}
      pagination={true}
      navigation={false}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      modules={[EffectFlip, Pagination, Navigation, Autoplay]}
      className="mySwiper w-full"
    >
      {images.map((image) => (
        <SwiperSlide key={image}>
          <div
            style={{ backgroundImage: `url("${image}")` }}
            className="w-[80vw] mx-auto h-[500px] lg:h-[700px] bg-center bg-cover"
          >
            {/* <img className="w-full" src={image} /> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AdSlider;
