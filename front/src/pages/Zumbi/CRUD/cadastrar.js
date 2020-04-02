import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import CheckBox from 'react-native-check-box';

import Request from '../../../services/requests';
import styles from './styles';

export default function cadastrar() {
  const [armas, setArmas] = useState([]);
  const [armaduras, setArmaduras] = useState([]);
  const [zumbi, setZumbi] = useState([]);

  useEffect(() => {
    listDados();
  }, []);

  async function request(url) {
    const response = await Request.GET(`/${url}`);
    const {docs} = response.data;
    return docs;
  }

  async function listDados() {
    let response;
    response = await request('armas');
    setArmas(response);

    response = await request('armaduras');
    setArmaduras(response);
  }

  async function createZumbi() {
    var url = '/zumbi';
    await Request.POST(zumbi, url);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Crie seu zumbi</Text>
        <TouchableOpacity
          style={styles.headerAction}
          onPress={() => createZumbi()}>
          <Text style={styles.headerActionText}>Criar Zumbi</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>Armas</Text>
        <FlatList
          style={styles.contentFlatList}
          data={armas}
          numColumns={2}
          keyExtractor={key => key._id}
          renderItem={({item}) => (
            <View style={styles.contentText}>
              <Item title={item} />
              <Text style={styles.contentLabel}>Nome</Text>
              <Text style={styles.contentValue}>{item.nome}</Text>

              <Text style={styles.contentLabel}>Calibri</Text>
              <Text style={styles.contentValue}>{item.calibri}</Text>

              <Text style={styles.contentLabel}>Dano</Text>
              <Text style={styles.contentValue}>{item.dano}</Text>
            </View>
          )}
        />
        <Text style={styles.contentTitle}>Armaduras</Text>
        <FlatList
          style={styles.contentFlatList}
          data={armaduras}
          numColumns={3}
          keyExtractor={key => key._id}
          renderItem={({item}) => <Item title={item} />}
        />
      </View>
    </View>
  );
}

function Item({title}) {
  const [checked, setChecked] = useState(false);

  const onCheckedChange = () => {
    setChecked(!checked);
  };
  return (
    <View>
      <CheckBox isChecked={checked} onClick={onCheckedChange} />
    </View>
  );
}

// var {title} = item;

//       if (title.absorcao !== undefined) {
//         zumbi.armadura.push(title);
//       } else {
//         zumbi.arma.push(title);
//       }
//       console.log(zumbi);
//     }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });
