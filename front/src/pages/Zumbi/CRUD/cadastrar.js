import React, {useState, Component} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';

import {Button, List, ListItem, CheckBox} from '@ui-kitten/components';

import Request from '../../../services/requests';

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

export default class cadastrar extends Component {
  state = {
    armas: [],
    // armaduras: [],
  };

  componentDidMount() {
    this.listArmas();
    this.listArmaduras();
  }

  listArmas = async () => {
    const request = new Request();
    const response = await request.GET('/armas');
    const {docs} = response.data;
    this.setState({armas: docs});
  };

  listArmaduras = async () => {
    const request = new Request();
    const response = await request.GET('/armaduras');
    const {docs} = response.data;
    this.setState({armaduras: docs});
  };

  render() {
    return (
      <View>
        <View>
          <Button appearance={'filled'} onPress={'cadastrar'}>
            Criar Zumbi
          </Button>
        </View>
        <Text>Armas</Text>
        <FlatList
          data={this.state.armas}
          numColumns={3}
          renderItem={({item}) => <Item title={item} />}
        />
        <Text>Armaduras</Text>
        <FlatList
          data={this.state.armaduras}
          numColumns={3}
          renderItem={({item}) => <Item title={item} />}
        />
      </View>
    );
  }
}

function Item(item) {
  const [checked, setChecked] = React.useState(false);

  const onCheckedChange = isChecked => {
    setChecked(isChecked);
    // if (isChecked) {
    //   zumbi.armas.push(item.title);
    //   zumbi.armaduras.push(item.title);
    //   console.log(zumbi);
    // }
  };
  return (
    <CheckBox
      text={item.title.nome}
      checked={checked}
      onChange={onCheckedChange}
    />
  );
}

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
