import React, {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

import Request from '../../../services/requests';

export default function editar() {
  let [nome, setNome] = React.useState();
  let [calibri, setCalibri] = React.useState();
  let [dano, setDano] = React.useState();

  const route = useRoute();

  const values = route.params.values;

  // useEffect reenderiza uma vez mas caso haja alteração reenderiza novamente
  useEffect(() => {
    setNome(values.nome);
    setCalibri(String(values.calibri));
    setDano(String(values.dano));
  }, [values]);

  async function updateArmas() {
    let arma = {
      nome,
      calibri,
      dano,
    };

    let armaJson = await JSON.stringify(arma);

    let id = values._id;
    let url = `/armas/${id}`;

    await Request.PUT(armaJson, url);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Altere sua arma</Text>
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
        <TouchableOpacity style={styles.action} onPress={() => updateArmas()}>
          <Text style={styles.actionText}>Alterar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
