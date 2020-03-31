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
    backgroundColor: '#000',
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 80,
    borderRadius: 30,
  },
  actionText: {
    color: '#FFF',
    paddingLeft: 5,
    fontWeight: 'bold',
  },
  armas: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#FFF',
    // marginBottom: 5,
    marginTop: 15,
  },
  armasTextAll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  armasText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  armasTextValue: {
    fontSize: 16,
  },
  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionEdit: {
    backgroundColor: '#000',
    height: 50,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 28,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  actionRemove: {
    backgroundColor: '#000',
    height: 50,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginRight: 28,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  armasList: {
    marginTop: 20,
  },
});
