// @flow

import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/testercomponentStyle'

export default class testercomponent extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>testercomponent Component</Text>
      </View>
    )
  }
}

// // Prop type warnings
// testercomponent.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// testercomponent.defaultProps = {
//   someSetting: false
// }
