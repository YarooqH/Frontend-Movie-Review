import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost"],
  },
  plugins: [react()]
})
