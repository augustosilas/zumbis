import React, {useState} from 'react';
import {View, Button, Text, TextInput, StyleSheet} from 'react-native';

import Request from '../../../services/requests';

const cadastrar = ({navigation}) => {
  const [nome, setNome] = useState();
  const [absorcao, setAbsorcao] = useState();

  const createArmaduras = async () => {
    let arma = {
      nome,
      absorcao,
    };

    let armaJson = await JSON.stringify(arma);

    const request = new Request();
    return await request.POST(armaJson, '/armaduras');
  };

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
        <Text>Absorcao</Text>
        <TextInput
          onChangeText={text => setAbsorcao(text)}
          value={absorcao}
          placeholder="Absorção"
        />
      </View>
      <View>
        <Button title="Adicionar" onPress={createArmaduras} />
      </View>
    </View>
  );
};

export default cadastrar;
