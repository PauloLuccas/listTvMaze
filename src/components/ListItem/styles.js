import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    item: {
      width: '100%',
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#000',
      paddingTop: 15,
      paddingBottom: 15
    },
    itemInfo: {
      marginLeft: 20,
    },
    subContent: {
      paddingTop: 15,
      flexDirection: 'row',
    },
    title: {
      paddingTop: 10,
      fontWeight: '500',
    },
    subtitle: {
      marginLeft: 10,
      color: '#b3b3b3'
    }
  });   