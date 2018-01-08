import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'

import Profile from './components/Profile'
import Feed from './components/Feed'
import ItemDetail from './components/ItemDetail'

export const Navigator = new StackNavigator({
  Profile: { screen: Profile },
  Feed: { screen: Feed },
  ItemDetail: { screen: ItemDetail },
},{
  initialRouteName: 'Feed',
})

class Nav extends Component {
  render() {
    return (
      <Navigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.navigation,
      })} />
    )
  }
}

const mapStateToProps = state => ({
  navigation: state.navigation,
})

export default connect(mapStateToProps)(Nav)
