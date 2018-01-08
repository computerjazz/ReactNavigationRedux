import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm a profile!</Text>
      </View>
    )
  }
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  text: {
    color: 'white',
  }
})
