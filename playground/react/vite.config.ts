import react from '@dhw/plugin-react-native-web'
import type { UserConfig } from 'vite'

const config: UserConfig = {
  server: { port: 8902 /* Should be unique */ },
  mode: 'development',
  plugins: [react()],
  build: {
    // to make tests faster
    minify: false,
  },
}

export default config
