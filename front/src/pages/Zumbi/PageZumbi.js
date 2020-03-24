import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import {Button, List, ListItem} from '@ui-kitten/components';

export default class PageZumbi extends Component {
  state = {
    zumbi: {arma: [], armadura: []},
  };

  render() {
    return (
      <>
        <View>
          <Button
            appearance={'filled'}
            onPress={() => {
              this.props.navigation.navigate('CadastroZumbi');
            }}>
            Cadastrar
          </Button>
        </View>
        <FlatList
          data={}
          keyExtractor={key => key.id}
          renderItem={''}></FlatList>
      </>
    );
  }
}

function renderItemAccessory(styles, index, item) {
  return (
    <View>
      <Button onPress={'remove'}>Deletar</Button>
    </View>
  );
}

function renderZumbi({item, index}) {
  return (
    <ListItem
      title={`Zumbi ${index}`}
      description={`Armas: ${item.calibri}\n Armaduras: ${item.dano}`}
      accessory={() => renderItemAccessory(styles, index, item)}
      onPress={onSelected}
    />
  );
}

// const PageZumbi = ({navigation}) => {
//   let zumbi = DATA;
//   const onSelected = () => {
//     navigation.navigate('CadastroZumbi');
//   };

// const renderItemAccessory = (styles, index, item) => (
//   <View>
//     <Button onPress={'remove'}>Deletar</Button>
//   </View>
// );

// const renderZumbi = ({item, index}) => {
//   return (
//     <ListItem
//       title={`Zumbi ${index}`}
//       description={`Armas: ${item.calibri}\n Armaduras: ${item.dano}`}
//       accessory={() => renderItemAccessory(styles, index, item)}
//       onPress={onSelected}
//     />
//   );
// };

//   return (
// <>
//   <View>
//     <Button
//       appearance={'filled'}
//       onPress={() => {
//         navigation.navigate('CadastroZumbi');
//       }}>
//       Cadastrar
//     </Button>
//   </View>
//   <Text>Armas</Text>
//   <ScrollView>
//     <List data={zumbi} renderItem={renderZumbi} />
//   </ScrollView>
// </>
//   );
// };

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

// export default PageZumbi;
