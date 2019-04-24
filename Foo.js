import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class Landing extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  };
    // }
    render() {
        return (
            <View style={{flex: 1, backgroundColor:"green",marginTop:50}}>
                <Text>Foo Page</Text>
            </View>
        );
    }
}

export default Landing;