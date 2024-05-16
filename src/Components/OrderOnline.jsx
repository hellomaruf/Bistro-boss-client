import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import slide5 from "../assets/home/slide5.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import SectionHeader from "./SectionHeader";
function OrderOnline() {
  return (
    <div className="max-w-7xl mx-auto my-5">
      <SectionHeader
        shorts={"--From 11:00am to 10:00pm--"}
        title={"oder online"}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="relative ">
          <img className="z-0" src={slide1} alt="" />
          <h2 className="text-3xl font-semibold left-1/4 absolute z-10 bottom-3 text-white">
            Salads
          </h2>
        </SwiperSlide>
        <SwiperSlide className="relative ">
          <img src={slide2} alt="" />
          <h2 className="text-3xl font-semibold left-1/4 absolute z-10 bottom-3 text-white">
            Pizzas
          </h2>
        </SwiperSlide>
        <SwiperSlide className="relative ">
          <img src={slide3} alt="" />
          <h2 className="text-3xl font-semibold left-1/4 absolute z-10 bottom-3 text-white">
            Soups
          </h2>
        </SwiperSlide>
        <SwiperSlide className="relative ">
          <img src={slide4} alt="" />
          <h2 className="text-3xl font-semibold left-1/4 absolute z-10 bottom-3 text-white">
            Desserts
          </h2>
        </SwiperSlide>
        <SwiperSlide className="relative ">
          <img src={slide5} alt="" />
          <h2 className="text-3xl font-semibold left-1/4 absolute z-10 bottom-3 text-white">
            Salads
          </h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default OrderOnline;
