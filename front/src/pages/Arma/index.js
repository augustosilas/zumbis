import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import Request from '../../services/requests';

import logoArma from '../../../assets/logoArma.jpg';

export default function PageArma() {
  const [armas, setArmas] = useState([]);
  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    listArmas();
  }, []);

  async function listArmas() {
    if (loading) {
      return;
    }

    if (total > 0 && armas.length === total) {
      return;
    }

    setLoading(true);

    const response = await Request.GET('/armas');
    const {docs} = response.data;
    setArmas([...armas, ...docs]);
    setTotal(response.data.total);
    setPage(page + 1);
    setLoading(false);
  }

  async function deleteArmas(item) {
    const id = item._id;
    const url = `/armas/${id}`;
    try {
      Request.DELETE(url).then(async () => {
        listArmas().then(async () => {
          console.log('ok!');
        });
      });
    } catch (error) {
      alert('Não possível deletar');
    }
  }

  function BuildFlatList() {
    if (armas.length === 0) {
      return (
        <View style={styles.listZero}>
          <Text style={styles.listZeroText}>Cadastre Suas Armas</Text>
        </View>
      );
    } else {
      return (
        <FlatList
          style={styles.armasList}
          data={armas}
          keyExtractor={item => String(item._id)}
          showsVerticalScrollIndicator={false}
          onEndReached={listArmas}
          onEndReachedThreshold={0.2}
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
                <TouchableOpacity
                  style={styles.actionEdit}
                  onPress={() => {
                    navigation.navigate('EditarArma', {values: item});
                  }}>
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
      );
    }
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
      <Text style={styles.total}>
        Total de <Text style={styles.totalText}>{total} armas</Text>
      </Text>
      <BuildFlatList />
    </View>
  );
}
