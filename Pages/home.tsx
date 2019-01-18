import React, { Component } from 'react';
import { View,StyleSheet, Text } from 'react-native';
// import Header from '../Components/header.tsx';
 import {Content} from '../Components/content.tsx';
 import Buttons from '../Components/buttons.tsx';
export const Home = () => {
  
    return (
      <View style={styles.container}>
          <Content/> 
        <Buttons/> 
               <Text>ljdsjfb</Text>
        
      </View>
     
    );
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:360,
  
    marginTop: 20,
    backgroundColor: 'white',
   
  }
});