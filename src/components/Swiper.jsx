// import React from "react";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Virtual } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card from "./Card";

const CardSwiper = ({ data = [], album = false }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={7}
      navigation
      style={{
        "--swiper-navigation-color": "#ffff",
        "--swiper-navigation-size": "16px",
        "--swiper-navigation-top-offset": "40%",
      }}
      //   pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      breakpoints={{
        400: {
          slidesPerView: 2,
          //   spaceBetween: 20,
        },
        788: {
          slidesPerView: 4,
          //   spaceBetween: 30,
        },
        1024: {
          slidesPerView: 6,
          //   spaceBetween: 40,
        },
        1424: {
          slidesPerView: 7,
          //   spaceBetween: 40,
        },
      }}
    >
      {data?.map((item) => (
        <SwiperSlide key={item.id}>
          <Card
            imgPath={item.image}
            name={item.title}
            chipName={`${item.likes ? item.likes : item.follows} ${
              item.likes ? "Likes" : "Follows"
            }`}
            album={album}
            data={{ ...item }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSwiper;
