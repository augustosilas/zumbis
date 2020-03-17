import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';

export default class PageArma extends Component {
  render() {
    return (
      <View>
        <Button
          title="Cadastrar"
          onPress={() => {
            'Armas';
          }}
        />
      </View>
    );
  }
}
