/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import { A11y, Pagination, Scrollbar, Autoplay, EffectCube } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
export default function ComCarouselAplikasidanLayanan() {
  const ref = useRef(null);

  return (
    <section>
      <Swiper
        className="h-[300px]"
        // install Swiper modules
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={8}
        slidesPerView={5}
        loop={true}
        effect={EffectCube}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          type: "custom",
        }}
        scrollbar={{ draggable: true, hide: true }}
      >
        <SwiperSlide>
          <img
            className="object-cover object-center"
            src="https://hubdat.dephub.go.id/media/original_images/Logo_SISTEM_INFORMASI_PEMERIKSAAN_KENDARAAN_BERMOTOR.png"
            alt="s"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover h-full w-full"
            src="https://picsum.photos/id/238/2080/900"
            alt="s"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover h-full w-full"
            src="https://picsum.photos/id/239/2080/900"
            alt="s"
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            className="object-cover h-full w-full"
            src="https://picsum.photos/id/240/2080/900"
            alt="s"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
