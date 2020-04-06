import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import * as CheckBox from '@react-native-community/checkbox';

import Request from '../../../services/requests';
import styles from './styles';

function Item({item, selected, onSelect}) {
  function BuildList() {
    if (item.absorcao !== undefined) {
      return (
        <>
          <Text style={styles.contentLabel}>
            Nome: <Text style={styles.contentValue}>{item.nome}</Text>
          </Text>
          <Text style={styles.contentLabel}>
            Absorção: <Text style={styles.contentValue}>{item.absorcao}</Text>
          </Text>
        </>
      );
    } else {
      return (
        <>
          <Text style={styles.contentLabel}>
            Nome: <Text style={styles.contentValue}> {item.nome}</Text>
          </Text>

          <Text style={styles.contentLabel}>
            Calibri: <Text style={styles.contentValue}>{item.calibri}</Text>
          </Text>

          <Text style={styles.contentLabel}>
            Dano: <Text style={styles.contentValue}>{item.dano}</Text>
          </Text>
        </>
      );
    }
  }

  return (
    <TouchableOpacity
      onPress={() => onSelect(item)}
      style={[
        styles.contentText,
        {backgroundColor: selected ? '#6e3b6e' : '#800000'}, // #f9c2ff
      ]}>
      <BuildList />
    </TouchableOpacity>
  );
}

export default function cadastrar() {
  const [armas, setArmas] = useState([]);
  const [armaduras, setArmaduras] = useState([]);
  // const [zumbi, setZumbi] = useState({});

  const [totalArmas, setTotalArmas] = useState(0);
  const [totalArmaduras, setTotalArmaduras] = useState(0);

  const [armasSelected, setArmasSelected] = useState([]);
  const [armadurasSelected, setArmadurassSelected] = useState([]);

  const [selected, setSelected] = useState(new Map());

  const onSelect = useCallback(
    item => {
      const newSelected = new Map(selected);
      let bool = !selected.get(item._id);
      newSelected.set(item._id, bool);

      if (bool) {
        if (item.absorcao === undefined) {
          setArmasSelected([...armasSelected, ...[item]]);
        } else {
          setArmadurassSelected([...armadurasSelected, ...[item]]);
        }
      } else {
        if (item.absorcao === undefined) {
          armasSelected.splice(0, 1);
        } else {
          armadurasSelected.splice(0, 1);
        }
      }

      setSelected(newSelected);
    },
    [selected],
  );

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
    const zumbi = {armas: armasSelected, armaduras: armadurasSelected};

    var url = '/zumbi';
    Request.POST(zumbi, url).then(response => console.log(response));
    setSelected(new Map());
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
            <Item
              item={item}
              selected={!!selected.get(item._id)}
              onSelect={onSelect}
            />
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
            <Item
              item={item}
              selected={!!selected.get(item._id)}
              onSelect={onSelect}
            />
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
