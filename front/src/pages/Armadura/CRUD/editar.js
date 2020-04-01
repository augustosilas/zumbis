import React, {useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useRoute} from '@react-navigation/native';

import styles from './styles';
import Request from '../../../services/requests';

export default function editar() {
  let [nome, setNome] = React.useState();
  let [absorcao, setAbsorcao] = React.useState();

  const route = useRoute();

  const values = route.params.values;

  useEffect(() => {
    setNome(values.nome);
    setAbsorcao(String(values.absorcao));
  }, [values]);

  async function updateArmas() {
    let id = values._id;
    let url = `/armaduras/${id}`;

    let armaduras = {
      nome,
      absorcao,
    };
    let armaduraJson = await JSON.stringify(armaduras);

    const request = new Request();
    await request.PUT(armaduraJson, url);
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
        <TouchableOpacity style={styles.action} onPress={() => updateArmas()}>
          <Text style={styles.actionText}>Alterar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
