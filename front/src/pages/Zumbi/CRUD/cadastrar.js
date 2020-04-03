import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import * as CheckBox from '@react-native-community/checkbox';

import Request from '../../../services/requests';
import styles from './styles';

export default function cadastrar() {
  const [armas, setArmas] = useState([]);
  const [armaduras, setArmaduras] = useState([]);
  // const [zumbi, setZumbi] = useState({});
  const [zumbi, setZumbi] = useState({});

  const [totalArmas, setTotalArmas] = useState(0);
  const [totalArmaduras, setTotalArmaduras] = useState(0);

  const [armasCheck, setArmasCheck] = useState([]);
  const [armadurasCheck, setArmadurasCheck] = useState([]);

  useEffect(() => {
    listDados();
  }, []);

  async function request(url) {
    const response = await Request.GET(`/${url}`);
    return response.data;
  }

  async function listDados() {
    request('armas').then(({docs, total}) => {
      setArmas(docs);
      setTotalArmas(total);
    });

    request('armaduras').then(({docs, total}) => {
      setArmaduras(docs);
      setTotalArmaduras(total);
    });
  }

  async function createZumbi() {
    var url = '/zumbi';
    Request.POST(zumbi, url).then(response => console.log(response));
  }

  function Item({title}) {
    const [checked, setChecked] = useState(false);

    let data = {arma: [], armadura: []};

    const onCheckedChange = () => {
      // const index = data.arma.indexOf(title);
      // data.arma.splice(index, 1);

      setChecked(!checked);
    };

    return (
      <View>
        <CheckBox value={checked} onChange={() => setChecked(!checked)} />
      </View>
    );
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
        <Text style={styles.contentTitle}>
          Armas: <Text style={styles.total}>{totalArmas}</Text>
        </Text>
        <FlatList
          style={styles.contentFlatList}
          data={armas}
          numColumns={2}
          keyExtractor={key => key._id}
          renderItem={({item}) => (
            <View style={styles.contentText}>
              <Item title={item} />
              <Text style={styles.contentLabel}>
                Nome: <Text style={styles.contentValue}> {item.nome}</Text>
              </Text>

              <Text style={styles.contentLabel}>
                Calibri: <Text style={styles.contentValue}>{item.calibri}</Text>
              </Text>

              <Text style={styles.contentLabel}>
                Dano: <Text style={styles.contentValue}>{item.dano}</Text>
              </Text>
            </View>
          )}
        />
        <Text style={styles.contentTitle}>
          Armaduras: <Text style={styles.total}>{totalArmaduras}</Text>
        </Text>
        <FlatList
          style={styles.contentFlatList}
          data={armaduras}
          numColumns={2}
          keyExtractor={key => key._id}
          renderItem={({item}) => (
            <View style={styles.contentText}>
              <Item title={item} />
              <Text style={styles.contentLabel}>
                Nome: <Text style={styles.contentValue}>{item.nome}</Text>
              </Text>
              <Text style={styles.contentLabel}>
                Absorção:{' '}
                <Text style={styles.contentValue}>{item.absorcao}</Text>
              </Text>
            </View>
          )}
        />
      </View>
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
