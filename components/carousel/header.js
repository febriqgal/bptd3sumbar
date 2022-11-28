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
          src="http://dephub.go.id/photos/resized/600x340/pelantikan-pejabat.jpg"
          alt="s"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="object-cover h-full w-full"
          src="https://dishub.jakarta.go.id/wp-content/uploads/2020/07/109916429_2049242598545694_4648979507240775700_o.jpg"
          alt="s"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="object-cover h-full w-full"
          src="https://images.bisnis-cdn.com/posts/2021/09/03/1437380/kemenhub-gedung.jpg"
          alt="s"
        />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img
          className="object-cover h-full w-full"
          src="https://asset.kompas.com/crops/XnmGK3yIooeOIeOk5ewYErp2KsI=/258x0:798x360/750x500/data/photo/2020/06/11/5ee192520867f.jpg"
          alt="s"
        />
      </SwiperSlide>
    </Swiper>
  );
}
