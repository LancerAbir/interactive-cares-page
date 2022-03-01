import React from "react";
// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

const FeedbackSlider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        src="/img/Interactive-Cares-Testimonial-1.png"
                        alt="Feedback Slider"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/img/Interactive-Cares-Testimonial-2.png"
                        alt="Feedback Slider"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/img/Interactive-Cares-Testimonial-3.png"
                        alt="Feedback Slider"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/img/Interactive-Cares-Testimonial-4.png"
                        alt="Feedback Slider"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/img/Interactive-Cares-Testimonial-5.png"
                        alt="Feedback Slider"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/img/Interactive-Cares-Testimonial-6.png"
                        alt="Feedback Slider"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default FeedbackSlider;
