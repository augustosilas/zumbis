import React, {Component, useEffect} from 'react';
import {View, Button, Text, TextInput, StyleSheet} from 'react-native';

import Request from '../../../services/requests';

const editar = ({navigation}) => {
  let [nome, setNome] = React.useState();
  let [calibri, setCalibri] = React.useState();
  let [dano, setDano] = React.useState();

  const values = navigation.getParam('values');

  // useEffect reenderiza uma vez mas caso haja alteração reenderiza novamente
  useEffect(() => {
    setNome(values.nome);
    setCalibri(String(values.calibri));
    setDano(String(values.dano));
  }, [values]);

  const updateArmas = async () => {
    let arma = {
      nome,
      calibri,
      dano,
    };
    let id = values._id;
    let url = `/armas/${id}`;

    let armaJson = await JSON.stringify(arma);

    const request = new Request();
    return await request.PUT(armaJson, url);
  };

  return (
    <View>
      <Text>Alterar Arma</Text>
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
        <Button title="Alterar" onPress={updateArmas} />
        <Button
          title="Início"
          onPress={() => {
            navigation.navigate('PageHome');
          }}
        />
      </View>
    </View>
  );
};

function buildJSON(nome, calibri, dano) {
  return {
    nome,
    calibri,
    dano,
  };
}

let objToJSON = obj => {
  return JSON.stringify(obj);
};
export default editar;
