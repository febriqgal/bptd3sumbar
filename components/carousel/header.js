/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import { A11y, Pagination, Scrollbar, Autoplay, EffectCube } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
export default function ComCarouselHeader() {
  const ref = useRef(null);

  return (
    <Swiper
      className="md:h-96"
      // install Swiper modules
      modules={[Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      effect={EffectCube}
      autoplay={{ delay: 3000, disableOnInteraction: true }}
      pagination={{
        clickable: true,
        type: "custom",
      }}
      scrollbar={{ draggable: true, hide: true }}
    >
      <SwiperSlide>
        <img
          className="object-cover h-full w-full"
          src={
            "https://firebasestorage.googleapis.com/v0/b/bptd3sumbar-5025f.appspot.com/o/image%2Fheader%2F1?alt=media&token=65eb34a3-68a9-40e2-aa91-8f6381a7e4c1"
          }
          alt="#"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="object-cover h-full w-full"
          src={
            "https://firebasestorage.googleapis.com/v0/b/bptd3sumbar-5025f.appspot.com/o/image%2Fheader%2F2?alt=media&token=65eb34a3-68a9-40e2-aa91-8f6381a7e4c1"
          }
          alt="#"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="object-cover h-full w-full"
          src={
            "https://firebasestorage.googleapis.com/v0/b/bptd3sumbar-5025f.appspot.com/o/image%2Fheader%2F3?alt=media&token=65eb34a3-68a9-40e2-aa91-8f6381a7e4c1"
          }
          alt="#"
        />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img
          className="object-cover h-full w-full"
          src={
            "https://firebasestorage.googleapis.com/v0/b/bptd3sumbar-5025f.appspot.com/o/image%2Fheader%2F4?alt=media&token=65eb34a3-68a9-40e2-aa91-8f6381a7e4c1"
          }
          alt="#"
        />
      </SwiperSlide>
    </Swiper>
  );
}
