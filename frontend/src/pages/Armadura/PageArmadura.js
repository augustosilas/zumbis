import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';

function PageArmadura({navigate}) {
  return (
    <View>
      <Button
        title="Cadastrar"
        onPress={() => {
          'Cadastrar';
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