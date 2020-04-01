import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

import Request from '../../../services/requests';

export default function cadastrar() {
  const [nome, setNome] = useState();
  const [absorcao, setAbsorcao] = useState();

  const navigation = useNavigation();

  async function createArmaduras() {
    let arma = {
      nome,
      absorcao,
    };

    let armaJson = await JSON.stringify(arma);

    const request = new Request();
    await request.POST(armaJson, '/armaduras');
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
          <Text style={styles.labelInput}>Absorção</Text>
          <TextInput
            textAlign="center"
            keyboardType="numeric"
            autoFocus={true}
            style={styles.textInput}
            onChangeText={text => setAbsorcao(text)}
            value={absorcao}
            placeholder="Calibri"
          />
        </View>
        <TouchableOpacity
          style={styles.action}
          onPress={() => createArmaduras()}>
          <Text style={styles.actionText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
