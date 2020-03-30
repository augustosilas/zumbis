import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import Request from '../../services/requests';

import logoArma from '../../../assets/logoArma.jpg';

export default function PageArma() {
  const [armas, setArmas] = useState([]);

  useEffect(() => {
    setArmas(listArmas());
  }, []);

  const navigation = useNavigation();

  function onSelected(item) {
    navigation.navigate('EditarArma', {values: item});
  }

  function renderItem({item, index}) {
    return (
      <ListItem
        title={`${item.nome}`}
        description={`Calibri: ${item.calibri} \n Dano: ${item.dano}`}
        accessory={() => renderItemAccessory(styles, index, item)}
        onPress={() => onSelected(item)}
      />
    );
  }

  function renderItemAccessory(styles, index, item) {
    return (
      <View>
        {/* <ButtonGroup style={styles.buttonGroup} status="primary">
          <Button onPress={() => onSelected(item)}>Editar</Button>
          <Button onPress={async () => await deleteArmas(item)}>Deletar</Button>
        </ButtonGroup> */}
      </View>
    );
  }

  async function deleteArmas(item) {
    console.log(item);
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
    return docs;
    // setState({armas: docs});
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
      <View />
    </View>
  );
}
