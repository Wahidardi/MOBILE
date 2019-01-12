import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Gallery extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
        Berikut adalah beberapa Foto Dokumentasi dari Wisata Gunung Lanang :
        </Text>
        <Image style={styles.logo} source={require("../assets/1.jpg")}/>
        
        <Image style={styles.logo} source={require("../assets/3.jpg")}/>
         
        <Image style={styles.logo} source={require("../assets/2.jpg")}/>
        <Image style={styles.logo} source={require("../assets/4.jpg")}/>
  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    backgroundColor: "#056ecf",
    height: 128,
    width: 128,
  }
});
