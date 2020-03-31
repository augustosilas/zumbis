import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';

import Request from '../../services/requests';

export default function PageArmadura() {
  const navigation = useNavigation();

  function onSelected(item) {
    navigation.navigate('EditaArmadura', {values: item});
  }

  async function deleteArmaduras(item) {
    const id = item._id;
    const url = `/armaduras/${id}`;

    const request = new Request();
    request.DELETE(url).then(async () => {
      listArmaduras().then(async () => {
        console.log('ok!');
      });
    });
  }

  async function listArmaduras() {
    const request = new Request();
    const response = await request.GET('/armaduras');
    const {docs} = response.data;
    // this.setState({armaduras: docs});
  }

  return <View />;
}
