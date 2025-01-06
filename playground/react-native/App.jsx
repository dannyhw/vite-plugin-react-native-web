import { useState } from 'react'
import Button from 'jsx-entry'
import { Text, TouchableOpacity, View } from 'react-native'
import Dummy from './components/Dummy?qs-should-not-break-plugin-react'
import Parent from './hmr/parent'
import { JsxImportRuntime } from './hmr/jsx-import-runtime'
import { CountProvider } from './context/CountProvider'
import { ContextButton } from './context/ContextButton'
import { TestImportAttributes } from './import-attributes/test'
import { PressableWithOverlay } from './components/PressableWithOverlay'

function App() {
  const [count, setCount] = useState(0)
  return (
    <View>
      <View style={{ flex: 1, gap: 16, alignItems: 'flex-start' }}>
        <Text
          accessibilityRole="header"
          style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 16 }}
        >
          Hello Vite + React
        </Text>

        <PressableWithOverlay
          style={{
            padding: 8,
            backgroundColor: 'lightgrey',
            borderRadius: 4,
            borderWidth: 1,
            borderColor: 'grey',
          }}
          testID="state-button"
          onPress={() => setCount((count) => count + 1)}
        >
          <Text>count is: {count}</Text>
        </PressableWithOverlay>

        <ContextButton />

        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </View>

      <Dummy />
      <Parent />
      <JsxImportRuntime />
      <Button>button</Button>
      <TestImportAttributes />
    </View>
  )
}

function AppWithProviders() {
  return (
    <CountProvider>
      <App />
    </CountProvider>
  )
}

export default AppWithProviders
