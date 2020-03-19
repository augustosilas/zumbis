import React, {Component} from 'react';
import {View, Button, Text, TextInput, StyleSheet} from 'react-native';

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
          onPress={async () => {
            let armaJSON = await objToJSON(nome, calibri, dano);
            console.log(armaJSON);
            fetch('http://localhost:3003/api/armas', {
              method: 'GET',
              // body: armaJSON,
            }).then(resp => {
              console.log(resp.json());
            });
          }}
        />
        <Button
          title="Início"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </View>
    </View>
  );
}

let objToJSON = (nome, calibri, dano) => {
  let obj = {
    nome,
    calibri,
    dano,
  };
  return JSON.stringify(obj);
};

export default cadastrar;
