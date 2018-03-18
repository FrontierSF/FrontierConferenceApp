import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  error: {
    color: 'white',
    backgroundColor:'rgba(0,0,0,0)',
    fontStyle: 'italic',
    fontWeight: 'normal'
  },
  logo: {
    marginBottom: 25
  },
  textView: {
    padding: 6,
    margin: 10,
    backgroundColor: 'red',
  },
  textSub: {
    margin: 5,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});
