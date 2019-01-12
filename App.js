//contoh navigasi
import React from 'react';
import { Text, View }from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.22
// You can import from local files
import AssetExample from './components/AssetExample';
import Profile from './components/Profile';
// or any pure javascript modules available in npm
import Program from './components/Program';
import Misi from './components/Misi';
import Gallery from './components/Gallery';
import { Card } from 'react-native-elements'; // 0.18.5

import "@expo/vector-icons"; // 6.2.2

const HomeScreen = () => (
  <View style={{ flex: 1, backgroundColor:'#0066ff',alignItems: 'center', justifyContent: 'center' }}>
     <Text >Selamat Datang Profil Wisata Gunung Lanang</Text>
          <AssetExample />
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1,backgroundColor:'#0066ff', alignItems: 'center', justifyContent: 'center' }}>

  <Card title="">
    <Profile/>
	   </Card>
	   <Card title="SPOT Yang Disediakan">
    <Program/>
	   </Card>
	   <Card title="Sejarah Singkat">
    <Misi/>
	   </Card>
  </View>
);
const AboutScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#0066ff', }}>
      <Gallery/>
  </View>
);

const RootTabs = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
    Gallery: {
    screen: AboutScreen,
  },
});

export default RootTabs;