import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Crousel = () => {
  const images = [
    "https://img.lazcdn.com/us/domino/a3f182f2-240f-4e66-80b0-5c9710b68a21_PK-1976-688.jpg_2200x2200q80.jpg_.webp",
    "https://img.lazcdn.com/us/domino/155b0275-3101-4a78-ab12-2724891122c4_PK-1976-688.jpg_2200x2200q80.jpg_.webp",
    "https://img.lazcdn.com/us/domino/b97596f5-2266-4758-8e82-01608445732b_PK-1976-688.jpg_2200x2200q80.jpg_.webp",
    "https://img.lazcdn.com/us/domino/e373c4d3-c451-44aa-a293-32bd1f90eb78_PK-1976-688.jpg_2200x2200q80.jpg_.webp",
    "https://img.lazcdn.com/us/domino/29361361-c0aa-4c69-8f76-1cd9855c13c7_PK-1976-688.jpg_2200x2200q80.jpg_.webp",
  ];


  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      slidesPerView={1}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Crousel;
