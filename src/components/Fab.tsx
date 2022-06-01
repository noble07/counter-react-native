import React from 'react'
import { View, Text, TouchableNativeFeedback, StyleSheet, Platform, TouchableOpacity } from 'react-native'

interface FabProps {
  title: string
  position?: 'br' | 'bl'
  onPress: () => void
}

const Fab = ({ title, onPress, position = 'br' }: FabProps) => {

  const fabStyles = [
    styles.fabLocation,
    position === 'br' ? styles.right : styles.left
  ]

  const ios = () => {
    return (
      <TouchableOpacity
          activeOpacity={0.75}
          onPress={onPress}
          style={fabStyles}
        >
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const android = () => {
    return (
      <View
        style={fabStyles}
      >
        <TouchableNativeFeedback
            onPress={onPress}
            background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
          >
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }

  return Platform.OS === 'ios' ? ios() : android()
}

export default Fab

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  left: {
    left: 25
  },
  right: {
    right: 25
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
})