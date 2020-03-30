import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import logoZumbi from '../../assets/logoZumbi1.png';
import iconArma from '../../assets/iconArma.png';
import iconArmadura from '../../assets/iconArmadura.jpg';
import iconZumbi from '../../assets/zumbi.png';

import imageBack from '../../assets/imageBack2.jpg';

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
            navigation.navigate('PageHomeZumbi');
          }}>
          <View style={styles.iconArmadura}>
            <Image style={styles.iconImageArmadura} source={iconArmadura} />
          </View>
          <Text style={styles.actionText}>Armadura</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.action}
          onPress={() => {
            navigation.navigate('PageHomeArma');
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    // margin: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoZumbi: {
    aspectRatio: 1,
    width: 80,
    height: 30,
    resizeMode: 'contain',
    marginRight: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  textHeader: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  iconImageArma: {
    width: 30,
    height: 30,
  },
  iconImageArmadura: {
    width: 38,
    height: 38,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  iconImageZumbi: {
    width: 35,
    height: 35,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  iconArma: {
    backgroundColor: '#ffffff',
    width: 38,
    height: 38,
    marginLeft: 6,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  iconArmadura: {
    width: 10,
    height: 38,
    marginLeft: 6,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  actions: {
    flex: 0.8,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 80,
  },
  action: {
    backgroundColor: '#000000',
    borderRadius: 8,
    height: 55,
    width: 180,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  actionText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    alignItems: 'center',
    paddingRight: 50,
  },
});
