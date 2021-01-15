import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { BackgroundCarousel } from "./components/BackfroundCarousel";
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 


const images = [
  require("./images/top.jpg"),
  require("./images/top2.png"),
  require("./images/top4.jpg"),
 
];

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BackgroundCarousel images={images} />
        <View style={styles.bottom }>
 <View style={{flex:1,alignItems:"center",backgroundColor:"#ffffff",marginTop:14}}><FontAwesome name="home" size={30} color="#0652f4" /></View>
 <View  style={{flex:1,alignItems:"center",backgroundColor:"#ffffff",marginTop:14}}><Entypo name="chat" size={30} color="#bdbdbd"/></View>
 <View  style={{flex:1,alignItems:"center" ,backgroundColor:"#ffffff",marginTop:14}}><FontAwesome name="shopping-cart" size={30} color="#bdbdbd" /></View>
 <View  style={{flex:1,alignItems:"center" ,backgroundColor:"#ffffff",marginTop:14,}}><Ionicons name="person" size={30} color="#bdbdbd" /></View>
</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  bottom:{
    position:"absolute",
    bottom:0,
    width:"100%",
    height:"9%",
    backgroundColor:"#ffffff",
    flexDirection:"row",
    borderColor: "#ebebf2",
    borderWidth: 1,
  }
});