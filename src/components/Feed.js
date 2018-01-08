import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ListItem from './ListItem'

class Feed extends Component {

  static navigationOptions = () => ({
    title: 'My Feed'
  })

  _interval = null

  componentDidMount() {
    this._interval = setInterval(this.periodicUpdate, 1000)
  }

  periodicUpdate = () => {
    if (this.props.navigation.state.params.active) {
      console.log('Active!')
    }
  }

  renderItems = () => {
      return ['one', 'two', 'three', 'four', 'five'].map((item, i) => {
        return (
          <ListItem
            key={item}
            text={`I'm item ${item}`}
            style={{ padding: 10, backgroundColor: `#${i}${i}${i}`}}
            onPress={() => {
              this.props.navigation.navigate('ItemDetail', { item, index: i })
            }}
          />
        )
      })
  }

  render() {
    console.log('NEXT PROPS', this.props.navigation.state.params)

    return (
      <View style={styles.container}>
        <Text style={styles.text}>I'm a feed!</Text>
        {this.renderItems()}
      </View>
    )
  }
}

export default Feed

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
  },
  text: {
    color: 'white',
    fontSize: 20,
    padding: 20,
  }
})
