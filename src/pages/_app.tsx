import type { AppProps } from 'next/app';
import { useState, useMemo } from 'react';
import { Reset } from 'styled-reset';
import { Barlow } from '@next/font/google';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { LoadingProvider } from '@/framework';
import { DRITheme, DRIThemeColorDark, DRIThemeColorLight } from '@/theme';

const barlow = Barlow({ weight: '400' });

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const themeToggler = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = useMemo<DefaultTheme>(() => {
    return {
      ...DRITheme,
      color: isDarkMode ? DRIThemeColorDark : DRIThemeColorLight,
    };
  }, [isDarkMode]);

  return (
    <>
      <Reset />
      <main className={barlow.className}>
        <ThemeProvider theme={theme}>
          <LoadingProvider>
            <Component {...pageProps} />
          </LoadingProvider>
        </ThemeProvider>
      </main>
    </>
  );
}
