// @flow

import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/tester2componentStyle'

export default class tester2component extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>tester2component Component</Text>
      </View>
    )
  }
}

// // Prop type warnings
// tester2component.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// tester2component.defaultProps = {
//   someSetting: false
// }
