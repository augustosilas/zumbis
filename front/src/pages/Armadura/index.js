import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';

import styles from './styles';
import Request from '../../services/requests';

import logoArmadura from '../../../assets/logoarmadura.png';

export default function PageArmadura() {
  const [armadura, setArmadura] = useState([]);
  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    listArmadura();
  }, []);

  async function listArmadura() {
    if (loading) {
      return;
    }

    if (total > 0 && armadura.length === total) {
      return;
    }

    setLoading(true);

    const request = new Request();
    const response = await request.GET('/armaduras');
    const {docs} = response.data;
    setArmadura([...armadura, ...docs]);
    setTotal(response.data.total);
    setPage(page + 1);
    setLoading(false);
  }

  async function deleteArmadura(item) {
    const id = item._id;
    const url = `/armaduras/${id}`;

    const request = new Request();
    request.DELETE(url).then(async () => {
      listArmadura().then(async () => {
        console.log('ok!');
      });
    });
  }

  function BuildFlatList() {
    if (armadura.length === 0) {
      return (
        <View style={styles.listZero}>
          <Text style={styles.listZeroText}>Adicione Suas Armaduras.</Text>
        </View>
      );
    } else {
      return (
        <FlatList
          style={styles.armaduraList}
          data={armadura}
          keyExtractor={item => String(item._id)}
          showsVerticalScrollIndicator={false}
          onEndReached={listArmadura}
          onEndReachedThreshold={0.2}
          renderItem={({item}) => (
            <View style={styles.armadura}>
              <View style={styles.armaduraTextAll}>
                <Text style={styles.armaduraText}>Nome</Text>
                <Text style={styles.armaduraText}>Absorção</Text>
              </View>
              <View style={styles.armaduraTextAll}>
                <Text style={styles.armaduraTextValue}>{item.nome}</Text>
                <Text style={styles.armaduraTextValue}>{item.absorcao}</Text>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity
                  style={styles.actionEdit}
                  onPress={() => {
                    navigation.navigate('EditarArmadura', {values: item});
                  }}>
                  <Text style={styles.actionText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.actionRemove}
                  onPress={() => {
                    deleteArmadura(item);
                  }}>
                  <Text style={styles.actionText}>Remover</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      );
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.headerLogo} source={logoArmadura} />
        <Text style={styles.headerText}>
          Adicione, edite, remova e veja suas armaduras.
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.action}
          onPress={() => {
            navigation.navigate('CadastroArmadura');
          }}>
          <Text style={styles.actionText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.total}>
        Total de <Text style={styles.totalText}>{total} armaduras</Text>.
      </Text>
      <BuildFlatList />
    </View>
  );
}
