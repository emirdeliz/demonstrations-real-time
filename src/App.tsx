import { useState, useMemo } from 'react';
import { Reset } from 'styled-reset';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { LoadingProvider } from '@atoms';
import { AppTheme, AppThemeColorDark, AppThemeColorLight } from '@theme';
import { HomePage } from '@pages';
import * as S from './App.style';

const App = () => {
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
      <S.Global />
      <main>
        <ThemeProvider theme={theme}>
          <LoadingProvider>
            <HomePage />
          </LoadingProvider>
        </ThemeProvider>
      </main>
    </>
  );
};

export default App;
