import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from '@ui-kitten/components';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => {
          navigation.navigate('PageHomeArma');
        }}>
        Arma
      </Button>

      <Button
        onPress={() => {
          navigation.navigate('PageHomeArmadura');
        }}>
        Armadura
      </Button>

      <Button
        title="Zumbi"
        onPress={() => {
          navigation.navigate('PageHomeZumbi');
        }}>
        Zumbi
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default HomeScreen;
