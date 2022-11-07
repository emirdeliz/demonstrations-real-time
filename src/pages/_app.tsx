import type { AppProps } from 'next/app';
import { Barlow } from '@next/font/google';
import { useState, useMemo } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { LoadingProvider } from 'ui/framework';
import { DRITheme, DRIThemeColorDark, DRIThemeColorLight } from 'ui/theme';

const barlow = Barlow({weight: '400'});

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
