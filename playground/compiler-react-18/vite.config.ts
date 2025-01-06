import { defineConfig } from 'vite'
import react from '@dhw/plugin-react-native-web'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    server: { port: 8901 /* Should be unique */ },
    plugins: [
      react({
        babel: {
          plugins: [['babel-plugin-react-compiler', { target: '18' }]],
        },
      }),
    ],
  }
})
