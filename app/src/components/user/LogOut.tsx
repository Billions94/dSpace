'use client';

import { getStoreState, useAppStore } from '@/app/src/store/Zustand';
import { UiButton } from '@/packages/button';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const LogOut = () => {
  const router = useRouter();
  const path = usePathname();
  const { logUserOut, setCurrentUserRoute } = useAppStore(getStoreState);

  useEffect(() => {
    setCurrentUserRoute(path);
  }, []);

  return (
    <UiButton
      {...{
        onClick: () => {
          logUserOut();
          router.push('/login');
        },
        size: 'sm',
        className: `absolute top:50`,
        variant: 'bordered',
        color: 'warning',
      }}
    >
      <span className="text-orange-400">logout</span>
    </UiButton>
  );
};
