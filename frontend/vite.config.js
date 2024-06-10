import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     chunkSizeWarningLimit: 500, 
//   },
// })
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    chunkSizeWarningLimit: 500, 
  },
})
