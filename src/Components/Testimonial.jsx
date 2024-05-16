import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SectionHeader from "./SectionHeader";
import { Rate } from "antd";
import { useEffect, useState } from "react";
import testimonials from "../assets/shop/testimonial.png";
import { Autoplay} from 'swiper/modules';
function Testimonial() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  console.log(reviews);
  return (
    <div className="my-20">
      <div className=" ">
        <SectionHeader
          shorts={"---What Our Clients Say---"}
          title={"Testimonials"}
        />
      </div>{" "}
      <Swiper
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className=" text-center max-w-2xl mx-auto space-y-4 py-8">
              <Rate defaultValue={review.rating}></Rate>
              <div className=" flex items-center justify-center">
                <img className="w-20" src={testimonials} alt="" />
              </div>
              <p>{review.details}</p>
              <h2 className="text-4xl font-semibold text-orange-300">
                {review.name}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonial;
