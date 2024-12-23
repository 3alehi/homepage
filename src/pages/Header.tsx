import React from 'react';
import Button from '../components/Button';

const Header: React.FC = () => {
    return (
        <div className='bg-bg-body py-5 '>
            <div className='  lg:container mx-auto max-md:px-4'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center max-md:mb-3'>
                        <img src="src\assets\Vector.webp" className='w-8 h-8 max-md:w-6 max-md:h-6' alt="" />
                        <img src="src\assets\Layer_1.webp" className='w-30 h-10 max-md:w-28 max-md:h-8' alt="" />
                    </div>
                    <Button title='ورود / ثبت نام' icon='icon-sign-in'/>

                </div>
                <hr className='mt-5 max-md:mt-3' />
                <div className='my-8 grid grid-cols-2 max-md:grid-cols-1'>
                    <div className=' max-md:order-2'>
<h1 className='text-[64px] font-bold text-dark-green  max-md:text-[32px]'>شبکه اجتماعی مردمی فعالان حجاب</h1>
<p className=" font-medium text-2xl max-md:text-[16px] leading-11 max-md:leading-7 text-justify text-text-gray my-4 ">
  فضایی ساخته‌ایم برای علاقمندان به حجاب تا همدیگر را پیدا کنیم و دربارۀ تجربه‌هایمان حرف بزنیم.
  معتقدیم که حجاب و عفاف فقط یک پوشش ظاهری نیست، بلکه سبک زندگی و فلسفه‌ای است که می‌تواند زندگی ما را به سمت سعادت و کمال رهنمون کند.
  به ما بپیوندید!
</p>

                  <Button title='به ما بپیوند' icon=''/>  
                    </div>
                    <div className='flex justify-center items-center max-md:order-1 max-md:mb-4'>
                    <img src="src\assets\Group 7291.webp" className='h-[456px] w-[426.26px] max-md:w-[159.85px] max-md:h-[171px]' alt="" />

                    </div>

                </div>

            
            </div>
        </div>
    );
};

export default Header;