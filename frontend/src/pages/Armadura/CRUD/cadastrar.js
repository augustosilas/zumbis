import React, {useState} from 'react';
import {View, Button, Text, TextInput, StyleSheet} from 'react-native';

const cadastrar = ({navigation}) => {
  const [nome, setNome] = useState();
  const [absorcao, setAbsorcao] = useState();

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
        <Button
          title="Adicionar"
          onPress={async () => {
            let armaduraJSON = await objToJSON(nome, absorcao);
            // Requisição da API
          }}
        />
      </View>
    </View>
  );
};

let objToJSON = (nome, absorcao) => {
  let obj = {
    nome,
    absorcao,
  };

  return JSON.stringify(obj);
};
export default cadastrar;
