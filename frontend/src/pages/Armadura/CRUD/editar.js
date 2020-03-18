import React, {Component, useEffect} from 'react';
import {View, Button, Text, TextInput, StyleSheet} from 'react-native';

const editar = ({navigation}) => {
  let [nome, setNome] = React.useState();
  let [calibri, setCalibri] = React.useState();

  const values = navigation.getParam('values');

  useEffect(() => {
    setNome(values.nome);
    setCalibri(values.absorcao);
  }, [values]);

  return (
    <View>
      <Text>Alterar Armadura</Text>
      <View>
        <Text>Nome</Text>
        <TextInput
          onChangeText={text => setNome(text)}
          value={nome}
          placeholder="Nome"
        />
        <Text>Absorcao</Text>
        <TextInput
          onChangeText={text => setCalibri(text)}
          value={calibri}
          placeholder="Calibri"
        />
      </View>
      <View>
        <Button
          title="Alterar"
          onPress={async () => {
            let obj = buildJSON(nome, calibri);
            let armaJSON = await objToJSON(obj);
            // Fazer requisição da API
          }}
        />
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

function buildJSON(nome, calibri) {
  return {
    nome,
    calibri,
  };
}

let objToJSON = obj => {
  return JSON.stringify(obj);
};
export default editar;
