import React, {Component, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Request from '../../services/requests';

import {Button, ButtonGroup, List, ListItem} from '@ui-kitten/components';

export default class PageArmadura extends Component {
  state = {
    armaduras: [],
  };

  componentDidMount() {
    this.listArmaduras();
  }

  onSelected = item => {
    this.props.navigation.navigate('EditaArmadura', {values: item});
  };

  renderItemAccessory = (style, index, item) => (
    <View>
      <ButtonGroup style={styles.buttonGroup} status="primary">
        <Button onPress={async () => await this.onSelected(item)}>
          Editar
        </Button>
        <Button onPress={async () => await this.deleteArmaduras(item)}>
          Deletar
        </Button>
      </ButtonGroup>
    </View>
  );

  renderItem = ({item, index}) => (
    <ListItem
      title={`${item.nome}`}
      description={`Absorção: ${item.absorcao}`}
      accessory={() => this.renderItemAccessory(styles, index, item)}
      onPress={() => this.onSelected(item)}
    />
  );

  deleteArmaduras = async item => {
    const id = item._id;
    const url = `/armaduras/${id}`;

    const request = new Request();
    request.DELETE(url).then(async () => {
      this.listArmaduras().then(async () => {
        console.log('ok!');
      });
    });
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
          <Button
            appearance={'filled'}
            onPress={() => {
              this.props.navigation.navigate('CadastroArmadura');
            }}>
            Cadastrar
          </Button>
        </View>
        <View>
          <List
            data={this.state.armaduras}
            renderItem={item => this.renderItem(item)}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}

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

// export default PageArmadura;
