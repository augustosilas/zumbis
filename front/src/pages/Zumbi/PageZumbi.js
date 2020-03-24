import React, {Component, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';

import {Button, List, ListItem} from '@ui-kitten/components';

import Request from '../../services/requests';

export default class PageZumbi extends Component {
  state = {
    zumbi: [],
  };

  componentDidMount() {
    this.listZumbi();
  }

  listZumbi = async () => {
    var url = '/zumbi';
    const request = new Request();
    const dados = await request.GET(url);
    const {docs} = dados.data;
    this.setState({zumbi: docs});
  };

  deleteZumbi = async item => {
    var id = item._id;
    var url = `/zumbi/${id}`;

    const request = new Request();
    request.DELETE(url).then(async () => {
      this.listZumbi().then(async () => {
        console.log('ok!');
      });
    });
  };

  renderItemAccessory(styles, index, item) {
    return (
      <View>
        <Button onPress={async () => await this.deleteZumbi(item)}>
          Deletar
        </Button>
      </View>
    );
  }

  renderZumbi({item, index}) {
    return (
      <ListItem
        title={`Zumbi ${index}`}
        description={`Armas: ${item.arma}\n Armaduras: ${item.armadura}`}
        accessory={() => this.renderItemAccessory(styles, index, item)}
        // onPress={() => this.props.navigation.navigate('CadastroZumbi')}
      />
    );
  }

  render() {
    return (
      <>
        <View>
          <Button
            appearance={'filled'}
            onPress={() => this.props.navigation.navigate('CadastroZumbi')}>
            Cadastrar
          </Button>
        </View>
        <ScrollView>
          <List
            data={this.state.zumbi}
            keyExtractor={item => item._id}
            renderItem={item => this.renderZumbi(item)}
          />
        </ScrollView>
      </>
    );
  }
}

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
