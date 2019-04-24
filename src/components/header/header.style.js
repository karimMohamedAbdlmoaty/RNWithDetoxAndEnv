import React, {Component} from 'react';
import { StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    container:{
        backgroundColor:"#2C8BC9",
        //paddingRight:15 ,
        //paddingLeft:25 ,
        flexDirection:"row",
        justifyContent:"center",
        height: 70, 
    },
    left:{
        flex:1,
        marginTop: 20,
        height: 50,
        justifyContent:"center",
    },
    iconItem:{
        marginLeft:22,



    },
    middle:{
        flex:2,
        // alignSelf: "stretch",
        // paddingBottom:1,
        //paddingTop:5,
        color:"white",
        justifyContent:"center",
        alignItems: "center",
        marginTop: 20,
        height: 50


    },
    middleText:{
        color:"white",
        fontSize: 22
    },
    
    right: {
        flex:1,
        marginTop: 20,
        height: 50


    }

})
