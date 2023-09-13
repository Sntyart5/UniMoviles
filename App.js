import { useState, useEffect } from 'react';
import { StyleSheet, Text, View,  TouchableOpacity, ImageBackground } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import {styles, myimage} from './assets/styles/styles1.jsx'




export default function App() {
  // States


  return (
    <ImageBackground
      source={require('./assets/images/fondo.jpg')}
      style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center' }}
    >



      <View style={styles.container}>
      
      <Banner ></Banner>
      
      <Formulario></Formulario>
      

      <View style={{ alignItems: 'center', justifyContent: 'center', height: 200, marginTop:20, width: 400}}>
        <Footer message="Universidad"></Footer>
      </View>
    
    </View>
    </ImageBackground>
  );
}





