import React from 'react';
interface ButtonProps {
    title : string,
    icon : string,
    width: string
}
const Button: React.FC<ButtonProps> = ({title , icon , width}) => {
    console.log(width);
    
    return <button className={`bg-dark-green text-white rounded-lg ${width && `max-md:w-${width}`} max-md:justify-center px-9 py-2 flex items-center max-md:px-3 text-sm`}> {icon && <i className={`${icon} ml-4`}></i>}{title}</button>
};

export default Button;