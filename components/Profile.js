import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Gunung Lanang adalah sebuah wisata yang terletak di Desa Mergolangu, Kec. Kalibawang, Kab. Wonosobo Jawa Tengah yang berada di ketinggiang 1.205 MDPL. Wisata ini bangun pada tahun 2014, dimana wisata ini dirintis oleh kepala desa Mergolangu. 
        </Text>
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
