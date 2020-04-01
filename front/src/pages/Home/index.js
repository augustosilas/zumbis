import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

import logoZumbi from '../../../assets/logoZumbi1.png';
import iconArma from '../../../assets/iconArma.png';
import iconArmadura from '../../../assets/iconArmadura.jpg';
import iconZumbi from '../../../assets/zumbi.png';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logoZumbi} source={logoZumbi} />
        <Text style={styles.textHeader}>Crie seu exercito de Zumbis!</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.action}
          onPress={() => {
            navigation.navigate('PageHomeArma');
          }}>
          <View style={styles.iconArma}>
            <Image style={styles.iconImageArma} source={iconArma} />
          </View>
          <Text style={styles.actionText}>Arma</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.action}
          onPress={() => {
            navigation.navigate('PageHomeArmadura');
          }}>
          <View style={styles.iconArmadura}>
            <Image style={styles.iconImageArmadura} source={iconArmadura} />
          </View>
          <Text style={styles.actionText}>Armadura</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.action}
          onPress={() => {
            navigation.navigate('PageHomeZumbi');
          }}>
          <View style={styles.iconArma}>
            <Image style={styles.iconImageZumbi} source={iconZumbi} />
          </View>
          <Text style={styles.actionText}>Zumbi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
