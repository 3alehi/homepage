import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';

import CardBox from '../components/CardBox';

const Card: React.FC = () => {
    return (
        <div className="bg-white mt-24 max-md:mt-9 lg:container mx-auto ">
            <Swiper
                spaceBetween={16} // فاصله بین اسلایدها
                slidesPerView={1.8} // نمایش بخشی از اسلاید بعدی
                centeredSlides={false}
                grabCursor={true}
                slidesOffsetBefore={16} // فاصله از سمت چپ
                slidesOffsetAfter={16} // فاصله از سمت راست
                breakpoints={{
                    640: { slidesPerView: 1.2 },
                    768: { slidesPerView: 2.2 },
                    1024: { slidesPerView: 3.2 }, 
                }}
            >
                <SwiperSlide>
                    <CardBox 
                        title="انتشار تجربه‌ و ایده" 
                        titleBtn="انتشار" 
                        icon="icon-Home-2" 
                        desc="با انتشار ایده‌ها و تجربه‌های خود با دیگرفعالان حجاب ارتباط بگیرید."
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardBox 
                        title="گروه بسازید." 
                        desc="شروع کنید گروه با قابلیت چت درون گروهی ایجاد و دوستان خود را به آن دعوت کنید." 
                        icon="icon-Home-1" 
                        titleBtn="ایجاد گروه"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardBox 
                        icon="icon-Home" 
                        title="مدیریت پروژه کنید." 
                        desc="با ایجاد پروژه، به افراد نقش دهید و پیشرفت پروژه را در گروه دنبال کنید." 
                        titleBtn="مدیریت پروژه"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Card;
