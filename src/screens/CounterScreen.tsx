import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import Fab from '../components/Fab'

const CounterScreen = () => {

  const [counter, setCounter] = useState(10)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Contador: {counter}
      </Text>

      <Fab
        title="+1"
        onPress={() => setCounter(counter + 1)}
      />
      
      <Fab
        title="-1"
        position="bl"
        onPress={() => setCounter(counter - 1)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    top: -15
  }
})

export default CounterScreen