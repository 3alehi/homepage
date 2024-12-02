import React from "react";
import Button from "./Button";

interface CardProps {
  icon: string;
  title: string;
  desc: string;
  titleBtn: string;
}

const CardBox: React.FC<CardProps> = ({ icon, title, desc, titleBtn }) => {
  return (
    <div className="bg-bg-body w-80 flex-shrink-0 rounded-3xl py-16 px-7 flex flex-col items-center justify-center">
      <i className={`${icon} text-6xl`}></i>

      <p className="text-2xl font-black my-3 text-center">{title}</p>

<p className="text-base text-text-gray mb-4 text-center line-clamp-2">
  {desc}
</p>

      <Button title={titleBtn} icon=""></Button>
    </div>
  );
};

export default CardBox;
