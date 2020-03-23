import React, {Component} from 'react';
import {View, Button, Text, TextInput, StyleSheet} from 'react-native';
import axios from 'axios';

import Request from '../../../services/requests';

function cadastrar({navigation}) {
  let [nome, setNome] = React.useState();
  let [calibri, setCalibri] = React.useState();
  let [dano, setDano] = React.useState();

  return (
    <View>
      <Text>Cadastro de Armas</Text>
      <View>
        <Text>Nome</Text>
        <TextInput
          onChangeText={text => setNome(text)}
          value={nome}
          placeholder="Nome"
        />
        <Text>Calibri</Text>
        <TextInput
          onChangeText={text => setCalibri(text)}
          value={calibri}
          placeholder="Calibri"
        />
        <Text>Dano</Text>
        <TextInput
          onChangeText={text => setDano(text)}
          value={dano}
          placeholder="Dano"
        />
      </View>
      <View>
        <Button
          title="Adicionar"
          onPress={async () => await createArmas(nome, calibri, dano)}
        />
        <Button
          title="Início"
          onPress={async () => {
            navigation.navigate('Home');
          }}
        />
      </View>
    </View>
  );
}

const createArmas = async (nome, calibri, dano) => {
  let arma = {
    nome,
    calibri,
    dano,
  };

  let armaJson = await JSON.stringify(arma);
  const request = new Request();
  return await request.POST(armaJson, '/armas');
};

export default cadastrar;
