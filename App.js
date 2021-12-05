import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Pokemons from './components/Pokemons';
import Details from './components/Details';
import Camara from './components/Camara';
import MapsLocation from './components/MapsLocation'
// import Location from './components/Locacion';
// import Pokemons from './Components/Pokemons';

const appNavigator = createStackNavigator({
  
 
  Details: {
    screen: Details,
  },
  MapsLocation: {
    screen: MapsLocation,
  },
  Camara: {
    screen: Camara,
  },
  Home: {
    screen: Pokemons,
  }, 
  },
  {
    initialRouteName: 'Home'
  },
  );

  const AppContainer = createAppContainer(appNavigator);
  export default class App extends Component {
    render() {
      return <AppContainer />;
    }
  }
  
  // export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
