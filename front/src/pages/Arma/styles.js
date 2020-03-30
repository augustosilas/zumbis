import {StyleSheet} from 'react-native';
// import Constants from 'expo-constants';

export default StyleSheet.create({
  //   item: {
  //     backgroundColor: '#f9c2ff',
  //     padding: 20,
  //     marginVertical: 8,
  //     marginHorizontal: 16,
  //   },
  //   title: {
  //     fontSize: 32,
  //   },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLogo: {
    // aspectRatio: 1,
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 20,
  },
  headerText: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
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
    alignItems: 'center',
    paddingLeft: 60,
  },
});
