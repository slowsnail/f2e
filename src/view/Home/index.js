import React from 'react'
import {
  View,
  Button,
  TabBarIOS,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native'

const styles = StyleSheet.create({
  tabBar: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#ddd',
  },
  pageContainer: {
    flex: 1,
  },
  pageContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageContentText: {
    fontSize: 20,
    color: '#fff',
  },
})

class Home extends React.Component {
  static navigationOptions = {
    headerTitle: <Text>Home</Text>,
    headerStyle: {
      backgroundColor: 'rgba(255, 0, 0, 0.2)',
    },

  };

  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'wifi',
      badgeVisible: true,
    }
  }

  onTabPress(tab) {
    const {
      badgeVisible,
    } = this.state

    if (tab === 'find') {
      this.setState({
        badgeVisible: false,
      })
    }

    this.setState({
      selectedTab: tab,
      badgeVisible,
    })
  }

  renderIcon = (tab) => {
    const iconfonts = {
      wifi: '\uf04b',
      find: '\uf067',
      money: '\uf238',
    }
    return (
      <Text style={{
        fontFamily: 'qunar_react_native',
        fontSize: 22,
      }}
      >
        {iconfonts[tab]}
      </Text>
    )
  }

  renderPageContent = (pageText) => {
    function getRandomColor() {
      const letters = '3456789ABC'.split('')
      let color = '#'
      for (let i = 0; i < 6; i += 1) {
        color += letters[Math.floor(Math.random() * 10)]
      }
      return color
    }

    return (
      <ScrollView
        flex={1}
      >
        <View style={styles.pageContainer}>
          <View style={[styles.pageContent, { backgroundColor: getRandomColor() }]}>
            <Text style={styles.pageContentText}>当前页面: {pageText}</Text>
          </View>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Search')}
          />
        </View>
      </ScrollView>
    )
  }

  render() {
    const tabs = ['wifi', 'find', 'money']

    const {
      badgeVisible,
      selectedTab,
    } = this.state

    return (
      <TabBarIOS>
        {
          tabs.map((tab, i) => (
            <TabBarIOS.Item
              key={i}
              title={tab}
              badge={tab === 'find' && badgeVisible ? '1' : undefined}
              selected={selectedTab === tab}
              onPress={() => this.onTabPress(tab)}
              renderIcon={() => this.renderIcon(tab)}
              titleStyle={{ fontSize: 14 }}
              iconStyle={{ fontSize: 22 }}
            >
              {this.renderPageContent(tab)}
            </TabBarIOS.Item>
          ))
        }
      </TabBarIOS>
    )
  }
}

export default Home
