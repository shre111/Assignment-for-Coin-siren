import Image from 'next/image';
import React from 'react';

function Slider({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="w-[332px] flex items-center bg-white/50 text-white p-4 rounded-md gap-2">
          {/* Replace this with the icon image */}
          <Image src={item?.icon} alt="Icon" className="rounded-md w-10 h-10 p-[10px] bg-white/50" />
          <p className="text-lg font-bold">{item.text}</p>
        </div>
      ))}
    </>
  );
}

export default Slider;
