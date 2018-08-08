import React from 'react'
import { observer, inject } from 'mobx-react'
import {
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableOpacity,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,
    Cmd+D or shake for dev menu`,
  android:
    `Double tap R on your keyboard to reload
    Shake or press menu button for dev menu`,
})

@inject('shop')
@observer
class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <TouchableOpacity
          onPress={() => {
            const ret = this.props.shop.sayHi()
            console.log(ret)
          }}
        >
          <Text>
            Button
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default App