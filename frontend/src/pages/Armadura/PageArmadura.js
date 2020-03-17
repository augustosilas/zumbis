import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';

function PageArmadura({navigation}) {
  return (
    <View>
      <Button
        title="Cadastrar"
        onPress={() => {
          navigation.navigate('CadastroArmadura');
        }}
      />
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

export default PageArmadura;
