import React, {Component, useEffect} from 'react';
import {View, Button, Text, TextInput, StyleSheet} from 'react-native';

import Request from '../../../services/requests';

const editar = ({navigation}) => {
  let [nome, setNome] = React.useState();
  let [absorcao, setAbsorcao] = React.useState();

  const values = navigation.getParam('values');

  useEffect(() => {
    setNome(values.nome);
    setAbsorcao(String(values.absorcao));
  }, [values]);

  const updateArmas = async () => {
    let id = values._id;
    let url = `/armaduras/${id}`;

    let armaduras = {
      nome,
      absorcao,
    };
    let armaduraJson = await JSON.stringify(armaduras);

    const request = new Request();
    return await request.PUT(armaduraJson, url);
  };

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
          onChangeText={text => setAbsorcao(text)}
          value={absorcao}
          placeholder="Absorção"
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

export default editar;
