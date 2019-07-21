import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Index from './src/index.js'
import { Provider } from 'mobx-react'
import store from './src/store.js'

export default function App () {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  )
}
