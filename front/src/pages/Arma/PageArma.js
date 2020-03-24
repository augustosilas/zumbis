import React, {useEffect, Component} from 'react';
import {View, StyleSheet} from 'react-native';

import {Button, List, ListItem, ButtonGroup} from '@ui-kitten/components';

import Request from '../../services/requests';

export default class PageArma extends Component {
  state = {
    armas: [],
  };

  componentDidMount() {
    this.listArmas();
  }

  onSelected = item => {
    this.props.navigation.navigate('EditarArma', {values: item});
  };

  renderItem = ({item, index}) => {
    return (
      <ListItem
        title={`${item.nome}`}
        description={`Calibri: ${item.calibri} \n Dano: ${item.dano}`}
        accessory={() => this.renderItemAccessory(styles, index, item)}
        onPress={() => this.onSelected(item)}
      />
    );
  };

  renderItemAccessory = (styles, index, item) => {
    return (
      <View>
        <ButtonGroup style={styles.buttonGroup} status="primary">
          <Button onPress={() => this.onSelected(item)}>Editar</Button>
          <Button onPress={async () => await this.deleteArmas(item)}>
            Deletar
          </Button>
        </ButtonGroup>
      </View>
    );
  };

  deleteArmas = async item => {
    console.log(item);
    const id = item._id;
    const url = `/armas/${id}`;

    const request = new Request();
    request.DELETE(url).then(async () => {
      this.listArmas().then(async () => {
        console.log('ok!');
      });
    });
  };

  listArmas = async () => {
    const request = new Request();
    const response = await request.GET('/armas');
    const {docs} = response.data;
    this.setState({armas: docs});
  };

  render() {
    return (
      <View>
        <View>
          <Button
            appearance={'filled'}
            onPress={async () => {
              this.props.navigation.navigate('CadastroArma');
            }}>
            Cadastrar
          </Button>
        </View>
        <View>
          <List data={this.state.armas} renderItem={this.renderItem} />
        </View>
      </View>
    );
  }
}

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

// export default PageArma;
