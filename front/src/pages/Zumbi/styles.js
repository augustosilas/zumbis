import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: 20,
    // margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginLeft: 40,
  },
  headerText: {
    marginRight: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },
  action: {
    backgroundColor: '#000',
    height: 50,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 30,
  },
  actionText: {
    color: '#FFF',
    paddingLeft: 5,
    fontWeight: 'bold',
    fontSize: 15,
  },
  total: {
    fontSize: 13,
    marginTop: 7,
    justifyContent: 'center',
  },
  totalText: {
    fontWeight: 'bold',
  },
  listZero: {
    alignItems: 'center',
    marginVertical: 150,
  },
  listZeroText: {
    color: '#66cdaa',
  },
  zumbiList: {
    marginTop: 10,
  },
  zumbi: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginTop: 5,
  },
  zumbiTextHeader: {
    justifyContent: 'center',
  },
  zumbiTextHeaderColumn: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingHorizontal: 25,
  },
  zumbiTextAll: {
    flexDirection: 'row',
    alignItems: 'baseline',
    // justifyContent: 'space-between',
  },
  zumbiText: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingHorizontal: 15,
    marginTop: 20,
  },
  zumbiTextValue: {
    fontSize: 15,
    paddingHorizontal: 25,
  },
  actions: {
    marginTop: 5,
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
});
