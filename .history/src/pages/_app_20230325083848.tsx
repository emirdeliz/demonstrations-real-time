import { useState, useMemo } from 'react';
import { Reset } from 'styled-reset';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { LoadingProvider } from '@/atoms';
import { AppTheme, AppThemeColorDark, AppThemeColorLight } from '@/theme';
import './global.style';

const barlow = Barlow({ weight: '400' });

const App = ({ Component, pageProps }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const themeToggler = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = useMemo<DefaultTheme>(() => {
    return {
      ...AppTheme,
      color: isDarkMode ? AppThemeColorDark : AppThemeColorLight,
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
};

export default App;
