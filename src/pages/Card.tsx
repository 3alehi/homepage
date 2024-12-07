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
                slidesPerView={2.5} // نمایش بخشی از اسلاید بعدی
                centeredSlides={false}
                grabCursor={true}
                className='h-[232px] md:h-auto'
                slidesOffsetBefore={16} // فاصله از سمت چپ
                slidesOffsetAfter={16} // فاصله از سمت راست
                breakpoints={{
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 2.2 },
                    1024: { slidesPerView: 3.2 }, 
                }}
            >
                <SwiperSlide className='h-full'>
                    <CardBox 
                        title="انتشار تجربه‌ و ایده" 
                        titleBtn="انتشار" 
                        icon="icon-Home-2" 
                        desc="با انتشار ایده‌ها و تجربه‌های خود با دیگرفعالان حجاب ارتباط بگیرید."
                        width='full'

                    />
                </SwiperSlide>
                <SwiperSlide className='h-full'>
                    <CardBox 
                        title="گروه بسازید." 
                        desc="شروع کنید گروه با قابلیت چت درون گروهی ایجاد و دوستان خود را به آن دعوت کنید." 
                        icon="icon-Home-1" 
                        titleBtn="ایجاد گروه"
                        width='full'

                    />
                </SwiperSlide>
                <SwiperSlide className='h-full'>
                    <CardBox 
                        icon="icon-Home" 
                        title="مدیریت پروژه کنید." 
                        desc="با ایجاد پروژه، به افراد نقش دهید و پیشرفت پروژه را در گروه دنبال کنید." 
                        titleBtn="مدیریت پروژه"
                        width='full'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Card;
