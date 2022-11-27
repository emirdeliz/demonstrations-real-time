import { useState, useMemo } from 'react';
import type { AppProps } from 'next/app';
import { Barlow } from '@next/font/google';
import { Reset } from 'styled-reset';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { LoadingProvider } from '@/framework';
import { DRITheme, DRIThemeColorDark, DRIThemeColorLight } from '@/theme';
import * as S from './global.style';

const barlow = Barlow({ weight: '400' });

const App = ({ Component, pageProps }: AppProps) => {
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
      <S.Global />
      <main className={barlow.className}>
        <ThemeProvider theme={theme}>
          <LoadingProvider>
            <Component {...pageProps} />
          </LoadingProvider>
        </ThemeProvider>
      </main>
    </>
  );
};

export default App;
