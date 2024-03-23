'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@nextui-org/react';
import { SunIcon, MoonIcon } from '@nextui-org/shared-icons';
import { usePathname } from 'next/navigation';

export const ThemeSwitcher: React.FC = () => {
  const path = usePathname();
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  const className = {
    container: 'absolute top-5 right-0 z-full',
  };

  const toggleTheme = React.useCallback(
    () => (theme === 'dark' ? setTheme('light') : setTheme('dark')),
    [setTheme, theme]
  );

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      defaultSelected
      size="sm"
      color="warning"
      onClick={toggleTheme}
      className={className.container}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    />
  );
};
