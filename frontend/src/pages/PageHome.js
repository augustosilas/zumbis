import * as React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Arma" onPress={() => navigation.navigate('Arma')} />
      <Separator />
      <Button
        title="Armadura"
        onPress={() => {
          navigation.navigate('Armadura');
        }}
      />
      <Separator />
      <Button
        title="Zumbi"
        onPress={() => {
          navigation.navigate('Zumbi');
        }}
      />
    </View>
  );
}

function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default HomeScreen;
