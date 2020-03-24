import React, {Component, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';

import {Button, List, ListItem, ButtonGroup} from '@ui-kitten/components';

import Request from '../../services/requests';

export default class PageZumbi extends Component {
  state = {
    zumbi: [],
  };

  componentDidMount() {
    this.listZumbi();
  }

  onSelected = item => {
    this.props.navigation.navigate('EditaZumbi', {values: item});
  };

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
      <ButtonGroup style={styles.buttonGroup} status="primary">
        <Button onPress={() => this.onSelected(item)}>Editar</Button>
        <Button onPress={async () => await this.deleteZumbi(item)}>
          Deletar
        </Button>
      </ButtonGroup>
    );
  }

  renderZumbi({item, index}) {
    return (
      <ListItem
        title={`Zumbi ${index}`}
        description={this.showString(item)}
        accessory={() => this.renderItemAccessory(styles, index, item)}
        onPress={() => this.props.navigation.navigate('EditaZumbi')}
      />
    );
  }

  showString(item) {
    const {arma, armadura} = item;
    let arm = '';
    let armadur = '';
    arma.forEach(element => {
      arm += element.nome + ' ';
    });

    armadura.forEach(element => {
      armadur += element.nome + ' ';
    });

    return `Armas: ${arm} \nArmaduras: ${armadur}`;
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
