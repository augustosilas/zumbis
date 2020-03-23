import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';

import {Button, List, ListItem, CheckBox} from '@ui-kitten/components';

const DATA = [
  [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      nome: 'Bazuca',
      calibri: 'nem sei',
      dano: 'vish',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      nome: 'Pistola',
      calibri: '.40',
      dano: 'eu hem',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      nome: 'Escopeta',
      calibri: 'Doze',
      dano: 'Na cara não, pra não estragar o velório',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      nome: 'Bazuca',
      calibri: 'nem sei',
      dano: 'vish',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      nome: 'Pistola',
      calibri: '.40',
      dano: 'eu hem',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      nome: 'Escopeta',
      calibri: 'Doze',
      dano: 'Na cara não, pra não estragar o velório',
    },
  ],
  [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      nome: 'Casaco',
      absorcao: 'já era',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      nome: 'Armadura de ferro',
      absorcao: 'deu bom',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      nome: 'Colete',
      absorcao: 'bom de mais',
    },
  ],
];

const cadastrar = ({navigation}) => {
  let armas = DATA[0];
  let armaduras = DATA[1];

  let zumbi = {
    armas: [],
    armaduras: [],
  };

  function Item(item) {
    const [checked, setChecked] = React.useState(false);

    const onCheckedChange = isChecked => {
      setChecked(isChecked);
      if (isChecked) {
        zumbi.armas.push(item.title);
        zumbi.armaduras.push(item.title);
        console.log(zumbi);
      }
    };
    return (
      <CheckBox
        text={item.title.nome}
        checked={checked}
        onChange={onCheckedChange}
      />
    );
  }

  return (
    <View>
      <View>
        <Button
          appearance={'filled'}
          onPress={() => {
            navigation.navigate('');
          }}>
          Criar Zumbi
        </Button>
      </View>
      <Text>Armas</Text>
      <FlatList
        data={armas}
        numColumns={3}
        renderItem={({item}) => <Item title={item} />}
      />
      <Text>Armaduras</Text>
      <FlatList
        data={armaduras}
        numColumns={3}
        renderItem={({item}) => <Item title={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default cadastrar;