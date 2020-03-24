import React, {Component, useState} from 'react';
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
        <Button onPress={async () => onSelected(item)}>Editar</Button>
        <Button onPress={async () => deleteArmaduras(item)}>Deletar</Button>
      </ButtonGroup>
    </View>
  );

  const renderItem = ({item, index}) => (
    <ListItem
      title={`${item.nome}`}
      description={`Absorção: ${item.absorcao}`}
      accessory={() => renderItemAccessory(styles, index, item)}
      onPress={() => onSelected(item)}
    />
  );

  const deleteArmaduras = async item => {
    const id = item._id;
    const url = `/armaduras/${id}`;
    console.log(url);

    const request = new Request();
    request.DELETE(url).then(async () => {
      listArmaduras().then(async () => {
        console.log('ok!');
      });
    });
  };

  const listArmaduras = async () => {
    const request = new Request();
    const response = await request.GET('/armaduras');
    const {docs} = response.data;
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
