/* eslint-disable @next/next/no-img-element */
import "dayjs/locale/id";
import { doc, updateDoc } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import React from "react";
import Ig from "../../../public/ig.jpg";
import Ig1 from "../../../public/ig1.jpg";
import Ig2 from "../../../public/ig2.jpg";
import Ig3 from "../../../public/ig3.jpg";
import Ig4 from "../../../public/ig4.jpg";
import Ig5 from "../../../public/ig5.jpg";
import { db } from "../../server/firebaseSDK";
export default function Youtube() {
  const data = [
    { img: Ig, href: "https://www.instagram.com/p/CpCWvjXvNOm/?next=%2F" },
    { img: Ig1, href: "https://www.instagram.com/p/CpCTNWUPurv/?next=%2F" },
    { img: Ig2, href: "https://www.instagram.com/p/Co9Yl0FP7UK/?next=%2F" },
    { img: Ig3, href: "https://www.instagram.com/p/Co9UXQLvNgO/?next=%2F" },
    { img: Ig4, href: "https://www.instagram.com/p/Co9SRuzP16A/?next=%2F" },
    { img: Ig5, href: "https://www.instagram.com/p/CotlsaLLBO7/?next=%2F" },
  ];
  const route = useRouter();
  return (
    <div className="flex items-center justify-center w-full h-full">
      {/* Carousel for desktop and large size devices */}
      <CarouselProvider
        className="lg:block hidden"
        isIntrinsicHeight={true}
        totalSlides={data.length}
        visibleSlides={4}
        step={3}
        infinite={true}
      >
        <div className="w-full relative flex items-center justify-center">
          <ButtonBack
            role="button"
            aria-label="slide backward"
            className="bg-slate-900 p-2 rounded-lg bg-opacity-50 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
            id="prev"
          >
            <svg
              width={8}
              height={14}
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1L1 7L7 13"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ButtonBack>
          <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
            <Slider>
              <div
                id="slider"
                className=" rounded-lg h-full flex lg:gap-4 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
              >
                {data.map((e, i) => {
                  return (
                    <Slide
                      className="hover:cursor-pointer rounded-lg"
                      onClick={async () => {
                        route.push(e.href);
                      }}
                      key={i}
                      index={i}
                    >
                      <div className="flex flex-shrink-0 relative h-[200px] sm:w-auto">
                        <Image
                          src={e.img}
                          alt="#"
                          className="object-cover object-center w-full  rounded-lg"
                        />
                      </div>
                    </Slide>
                  );
                })}
              </div>
            </Slider>
          </div>
          <ButtonNext
            role="button"
            aria-label="slide forward"
            className="bg-slate-900 p-2 rounded-lg bg-opacity-50 absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            id="next"
          >
            <svg
              width={8}
              height={14}
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L1 13"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ButtonNext>
        </div>
      </CarouselProvider>

      {/* Carousel for tablet and medium size devices */}
      {/* <CarouselProvider
            className="lg:hidden md:block hidden"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={dataCarousel.length}
            visibleSlides={2}
            step={1}
            infinite={true}
          >
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                id="prev"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div
                    id="slider"
                    className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                  >
                    {dataCarousel.map((e, i) => (
                      <Slide key={i} index={i}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src="https://i.ibb.co/fDngH9G/carosel-1.png"
                            alt="black chair and white table"
                            className="object-cover object-center w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                              Catalog 1
                            </h2>
                            <div className="flex h-full items-end pb-6">
                              <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                Minimal Interior
                              </h3>
                            </div>
                          </div>
                        </div>
                      </Slide>
                    ))}
                  </div>
                </Slider>
              </div>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                id="next"
              >
                <svg
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider> */}

      {/* Carousel for mobile and Small size Devices */}
      <CarouselProvider
        className="block md:hidden"
        naturalSlideWidth={100}
        isIntrinsicHeight={true}
        totalSlides={data.length}
        visibleSlides={1}
        step={1}
        infinite={true}
      >
        <div className="w-full relative flex items-center justify-center">
          <ButtonBack
            role="button"
            aria-label="slide backward"
            className="absolute bg-slate-900 p-2 z-30 rounded-lg bg-opacity-50 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
            id="prev"
          >
            <svg
              width={8}
              height={14}
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1L1 7L7 13"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ButtonBack>
          <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
            <Slider>
              <div
                id="slider"
                className="h-full w-full flex gap-4 lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
              >
                {data.map((e, i) => {
                  return (
                    <Slide
                      className="rounded-lg"
                      onClick={async () => {
                        const frankDocRef = doc(db, "berita", `${e.id}`);
                        await updateDoc(frankDocRef, {
                          dilihat: data.dilihat + 1,
                        });
                        route.push(`/berita/${e.id}`);
                      }}
                      key={i}
                      index={i}
                    >
                      <div className="flex flex-shrink-0 relative w-full h-52 rounded-lg">
                        <Image
                          src={e.img}
                          alt="#"
                          className="object-cover object-center w-full rounded-lg"
                        />
                      </div>
                    </Slide>
                  );
                })}
              </div>
            </Slider>
          </div>
          <ButtonNext
            role="button"
            aria-label="slide forward"
            className="bg-slate-900 p-2 rounded-lg bg-opacity-50 absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            id="next"
          >
            <svg
              width={8}
              height={14}
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L1 13"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
}
