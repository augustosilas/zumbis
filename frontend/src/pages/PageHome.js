import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
import {createStackNavigator} from 'react-navigate';

import PageArma from './PageArma';
import PageArmadura from './PageArmadura';
import PageZumbi from './PageZumbi';

// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

export class PageHome extends Component {
  render() {
    return (
      <View>
        <Button
          title="Arma"
          onPress={() => {
            this.props.navigation.navigate('Arma');
          }}
        />
        <Button
          title="Armadura"
          onPress={() => {
            'Armadura';
          }}
        />
        <Button
          title="Zumbi"
          onPress={() => {
            'Zumbi';
          }}
        />
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return <AppStackNavigator />;
  }
}

const AppStackNavigator = createStackNavigator({
  Home: PageHome,
  Arma: PageArma,
  Armadura: PageArmadura,
  Zumbi: PageZumbi,
});
