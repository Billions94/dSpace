import { Image } from '@nextui-org/image';
import React from 'react';

interface WallpaperProps {
  src?: string;
  customClassName?: string;
}

export const Wallpaper: React.FC<WallpaperProps> = ({
  src = 'https://miro.medium.com/v2/resize:fit:668/format:webp/1*YlyJOGMvVLDrlZryjSYaIA.png',
  customClassName,
}) => {
  const className = {
    container: 'absolute',
    image: 'z-0 top-50 left-1/2 -translate-x-1/2 object-fill w-full',
  };
  return (
    <div className={className.container}>
      <Image
        {...{
          src,
          className: customClassName ? customClassName : className.image,
          alt: 'bg-image',
        }}
      />
    </div>
  );
};
