import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Button, List, ListItem, ButtonGroup} from '@ui-kitten/components';

import Request from '../../services/requests';

let DATA = [
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
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Escopete',
    calibri: 'Doze',
    dano: 'Na cara não, pra não estragar o velório',
  },
];

const PageArma = ({navigation}) => {
  const onSelected = item => {
    navigation.navigate('EditarArma', {values: item});
  };

  const renderItem = ({item, index}) => (
    <ListItem
      title={`${item.name}`}
      description={`Calibri: ${item.calibri} \n Dano: ${item.dano}`}
      accessory={() => renderItemAccessory(styles, index, item)}
      onPress={() => onSelected(item)}
    />
  );

  const renderItemAccessory = (style, index, item) => (
    <View>
      <ButtonGroup style={styles.buttonGroup} status="primary">
        <Button onPress={() => onSelected(item)}>Editar</Button>
        <Button onPress={'remove'}>Deletar</Button>
      </ButtonGroup>
    </View>
  );

  const listArmas = async () => {
    const request = new Request();
    const result = await request.GET('/armas');
    // console.log(result);
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
