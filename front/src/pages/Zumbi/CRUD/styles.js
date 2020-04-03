import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    marginTop: 10,
    alignItems: 'center',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerAction: {
    marginTop: 30,
    paddingHorizontal: 30,
    paddingVertical: 17,
    backgroundColor: '#000',
    borderRadius: 30,
  },
  headerActionText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  total: {
    fontWeight: 'normal',
  },
  contentTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  contentFlatList: {
    // paddingTop: 0,
    // paddingVertical: 10,
  },
  contentText: {
    backgroundColor: '#800000',
    paddingHorizontal: 25,
    paddingVertical: 5,
    margin: 5,
    borderRadius: 10,
    alignItems: 'flex-start',
  },
  contentLabel: {
    fontWeight: 'bold',
    color: '#fff',
  },
  contentValue: {
    fontWeight: '100',
  },
});
