import React from 'react';
import Image from 'next/image';

const EducationCard = ({ imageSrc, altText, title, subtitle, detail }) => {
  return (
    <div className="flex items-center gap-3 w-fit">
      {/* <Image
        src={imageSrc}
        alt={altText}
        width={60}
        height={60}
        className="rounded-md"
      /> */}
      <div className="text-sm leading-tight text-white/90">
        <p className="">{title}</p>
        <p className="text-white/70">{subtitle}</p>
        <p className="text-white/50">{detail}</p>
      </div>
    </div>
  );
};

export default EducationCard;
