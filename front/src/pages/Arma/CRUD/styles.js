import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputs: {
    marginTop: 50,
  },
  labelInput: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '900',
    paddingHorizontal: 50,
  },
  textInput: {
    borderColor: '#000',
    borderWidth: 4,
    height: 40,
    width: 150,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  action: {
    marginTop: 50,
    backgroundColor: '#000',
    height: 50,
    width: '40%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 16,
    color: '#FFF',
  },
});
