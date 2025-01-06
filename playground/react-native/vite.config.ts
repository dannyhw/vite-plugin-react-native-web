import react from '@dhw/plugin-react-native-web'
import type { UserConfig } from 'vite'

const config: UserConfig = {
  server: { port: 8902 /* Should be unique */ },
  mode: 'development',
  plugins: [
    react({
      jsxRuntime: 'automatic',
      babel: {
        plugins: [
          '@babel/plugin-proposal-export-namespace-from',
          'react-native-reanimated/plugin',
        ],

        overrides: [
          {
            include: [/node_modules\/(react-native|@react-native)/],
            plugins: [
              // this is a fix for reanimated not working in production
              '@babel/plugin-transform-modules-commonjs',
              {
                strict: false,
                strictMode: false, // prevent "use strict" injections
                allowTopLevelThis: true, // dont rewrite global `this` -> `undefined`
              },
            ],
          },
        ],
      },
    }),
  ],
  build: {
    // to make tests faster
    minify: false,
  },
}

export default config
