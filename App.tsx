import 'react-native-gesture-handler';
import React from 'react'
import { SearchScreen } from './src/screens/SearchScreen'
import { StyleSheet, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <SearchScreen />
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
