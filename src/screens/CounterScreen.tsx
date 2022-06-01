import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

const CounterScreen = () => {

  const [counter, setCounter] = useState(10)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Contador: {counter}
      </Text>

      <TouchableOpacity
        style={styles.fabLocationBR}
        onPress={() => setCounter(counter + 1)}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.fabLocationBL}
        onPress={() => setCounter(counter - 1)}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity>
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
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 25,
    right: 25
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 25,
    left: 25
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center'
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
})

export default CounterScreen