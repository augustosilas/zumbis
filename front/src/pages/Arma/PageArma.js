import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import Request from '../../services/requests';

import logoArma from '../../../assets/logoArma.jpg';
import iconEdit from '../../../assets/edit.svg';

export default function PageArma() {
  const [armas, setArmas] = useState([]);

  useEffect(() => {
    listArmas();
  }, []);

  const navigation = useNavigation();

  function onSelected(item) {
    navigation.navigate('EditarArma', {values: item});
  }

  async function deleteArmas(item) {
    const id = item._id;
    const url = `/armas/${id}`;

    const request = new Request();
    request.DELETE(url).then(async () => {
      listArmas().then(async () => {
        console.log('ok!');
      });
    });
  }

  async function listArmas() {
    const request = new Request();
    const response = await request.GET('/armas');
    const {docs} = response.data;
    setArmas(docs);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.headerLogo} source={logoArma} />
        <Text style={styles.headerText}>
          Cadastre, edite, remova e veja suas armas.
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.action}
          onPress={() => {
            navigation.navigate('CadastroArma');
          }}>
          <Text style={styles.actionText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.armasList}
        data={armas}
        keyExtractor={item => String(item._id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.armas}>
            <View style={styles.armasTextAll}>
              <Text style={styles.armasText}>Nome</Text>
              <Text style={styles.armasText}>Calibri</Text>
              <Text style={styles.armasText}>Dano</Text>
            </View>
            <View style={styles.armasTextAll}>
              <Text style={styles.armasTextValue}>{item.nome}</Text>
              <Text style={styles.armasTextValue}>{item.calibri}</Text>
              <Text style={styles.armasTextValue}>{item.dano}</Text>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity style={styles.actionEdit} onPress={() => {}}>
                <Text style={styles.actionText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionRemove}
                onPress={() => {
                  deleteArmas(item);
                }}>
                <Text style={styles.actionText}>Remover</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}
