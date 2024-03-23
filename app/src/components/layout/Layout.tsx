'use client';

import React from 'react';
import { useAuthorizationGuard } from '@/packages/utils/hooks';

export const Layout: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  useAuthorizationGuard();
  return <div>{children}</div>;
};
