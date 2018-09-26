import React from 'react'
import {
  View,
  Text,
  Button,
} from 'react-native'

class Search extends React.Component {
  render() {
    return (
      <View
        flex={1}
      >
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('My')}
        />
      </View>
    )
  }
}

export default Search
