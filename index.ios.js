/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ExactTarget from 'react-native-exact-target';

export default class ExampleApp extends Component {
  componentDidMount() {
    ExactTarget.initializePushManager({
      appId: 'test-app-id-ios',
      accessToken: 'test-access-token-ios',
      enableAnalytics: false,
      enableLocationServices: false,
      enableProximityServices: false,
      enableCloudPages: false,
      enablePIAnalytics: false
    });

    ExactTarget.resetBadgeCount();
    ExactTarget.shouldDisplayAlertViewIfPushReceived(true);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

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
});

AppRegistry.registerComponent('ExampleApp', () => ExampleApp);
