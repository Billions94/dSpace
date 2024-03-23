'use client';

import { Button } from '@nextui-org/react';
import { ButtonProps } from '@nextui-org/button/';
import React from 'react';

interface UiButtonProps extends ButtonProps {
  containerClassName?: string;
}

export const UiButton: React.FC<UiButtonProps> = ({
  size,
  className,
  children,
  onClick,
  type,
  containerClassName,
}) => {
  return containerClassName ? (
    <>
      <Button {...{ type, size, className, onClick }}>{children}</Button>
    </>
  ) : (
    <div className={containerClassName}>
      <Button {...{ type, size, className, onClick }}>{children}</Button>
    </div>
  );
};
