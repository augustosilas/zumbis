import React, {Component} from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const cadastrar = ({navigation}) => {
  let [nomeZ, setNome] = React.useState();
  let [armas, setArmas] = React.useState();
  let [armaduras, setArmaduras] = React.useState();

  return (
    <View>
      <Text>Cadastrar Zumbi</Text>
      <View>
        <Text>Nome</Text>
        <TextInput
          onChangeText={text => setNome(text)}
          value={nomeZ}
          placeholder="Nome"
        />
        <Text>Armas</Text>
        <TextInput
          onChangeText={text => setArmas(text)}
          value={armas}
          placeholder="Armas (mais de uma separadas por virgula)"
        />
        <Text>Armaduras</Text>
        <TextInput
          onChangeText={text => setArmaduras(text)}
          value={armaduras}
          placeholder="Armaduras (mais de uma separadas por virgula)"
        />
        <Button
          title="Cadastrar"
          onPress={() => {
            let armasSplit = '';
            let armadurasSplit = '';
            if (armas !== undefined) {
              armasSplit = armas.split(',');
            }
            if (armaduras !== undefined) {
              armadurasSplit = armaduras.split(',');
            }

            const zumbi = {
              nome: nomeZ,
              armas: armasSplit,
              armaduras: armadurasSplit,
            };

            const zumbiJSON = JSON.stringify(zumbi);
            console.log(zumbiJSON);
          }}
        />
      </View>
    </View>
  );
};

export default cadastrar;
