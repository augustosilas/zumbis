import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';

function PageArma({navigation}) {
  return (
    <View>
      <Text>Armas</Text>
      <Button title="Cadastrar" onPress={() => {}} />
      <Button
        title="Editar"
        onPress={() => {
          'Editar';
        }}
      />
      <Button
        title="Excluir"
        onPress={() => {
          'Excluir';
        }}
      />
    </View>
  );
}

export default PageArma;
