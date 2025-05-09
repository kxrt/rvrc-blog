import * as React from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

function SwipeableTextMobileStepper({ images }) {
  return (
    images && (
      <Box sx={{ flexGrow: 1 }}>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          slidesPerView={1}
        >
          {images.map((step) => (
            <SwiperSlide key={step.label}>
              <Box
                component="img"
                sx={{ display: "block", width: "100%" }}
                src={step.imgPath}
                alt={step.label}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    )
  );
}

export default SwipeableTextMobileStepper;
