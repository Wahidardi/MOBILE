import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Misi extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
Gunung Lanang adalah salah satu tempat wisata Yang ada di Banjarnegara. Gunung Lanang ini terletak di Desa Mergolangu, Kecamatan Kalibawang Kabupaten Wonosobo Jawa Tengah. Jika di ukur menurut ketinggian memang gunung ini tidak sampai 15000 MDPL namun warga sekitar tetap menganggapnya sebagai gunung mungkin karena pengaruh kuno secara turun-temurun.

Wisata Gunung Lanang Wonosobo Jawa Tengah merupakan tempat wisata yang harus anda kunjungi karena pesona keindahannya tidak ada duanya. Penduduk lokal daerah wiradrana juga sangat ramah tamah terhadap anda yang berasal dari Kabupaten Wonosobo, maupun anda yang tinggal di luar Kabupaten Wonosobo.  Kota Wonosobo juga terkenal akan keindahan obyek wisatanya, salah satunya adalah Wisata Gunung Lanang Wonosobo Jawa Tengah ini.
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
