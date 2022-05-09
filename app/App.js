import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Film_description from './components/Film_description';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Film_item from './components/Film_item';
import FIlm_search from './components/FIlm_search';
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <AppContainer></AppContainer>
    )
  }
}

const AppNavigator = createStackNavigator({
 
  FIlm_search: {
    screen: FIlm_search
  },  
   Film_item:{
    screen:Film_item
  },
  description: {
    screen: Film_description
    
  }},
{
  initialRouteName: "FIlm_search"
});

const AppContainer = createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
