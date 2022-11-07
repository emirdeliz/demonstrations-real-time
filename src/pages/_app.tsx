import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { DRIThemeDefinition } from 'ui/theme';

const theme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
} as DRIThemeDefinition;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
