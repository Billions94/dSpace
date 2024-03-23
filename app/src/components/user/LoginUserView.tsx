'use client';

import React, { ReactNode } from 'react';

export const LoginUserView: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  return <div className="flex justify-center">{children}</div>;
};
