import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>
      <Button title="Arma" onPress={() => navigation.navigate('Arma')} />
      <Button
        title="Armadura"
        onPress={() => {
          navigation.navigate('Armadura');
        }}
      />
      <Button
        title="Zumbi"
        onPress={() => {
          navigation.navigate('Zumbi');
        }}
      />
    </View>
  );
}

export default HomeScreen;
