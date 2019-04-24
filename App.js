{/* import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      detoxState:10000
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text testID='for-detox' style={styles.instructions} onPress={()=>this.setState({detoxState:9999+this.state.detoxState})}>ForDetoxTest {this.state.detoxState}</Text>
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

*/}




import {Login} from "./src/auth/screens/login/login.screen"
import {ChooseResources} from "./src/auth/screens/choose-resources/choose-resources.screen"
// import ForgetPassword from "./src/components/forget-password";
// import Resources from "./src/components/resources";
// import HomePage from './src/components/home';
// import MyResources from "./src/components/my-resources";
// import MyAccount from "./src/components/my-account";
// import Sports from "./src/components/sports";
// import Magazines from "./src/components/magazines";
// import {Register} from "./src/auth"
// import {Landing} from "./src/auth/screens/landing/landing.screen"

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Nabd} from "./nabd";
import { Provider } from 'react-redux';
import store from './src/store';




class App extends Component {
  render() {
    return (
      <Provider store={store} style={{flex: 1}} >
        {/* <Register /> */}
        {/* <Landing /> */}
        {/* <Login /> */}
        {/* <ChooseResources /> */}
        {/* <ForgetPassword /> */}
        {/* <HomePage /> */}
        {/* <NewsItem /> */}
        {/* <Resources /> */}
        {/* <MyResources /> */}
        {/* <MyAccount /> */}
        {/* <Sports /> */}
        {/* <Magazines /> */}
        {/* <Register /> */}
        <Nabd />
      </Provider>
    );
  }
}



AppRegistry.registerComponent(appName, () => App);