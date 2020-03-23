import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

import {Button, List, ListItem, ButtonGroup} from '@ui-kitten/components';

import Request from '../../services/requests';

let DATA = [];

const PageArma = ({navigation}) => {
  const onSelected = async item => {
    await navigation.navigate('EditarArma', {values: item});
  };

  const renderItem = ({item, index}) => (
    <ListItem
      title={`${item.nome}`}
      description={`Calibri: ${item.calibri} \n Dano: ${item.dano}`}
      accessory={() => renderItemAccessory(styles, index, item)}
      onPress={() => onSelected(item)}
    />
  );

  const renderItemAccessory = (style, index, item) => (
    <View>
      <ButtonGroup style={styles.buttonGroup} status="primary">
        <Button onPress={async () => onSelected(item)}>Editar</Button>
        <Button onPress={async () => deleteArmas(item)}>Deletar</Button>
      </ButtonGroup>
    </View>
  );

  const deleteArmas = async item => {
    console.log(item);
    const id = item._id;
    const url = `/armas/${id}`;

    const request = new Request();
    return await request.DELETE(url);
  };

  const listArmas = async () => {
    const request = new Request();
    const response = await request.GET('/armas');
    const {docs} = response.data;
    DATA = docs;
  };
  listArmas();

  return (
    <View>
      <View>
        <Button
          appearance={'filled'}
          onPress={() => {
            navigation.navigate('CadastroArma');
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

PageArma.navigationOptions = {
  title: 'Armas',
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

export default PageArma;
