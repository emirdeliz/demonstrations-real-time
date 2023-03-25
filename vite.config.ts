import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@atoms': path.resolve(__dirname, 'src/ui/atoms'),
      '@molecules': path.resolve(__dirname, 'src/ui/molecules'),
      '@organisms': path.resolve(__dirname, 'src/ui/organisms'),
      '@components': path.resolve(__dirname, 'src/ui/components'),
      '@theme': path.resolve(__dirname, 'src/ui/system/theme'),
      '@i18n': path.resolve(__dirname, 'src/ui/system/i18n'),
      '@pages': path.resolve(__dirname, 'src/ui/pages'),
      '@stories': path.resolve(__dirname, 'src/ui/stories'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@test': path.resolve(__dirname, 'test'),
    },
  },
});
