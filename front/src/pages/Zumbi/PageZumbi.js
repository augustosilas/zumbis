import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';

import styles from './styles';
import logoZumbi from '../../../assets/zumbiLogo.png';
import Request from '../../services/requests';

export default function PageZumbi() {
  const [zumbis, setZumbis] = useState([]);
  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function onSelected(item) {
    navigation.navigate('EditaZumbi', {values: item});
  }

  useEffect(() => {
    listZumbi();
  }, []);

  async function listZumbi() {
    if (loading) {
      return;
    }

    if (total > 0 && zumbis.length === total) {
      return;
    }

    setLoading(true);

    var url = '/zumbi';
    const response = await Request.GET(url);
    const {docs} = response.data;

    setZumbis([...zumbis, ...docs]);
    setTotal(response.data.total);
    setPage(page + 1);
    setLoading(false);
  }

  async function deleteZumbi(item) {
    var id = item._id;
    var url = `/zumbi/${id}`;

    Request.DELETE(url).then(async () => {
      listZumbi().then(async () => {
        console.log('ok!');
      });
    });
  }

  function BuildFlatListArmaduras({item}) {
    return (
      <View>
        <FlatList
          data={item.armadura}
          keyExtractor={({item: key}) => item._id}
          renderItem={({item: armadura}) => (
            <View style={styles.zumbiTextAll}>
              <Text style={styles.zumbiTextValue}>{armadura.nome}</Text>
              <Text style={styles.zumbiTextValue}>{armadura.absorcao}</Text>
            </View>
          )}
        />
      </View>
    );
  }

  function BuildFlatListArmas({item}) {
    return (
      <View>
        <FlatList
          data={item.arma}
          keyExtractor={({item: key}) => item._id}
          renderItem={({item: arma}) => (
            <View style={styles.zumbiTextAll}>
              <Text style={styles.zumbiTextValue}>{arma.nome}</Text>
              <Text style={styles.zumbiTextValue}>{arma.calibri}</Text>
              <Text style={styles.zumbiTextValue}>{arma.dano}</Text>
            </View>
          )}
        />
      </View>
    );
  }

  function BuildFlatList() {
    if (zumbis.length === 0) {
      return (
        <View style={styles.listZero}>
          <Text style={styles.listZeroText}>Cadastre Seus Zumbis</Text>
        </View>
      );
    } else {
      return (
        <FlatList
          style={styles.zumbiList}
          data={zumbis}
          keyExtractor={item => String(item._id)}
          showsVerticalScrollIndicator={false}
          onEndReached={listZumbi}
          onEndReachedThreshold={0.2}
          renderItem={({item}) => (
            <View style={styles.zumbi}>
              {/* <View style={styles.zumbiTextAll}>
                <Text style={styles.zumbiText}>Armas</Text>
                <Text style={styles.zumbiText}>Armaduras</Text>
              </View> */}
              <View>
                <BuildFlatListArmas item={item} />
                <BuildFlatListArmaduras item={item} />
              </View>
              <View style={styles.actions}>
                <TouchableOpacity
                  style={styles.actionEdit}
                  onPress={() => {
                    navigation.navigate('EditarZumbi', {values: item});
                  }}>
                  <Text style={styles.actionText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.actionRemove}
                  onPress={() => {
                    // deletezumbi(item);
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
        <Image source={logoZumbi} style={styles.headerLogo} />
        <Text style={styles.headerText}>
          Cadastre, edite, remova e veja seus zumbis.
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.action}
          onPress={() => {
            navigation.navigate('CadastroArma');
          }}>
          <Text style={styles.actionText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.total}>
        Total de <Text style={styles.totalText}>{total} zumbis</Text>.
      </Text>
      <BuildFlatList />
    </View>
  );
}
