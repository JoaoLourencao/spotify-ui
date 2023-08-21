import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ShowCard = ({ img, title, artists }) => {
  return (
    <View style={styles.container}>
      <Image style={{ height: 140, width: 140 }} source={img} />
      <Text style={styles.text} numberOfLines={1} >{title}</Text>
      <Text style={styles.subText} numberOfLines={1} >{artists}</Text>
    </View>
  )
}

export default ShowCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"red",
    overflow: 'hidden',
    minHeight: 220,
    maxHeight: 220,
    maxWidth: 160,
    marginRight: 20
  },
  text: {
    color: "white",
    marginTop: 10,
    fontWeight: "800"
  },
  subText: {
    color: "gray",
    marginTop: 4,
    fontWeight: "800"
  }
})
