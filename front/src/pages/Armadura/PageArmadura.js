import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Request from '../../services/requests';

import {Button, ButtonGroup, List, ListItem} from '@ui-kitten/components';

let DATA = [];

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

  const listArmaduras = async () => {
    const request = new Request();
    const response = await request.GET('/armaduras');
    const {docs} = response.data;
    console.log(docs);
    DATA = docs;
  };
  listArmaduras();

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
