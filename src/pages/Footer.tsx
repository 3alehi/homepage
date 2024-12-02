import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className='bg-bg-body'>
            <div className=' lg:container mx-auto py-8 '>

            <div className='flex items-center justify-center w-full'>
                        <img src="src\assets\Vector.webp" className='w-8 h-8' alt="" />
                        <img src="src\assets\Layer_1.webp" className='w-30 h-10' alt="" />
                    </div>
                    <hr className='my-5' />
                    <div className='flex justify-center'>
                    <p className='w-[50%] max-md:w-full text-text-gray leading-7'>در شبکه اجتماعی مردمی فعالان حجاب، تجربه‌ها و ایده‌های خود را در قالب عکس ، متن ، فیلم و صوت و حتی به پیوست مستندات منتشر کنید و نقد و نظر سایرین را جویا شوید و از دیگران هم دعوت کنید تا به نرم افزار بپیوندند.</p>

                    </div>
                    <p className='flex justify-center mt-10 text-text-gray'>نسخه ۱.۰</p>
                    </div>
            
        </div>
    );
};

export default Footer;