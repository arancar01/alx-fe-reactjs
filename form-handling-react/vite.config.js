import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsx: 'react',  // تأكد من أن esbuild يعالج JSX
  },
});
