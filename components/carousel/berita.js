/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { Player } from "@lottiefiles/react-lottie-player";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Autoplay, EffectCube, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { db } from "../../server/firebaseSDK";
import styles from "../../styles/Home.module.css";

export default function ComCarouselBerita() {
  dayjs.locale("id");
  dayjs.extend(relativeTime);
  const snapshot = useRef(null);
  const [isLoading, setIsloading] = useState(true);
  const getDBFromFirestore = async () => {
    const querySnapshot = query(
      collection(db, "berita"),
      orderBy("tanggal", "desc"),
      limit(10)
    );
    const gettt = await getDocs(querySnapshot);
    snapshot.current = gettt.docs;

    setIsloading(false);
  };

  useEffect(() => {
    getDBFromFirestore();
  }, []);

  if (isLoading) {
    return (
      <div className={styles.main}>
        <Player
          className="h-[100px]"
          autoplay
          loop
          src="https://assets3.lottiefiles.com/packages/lf20_b88nh30c.json"
          alt="2d"
        />
      </div>
    );
  } else {
    const post = snapshot.current;
    const data = Object.values(post);

    return (
      <section>
        {/* 1 */}
        <Swiper
          className="h-[400px] md:hidden"
          // install Swiper modules
          modules={[Pagination, Scrollbar, Autoplay]}
          spaceBetween={8}
          slidesPerView={1}
          loop={true}
          effect={EffectCube}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {data.map((item) => {
            const itemm = item.data();

            return (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col justify-between text-left">
                  <figure className="h-[150px] w-full mb-3">
                    <img
                      className="object-cover h-full w-full rounded-lg"
                      src={`https://firebasestorage.googleapis.com/v0/b/bptd3sumbar-24e51.appspot.com/o/image%2F${itemm.gambar}?alt=media&token=7cc6415f-ddfd-4e27-b730-a0d2a5e5a886`}
                      alt="2"
                    />
                  </figure>
                  <div className="text-justify mb-3 font-bold">
                    <h1 className={styles.truncate2}>{itemm.judul_berita}</h1>
                  </div>
                  <div className="text-justify mb-4">
                    <h1 className={styles.truncate3}>{itemm.isi_berita}</h1>
                  </div>

                  <Link
                    href={`/berita/${item.id}`}
                    className="bg-slate-900 text-white py-2 px-3 pt-2 text-center rounded-lg"
                  >
                    Selengkapnya
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* 2 */}
        <Swiper
          className="h-[200px] hidden md:block lg:hidden"
          // install Swiper modules
          modules={[Pagination, Scrollbar, Autoplay]}
          spaceBetween={8}
          slidesPerView={2}
          loop={true}
          effect={EffectCube}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            type: "custom",
          }}
        >
          {data.map((item) => {
            const itemm = item.data();

            return (
              <SwiperSlide key={item.id}>
                <div className="flex flex-row">
                  <figure className=" h-[200px] w-[200px]">
                    <img
                      className="object-cover h-full w-full rounded-lg"
                      src={`https://firebasestorage.googleapis.com/v0/b/bptd3sumbar-24e51.appspot.com/o/image%2F${itemm.gambar}?alt=media&token=7cc6415f-ddfd-4e27-b730-a0d2a5e5a886`}
                      alt="2"
                    />
                  </figure>

                  <div className="flex flex-col px-4 justify-between">
                    <div className="w-[200px] text-left font-bold">
                      <h1 className={styles.truncate2}>{itemm.judul_berita}</h1>
                    </div>
                    <div className="w-[200px]  text-justify">
                      <h1 className={styles.truncate4}>{itemm.isi_berita}</h1>
                    </div>

                    <Link
                      href={`/berita/${item.id}`}
                      className="bg-slate-700 py-1 px-3 pt-2 text-center rounded-md"
                    >
                      Selengkapnya
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* 3 */}
        <Swiper
          className="h-[200px] hidden lg:block"
          // install Swiper modules
          modules={[Pagination, Scrollbar, Autoplay]}
          spaceBetween={8}
          slidesPerView={3}
          loop={true}
          effect={EffectCube}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            type: "custom",
          }}
        >
          {data.map((item) => {
            const itemm = item.data();

            return (
              <SwiperSlide key={item.id}>
                <div className="flex flex-row">
                  <figure className=" h-[200px] w-[200px] overflow-clip rounded-lg">
                    <img
                      className="object-cover h-full w-full  hover:scale-110 duration-1000"
                      src={`https://firebasestorage.googleapis.com/v0/b/bptd3sumbar-24e51.appspot.com/o/image%2F${itemm.gambar}?alt=media&token=7cc6415f-ddfd-4e27-b730-a0d2a5e5a886`}
                      alt="2"
                    />
                  </figure>
                  <div className="flex flex-col px-4 justify-between mb-2">
                    <div className="w-[200px] text-left font-bold">
                      <h1 className={styles.truncate2}>{itemm.judul_berita}</h1>
                    </div>
                    <div className="w-[200px]  text-justify">
                      <h1 className={styles.truncate4}>{itemm.isi_berita}</h1>
                    </div>

                    <Link
                      href={`/berita/${item.id}`}
                      className="hover:bg-slate-900 shadow-xl hover:shadow-xl  text-slate-900 duration-1000 hover:text-slate-50 px-2 py-1 text-xs text-center rounded-lg"
                    >
                      Selengkapnya
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    );
  }
}
