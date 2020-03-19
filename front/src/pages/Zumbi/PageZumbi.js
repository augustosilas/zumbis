import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import {Button, List, ListItem} from '@ui-kitten/components';

const DATA = [
  [
    [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Bazuca',
        calibri: 'nem sei',
        dano: 'vish',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Pistola',
        calibri: '.40',
        dano: 'eu hem',
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
    ],
  ],
  [
    [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Bazuca',
        calibri: 'nem sei',
        dano: 'vish',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Pistola',
        calibri: '.40',
        dano: 'eu hem',
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
    ],
  ],
];

const PageZumbi = ({navigation}) => {
  let zumbi = DATA;
  const onSelected = () => {
    navigation.navigate('CadastroZumbi');
  };

  const renderItemAccessory = (styles, index, item) => (
    <View>
      <Button onPress={'remove'}>Deletar</Button>
    </View>
  );

  const renderZumbi = ({item, index}) => {
    const buildStringArmas = () => {};
    const buildStringArmaduras = () => {};

    return (
      <ListItem
        title={`Zumbi ${index}`}
        description={`Armas: ${item.calibri}\n Armaduras: ${item.dano}`}
        accessory={() => renderItemAccessory(styles, index, item)}
        onPress={onSelected}
      />
    );
  };

  return (
    <>
      <View>
        <Button
          appearance={'filled'}
          onPress={() => {
            navigation.navigate('CadastroZumbi');
          }}>
          Cadastrar
        </Button>
      </View>
      <Text>Armas</Text>
      <ScrollView>
        <List data={zumbi} renderItem={renderZumbi} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
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

export default PageZumbi;
