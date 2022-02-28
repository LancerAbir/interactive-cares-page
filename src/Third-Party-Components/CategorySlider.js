import React from "react";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const CategorySlider = () => {
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="category__slider__box">
                        <img
                            src="/img/Entrepreneur.svg"
                            alt="Category Slider"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category__slider__box">
                        <img
                            src="/img/Academic-Course.svg"
                            alt="Category Slider"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category__slider__box">
                        <img src="/img/Web-Dev.svg" alt="Category Slider" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category__slider__box">
                        <img src="/img/CV-writing.svg" alt="Category Slider" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category__slider__box">
                        <img src="/img/Branding.svg" alt="Category Slider" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category__slider__box">
                        <img src="/img/Case-study.svg" alt="Category Slider" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category__slider__box">
                        <img
                            src="/img/Personal-Development.svg"
                            alt="Category Slider"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category__slider__box">
                        <img src="/img/IELTS.svg" alt="Category Slider" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category__slider__box">
                        <img src="/img/Interviiew.svg" alt="Category Slider" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category__slider__box">
                        <img src="/img/Excel.svg" alt="Category Slider" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category__slider__box">
                        <img
                            src="/img/Video-eediting.svg"
                            alt="Category Slider"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category__slider__box">
                        <img src="/img/GRE.svg" alt="Category Slider" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category__slider__box">
                        <img src="/img/Graphic.svg" alt="Category Slider" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category__slider__box">
                        <img src="/img/Maths.svg" alt="Category Slider" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category__slider__box">
                        <img src="/img/En" alt="Category Slider" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default CategorySlider;
