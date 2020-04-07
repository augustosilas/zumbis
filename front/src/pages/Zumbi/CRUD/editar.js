import React, {useState, useEffect, useCallback} from 'react';
import {useRoute} from '@react-navigation/native';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import Request from '../../../services/requests';
import styles from './styles';

export default function cadastrar() {
  const route = useRoute();
  const {arma: currentArma, armadura: currentArmadura} = route.params.value;

  const [armas, setArmas] = useState([]);
  const [armaduras, setArmaduras] = useState([]);

  const [totalArmas, setTotalArmas] = useState(0);
  const [totalArmaduras, setTotalArmaduras] = useState(0);

  const [armasSelected, setArmasSelected] = useState(currentArma);
  const [armadurasSelected, setArmadurassSelected] = useState(currentArmadura);

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
    listDados().then();
    setCurrentItem();
  }, []);

  async function setCurrentItem() {
    if (armasSelected.length !== 0) {
      setCurrent(armasSelected);
    }
    if (armadurasSelected.length !== 0) {
      setCurrent(armasSelected);
    }
  }
  async function setCurrent(array) {
    array.forEach(element => {
      onSelect(element);
    });
  }
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

  async function updateZumbi() {
    const zumbi = {arma: armasSelected, armadura: armadurasSelected};

    var url = '/zumbi';
    Request.POST(zumbi, url).then(response => console.log('ok'));
    setSelected(new Map());
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Edite seu zumbi</Text>
        <TouchableOpacity
          style={styles.headerAction}
          onPress={() => updateZumbi()}>
          <Text style={styles.headerActionText}>Editar Zumbi</Text>
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
