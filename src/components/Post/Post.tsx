import React from 'react';

interface PostProps{
    Attachedfile : number ,
    Opinion : number ,
    Like : number ,
    Profile : string,
    Name:string,
    title:string,
    desc: string
}
const Post: React.FC<PostProps> = () => {

    return (
        <div className='bg-white px-3 py-4 rounded-lg   w-full cursor-pointer  '>
 <div className='flex justify-between'>
    <div className='flex items-center'>
        <img className='w-8 h-8 rounded-full' src="https://s3-alpha-sig.figma.com/img/85e1/3428/a12cc42d823aa54ab70c722749b08d85?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VvMm-NHPZVKdyTqwv20w4NzCaH78p7rrYzFJKa~pytSEUFlyK6Zs5lZoZmCLisZrUtY6kSDtF9KDo3Kz7SuvCvdXzC6aZxP7Z~z6IU6KS7BZkJgip5pj72YJLxk47UxquzSV6p3CRoD6~CY-YoqAeS8NNqkrE6CVSJaRwgkUXPRP2DHs6QwHbTe2H6Z0f3390ySOOs8hDT3IqrGac8Q5fwHuuA-uI38OFIGkZ2tPGYjhdjDpmAVG2F7HaWPYIR~4azEXipgg70KwR1iM1R1wYOBhoin8OxRCfCNK7RidiXlholno2N4sbEt6MOdMCC3-iZZBMnqn11Tr2zmDPlAarg__" alt="" />
   <p className='mx-4 text-user-color'>همدل 1</p>
    </div>

 </div>
 <p className='mt-6 text-text-gray'>انسان‌های بامحبت در کجا ساکن هستند؟</p>
<p className='text-justify text-text-gray leading-8 line-clamp-4'>انسان‌های بامحبت در دنیای محبت و عشق ساکن هستند و انسان‌های متخاصم نیز در دنیای تخاصم و دشمنی. جالب است که مکان هر دو دنیا مشترک است. عشق جذبه‌ای است از نوع محبّت و مافوق محبّت. مجمع البحرین می‌نویسد: «عشق محبتی است که از حد تجاوز کند و انسان را از حال عادی خارج نماید. پس هر محبتی ملازم عشق نیست اما هر عشقی با محبت همراه است. انواع محبت‌ها در انسان وجود دارد، امّا همة آنها در مرتبة عشق نیستند. دو دوست نسبت به یکدیگر محبت دارند. مرید نسبت به مراد و مرشد خویش محبت دارد اما عشق محبتی دیگر است.</p>
        
        <div className='flex justify-between mt-6 text-xs	text-text-gray'>
            <span>    2 روز پیش  </span>
            <div >
<span className='mx-1'>20 پسند </span><span className='mx-1'>20 نظر </span><span className='mx-1'> 2 فایل پیوست</span>
            </div>
        </div>
        
        </div>
      
    );
};

export default Post;