import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '../ui/dropdown-menu';
import Button from '../Button';
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
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation(); // جلوگیری از propagation رویداد کلیک
        alert('Button clicked!');
    };
    return (
        <div className='bg-white px-3 py-4 rounded-lg mt-5 max-md:w-96  mx-8  '>
 <div className='flex justify-between'>
    <div className='flex items-center'>
        <img className='w-8 h-8 rounded-full' src="https://s3-alpha-sig.figma.com/img/85e1/3428/a12cc42d823aa54ab70c722749b08d85?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VvMm-NHPZVKdyTqwv20w4NzCaH78p7rrYzFJKa~pytSEUFlyK6Zs5lZoZmCLisZrUtY6kSDtF9KDo3Kz7SuvCvdXzC6aZxP7Z~z6IU6KS7BZkJgip5pj72YJLxk47UxquzSV6p3CRoD6~CY-YoqAeS8NNqkrE6CVSJaRwgkUXPRP2DHs6QwHbTe2H6Z0f3390ySOOs8hDT3IqrGac8Q5fwHuuA-uI38OFIGkZ2tPGYjhdjDpmAVG2F7HaWPYIR~4azEXipgg70KwR1iM1R1wYOBhoin8OxRCfCNK7RidiXlholno2N4sbEt6MOdMCC3-iZZBMnqn11Tr2zmDPlAarg__" alt="" />
   <p className='mx-4 text-user-color'>همدل 1</p>
    </div>
 <DropdownMenu onOpenChange={()=>console.log('asas')}>
  <DropdownMenuTrigger  className='p-3' ><svg width="6" height="20" viewBox="0 0 6 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 15.25C3.79688 15.25 4.5 15.7188 4.92188 16.375C5.34375 17.0781 5.34375 17.9688 4.92188 18.625C4.5 19.3281 3.79688 19.75 3 19.75C2.15625 19.75 1.45312 19.3281 1.03125 18.625C0.609375 17.9688 0.609375 17.0781 1.03125 16.375C1.45312 15.7188 2.15625 15.25 3 15.25ZM3 7.75C3.79688 7.75 4.5 8.21875 4.92188 8.875C5.34375 9.57812 5.34375 10.4688 4.92188 11.125C4.5 11.8281 3.79688 12.25 3 12.25C2.15625 12.25 1.45312 11.8281 1.03125 11.125C0.609375 10.4688 0.609375 9.57812 1.03125 8.875C1.45312 8.21875 2.15625 7.75 3 7.75ZM5.25 2.5C5.25 3.34375 4.78125 4.04688 4.125 4.46875C3.42188 4.89062 2.53125 4.89062 1.875 4.46875C1.17188 4.04688 0.75 3.34375 0.75 2.5C0.75 1.70312 1.17188 1 1.875 0.578125C2.53125 0.15625 3.42188 0.15625 4.125 0.578125C4.78125 1 5.25 1.70312 5.25 2.5Z" fill="#737373"/>
</svg>
</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
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