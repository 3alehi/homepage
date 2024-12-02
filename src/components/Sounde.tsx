import React, { useRef, useState } from 'react';

interface AudioCardProps {
  img: string;
  user: string;
  title: string;
  audioSrc: string;
  timeAgo: string;
  likes: number;
  comments: number;
}

const AudioCard: React.FC<AudioCardProps> = ({
  img,
  user,
  title,
  audioSrc,
  timeAgo,
  likes,
  comments,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative bg-cover bg-center w-[575px] h-[278px] rounded-2xl shadow-lg overflow-hidden" style={{ backgroundImage: `url(${img})` }}>
      {/* لایه تاریک برای خوانایی متن */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* محتوای کارت */}
      <div className="absolute inset-0 p-4 flex flex-col justify-between">
        {/* بالای کارت */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="https://via.placeholder.com/40" // مسیر آواتار کاربر
              alt={user}
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="text-white text-sm font-bold">{user}</h4>
        </div>

        {/* وسط کارت */}
        <div className="text-white text-right">
          <h1 className="text-lg font-bold">{title}</h1>
        </div>

        {/* پایین کارت */}
        <div className="flex items-center justify-between">
          {/* نوار صوتی */}
          <div className="flex items-center space-x-4">
            <button
              onClick={togglePlay}
              className="bg-black bg-opacity-70 text-white p-2 rounded-full"
            >
              {isPlaying ? '⏸' : '▶️'}
            </button>
            <audio ref={audioRef} src={audioSrc}></audio>
            <span className="text-white text-sm">00:00</span>
          </div>
          {/* اطلاعات اضافی */}
          <div className="text-white text-xs">
            <p>{`${likes} پسند | ${comments} نظر`}</p>
            <p>{timeAgo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioCard;
