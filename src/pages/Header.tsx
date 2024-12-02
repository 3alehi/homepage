import React from 'react';
import Button from '../components/Button';

const Header: React.FC = () => {
    return (
        <div className='bg-bg-body py-5 '>
            <div className='  lg:container mx-auto max-md:px-4'>
                <div className='flex justify-between items-center max-md:flex-col'>
                    <div className='flex items-center max-md:mb-3'>
                        <img src="src\assets\Vector.webp" className='w-8 h-8' alt="" />
                        <img src="src\assets\Layer_1.webp" className='w-30 h-10' alt="" />
                    </div>
                    <Button title='ورود / ثبت نام' icon='icon-sign-in'/>

                </div>
                <hr className='mt-5' />
                <div className='my-8 grid grid-cols-2 max-md:grid-cols-1'>
                    <div className=' max-md:order-2'>
<h1 className='text-[64px] font-bold text-dark-green  max-md:text-[32px]'>شبکه اجتماعی مردمی فعالان حجاب</h1>
<p className=" font-medium text-2xl max-md:text-[16px] leading-11 text-justify text-text-gray my-4 ">
  فضایی ساخته‌ایم برای علاقمندان به حجاب تا همدیگر را پیدا کنیم و دربارۀ تجربه‌هایمان حرف بزنیم.
  معتقدیم که حجاب و عفاف فقط یک پوشش ظاهری نیست، بلکه سبک زندگی و فلسفه‌ای است که می‌تواند زندگی ما را به سمت سعادت و کمال رهنمون کند.
  به ما بپیوندید!
</p>

                  <Button title='به ما بپیوند' icon=''/>  
                    </div>
                    <div className='flex justify-center items-center max-md:order-1'>
                    <img src="src\assets\Group 7291.webp" className='h-[420px] w-[450px]' alt="" />

                    </div>

                </div>

            
            </div>
        </div>
    );
};

export default Header;