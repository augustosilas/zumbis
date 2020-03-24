import React, {useState, Component} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';

import {Button, List, ListItem, CheckBox} from '@ui-kitten/components';

import Request from '../../../services/requests';

var zumbi = {
  arma: [],
  armadura: [],
};

export default class cadastrar extends Component {
  state = {
    armas: [],
    armaduras: [],
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

  createZumbi = async () => {
    var url = '/zumbi';
    const request = new Request();
    await request.POST(zumbi, url);
  };

  render() {
    return (
      <View>
        <View>
          <Button
            appearance={'filled'}
            onPress={async () => await this.createZumbi()}>
            Criar Zumbi
          </Button>
        </View>
        <Text>Armas</Text>
        <FlatList
          data={this.state.armas}
          numColumns={3}
          keyExtractor={key => key._id}
          renderItem={({item}) => <Item title={item} />}
        />
        <Text>Armaduras</Text>
        <FlatList
          data={this.state.armaduras}
          numColumns={3}
          keyExtractor={key => key._id}
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
    if (isChecked) {
      var {title} = item;

      if (title.absorcao !== undefined) {
        zumbi.armadura.push(title);
      } else {
        zumbi.arma.push(title);
      }
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
