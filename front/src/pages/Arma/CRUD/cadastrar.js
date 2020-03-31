import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

import Request from '../../../services/requests';

export default function cadastrar() {
  let [nome, setNome] = React.useState();
  let [calibri, setCalibri] = React.useState();
  let [dano, setDano] = React.useState();

  async function createArmas() {
    let arma = {
      nome,
      calibri,
      dano,
    };

    let armaJson = await JSON.stringify(arma);
    const request = new Request();
    return await request.POST(armaJson, '/armas');
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Cadastro de Armas</Text>
        <View style={styles.inputs}>
          <Text style={styles.labelInput}>Nome</Text>
          <TextInput
            textAlign="center"
            autoFocus={true}
            style={styles.textInput}
            onChangeText={text => setNome(text)}
            value={nome}
            placeholder="Nome"
          />
          <Text style={styles.labelInput}>Calibri</Text>
          <TextInput
            textAlign="center"
            keyboardType="numeric"
            autoFocus={true}
            style={styles.textInput}
            onChangeText={text => setCalibri(text)}
            value={calibri}
            placeholder="Calibri"
          />
          <Text style={styles.labelInput}>Dano</Text>
          <TextInput
            textAlign="center"
            keyboardType="numeric"
            autoFocus={true}
            style={styles.textInput}
            onChangeText={text => setDano(text)}
            value={dano}
            placeholder="Dano"
          />
        </View>
        <TouchableOpacity
          style={styles.action}
          onPress={() => createArmas(nome, calibri, dano)}>
          <Text style={styles.actionText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
