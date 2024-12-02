import React from 'react';
interface ButtonProps {
    title : string,
    icon : string
}
const Button: React.FC<ButtonProps> = ({title , icon}) => {
    return <button className='bg-dark-green text-white rounded-lg px-9 py-2 flex items-center'> {icon && <i className={`${icon} ml-4`}></i>}{title}</button>
};

export default Button;