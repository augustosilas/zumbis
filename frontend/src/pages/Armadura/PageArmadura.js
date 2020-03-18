import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Button, ButtonGroup, List, ListItem} from '@ui-kitten/components';

const DATA = [
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
];

const PageArmadura = ({navigation}) => {
  const onSelected = item => {
    navigation.navigate('EditaArmadura', {values: item});
  };
  const renderItemAccessory = (style, index, item) => (
    <View>
      <ButtonGroup style={styles.buttonGroup} status="primary">
        <Button onPress={() => onSelected(item)}>Editar</Button>
        <Button onPress={'remove'}>Deletar</Button>
      </ButtonGroup>
    </View>
  );

  const renderItem = ({item, index}) => (
    <ListItem
      title={`${item.nome}`}
      description={`Absorção: ${item.absorcao}`}
      accessory={() => renderItemAccessory(item)}
      onPress={() => onSelected(item)}
    />
  );

  return (
    <View>
      <View>
        <Button
          appearance={'filled'}
          onPress={() => {
            navigation.navigate('CadastroArmadura');
          }}>
          Cadastrar
        </Button>
      </View>
      <View>
        <List data={DATA} renderItem={renderItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
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

PageArmadura.navigationOptions = {
  title: 'Armaduras',
};

export default PageArmadura;
