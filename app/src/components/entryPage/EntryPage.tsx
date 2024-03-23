'use client';

import { landingPageImages } from '@/packages/dummy';
import { Image } from '@nextui-org/image';
import { Card, CardBody } from '@nextui-org/card';
import { getStoreState, useAppStore } from '../../store/Zustand';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

export const EntryPage = () => {
  const router = useRouter();
  const { isLoggedIn, getCurrentUserRoute, setCurrentUserRoute } =
    useAppStore(getStoreState);

  const className = {
    container: '',
    imageContainer: 'flex',
    images: 'max-w-[340px] h-full cursor-pointer object-contain',
    card: 'mr-2 ml-2 ',
  };

  const handleClick = useCallback(
    function ({ target }: any) {
      setCurrentUserRoute(target.id);

      if (!isLoggedIn) router.push('/login');
      router.push(getCurrentUserRoute());
    },
    [getCurrentUserRoute, isLoggedIn, router, setCurrentUserRoute]
  );

  return (
    <div className={className.container}>
      <h1>Welcome to developers space</h1>

      <div className={className.imageContainer}>
        {landingPageImages.map((image) => (
          <Card key={image.title} className={className.card}>
            <Image
              id={image.path}
              className={className.images}
              isZoomed
              src={image.url}
              alt={image.title}
              onClick={handleClick}
            />

            <CardBody>{image.title}</CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};
