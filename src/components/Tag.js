import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Tag = ({ text }) => {
  return (
    <View style={styles.tag}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default Tag

const styles = StyleSheet.create({
  tag: {
    backgroundColor: "rgba(51, 51, 51,0.7)",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 100
  },
  text: {
    color: "#fff"
  }
})
