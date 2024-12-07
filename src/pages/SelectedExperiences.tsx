import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Post from "../components/Post/Post";
import { Navigation } from 'swiper/modules';

const SelectedExperiences: React.FC = () => {
    const swiperRef = useRef<any>(null); // Ref to access Swiper instance

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <div className='lg:container mx-auto my-24 max-md:my-9 py-11 sm:px-20 max-md:py-8 pb-24 bg-bg-body rounded-lg relative'>
            <p className='text-color-text text-2xl font-black max-md:text-base'>تجربه‌های منتخب</p>
            
            <Swiper
                ref={swiperRef}
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={1.2}
                preventClicks={false}
                slidesOffsetBefore={16}
                slidesOffsetAfter={16}
                preventClicksPropagation={false}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2 },
                }}
                className="mt-8"
            >
                <SwiperSlide className="w-full">
                    <Post />
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <Post />
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <Post />
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <Post />
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <Post />
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <Post />
                </SwiperSlide>
            </Swiper>

            {/* Custom Buttons */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
                <button onClick={handleNext} className="text-2xl text-color-text">
                <svg width="18" height="31" viewBox="0 0 18 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.30469 14.3047L14.8047 0.875C15.4375 0.171875 16.4922 0.171875 17.1953 0.875C17.8281 1.50781 17.8281 2.5625 17.1953 3.19531L4.82031 15.5L17.125 27.875C17.8281 28.5078 17.8281 29.5625 17.125 30.1953C16.4922 30.8984 15.4375 30.8984 14.8047 30.1953L1.30469 16.6953C0.601562 16.0625 0.601562 15.0078 1.30469 14.3047Z" fill="#737373"/>
</svg>
                </button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
                <button onClick={handlePrev} className="text-2xl text-color-text">
                <svg width="18" height="31" viewBox="0 0 18 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6953 14.3047C17.3281 15.0078 17.3281 16.0625 16.6953 16.6953L3.19531 30.1953C2.49219 30.8984 1.4375 30.8984 0.804688 30.1953C0.101562 29.5625 0.101562 28.5078 0.804688 27.875L13.1094 15.5703L0.804688 3.19531C0.101562 2.5625 0.101562 1.50781 0.804688 0.875C1.4375 0.171875 2.49219 0.171875 3.125 0.875L16.6953 14.3047Z" fill="#737373"/>
</svg>
                </button>
            </div>
         
        </div>
    );
};

export default SelectedExperiences;
