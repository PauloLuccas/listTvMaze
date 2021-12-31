import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10
    },
    loading: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
    },
    contentInfo: {
      flexDirection: 'row',
      paddingTop: 15,
      paddingBottom: 15
    },
    title: {
      paddingTop: 5,
      fontWeight: '500',
      fontSize: 18
    },
    subContent: {
      paddingTop: 5,
      flexDirection: 'row',
    },
    subtitle: {
      marginLeft: 10,
      color: '#b3b3b3'
    },
    sinopse: {
      paddingTop: 5,
    },
    button: {
      height: 30,
      backgroundColor: '#0E2F2B',
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20
    },
    text: {
      color: '#fff'
    },
    content: {
      marginLeft: 20
    }
  });