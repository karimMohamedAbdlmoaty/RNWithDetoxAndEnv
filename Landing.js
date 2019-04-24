import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';

class Landing extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  };
    // }


    handleResources = ()=>{
        this.props.navigation.navigate('Foo')
    };

    render() {
        return (
            <View style={{flex: 1, backgroundColor:"green",marginTop:50}}>
                <TouchableOpacity onPress={()=>this.handleResources()}><Text>   WELCOME  </Text></TouchableOpacity>
            </View>
        );
    }
}

export default Landing;