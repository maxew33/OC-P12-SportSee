import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/OC-P12-SportSee/',
  plugins: [react()],
  define: {
      'process.env.BASE_URL': JSON.stringify('/OC-P12-SportSee/'),
  },
})
