import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Post from "../components/Post/Post";
import { Navigation } from 'swiper/modules';

const SelectedExperiences: React.FC = () => {
    return (
        <div className='lg:container mx-auto my-24 max-md:my-9 py-11 px-20 max-md:py-8 max-md:px-4 pb-24 bg-bg-body rounded-lg relative'>
            <p className='text-color-text text-2xl font-black max-md:text-base'>تجربه‌های منتخب</p>
            
            <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={2} // مقدار پیش‌فرض
                navigation
                preventClicks={false}
                preventClicksPropagation={false}
                breakpoints={{
                    640: { slidesPerView: 1 }, // نمایش 1 اسلاید در گوشی
                    768: { slidesPerView: 2 }, // نمایش 2 اسلاید در تبلت
                    1024: { slidesPerView: 2 }, // نمایش 2 اسلاید در دسکتاپ
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
        </div>
    );
};

export default SelectedExperiences;

