import React, {Component} from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';

import {Button as ButtonUI, Icon, List, ListItem} from '@ui-kitten/components';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light as lightTheme} from '@eva-design/eva';
// import Constants from 'expo-constants';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({title}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const renderItemAccessory = style => <ButtonUI style={style}>Deletar</ButtonUI>;

const renderItem = ({item, index}) => (
  <ListItem
    title={`${item.title} ${index + 1}`}
    description={`${item.description} ${index + 1}`}
    // icon={renderItemIcon}
    accessory={renderItemAccessory}
  />
);

function PageArma({navigation}) {
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <SafeAreaView style={styles.container}>
        <View>
          <View>
            <ButtonUI
              appearance={'filled'}
              onPress={() => {
                navigation.navigate('CadastroArma');
              }}>
              Cadastrar
            </ButtonUI>
            <ButtonUI
              onPress={() => {
                navigation.navigate('EditarArma');
              }}>
              Editar
            </ButtonUI>
          </View>
          <View>
            <List data={DATA} renderItem={renderItem} />
          </View>
        </View>
      </SafeAreaView>
    </ApplicationProvider>
  );
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

export default PageArma;
