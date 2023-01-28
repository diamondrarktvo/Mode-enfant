import { Colors } from '_theme/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   view_container: {
      flex: 1,
   },
   backgroundImage: {
      flex: 1,
      paddingTop: 166,
      justifyContent: 'space-between',
   },
   view_application: {
      marginHorizontal: 8,
      width: '100%',
      height: 'auto',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
   },
   one_applis: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 8,
   },
   icon_applis: {
      width: 80,
      height: 80,
   },
   name_applis: {
      fontSize: 18,
      fontWeight: '600',
      color: Colors.black,
   },
   view_bottom_bar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 18,
      marginTop: 28,
      marginBottom: 52,
   },
   bottom_bar: {
      backgroundColor: Colors.yellow,
      padding: 5,
      borderRadius: 30,
      borderWidth: 6,
      borderColor: '#fae2b2',
   },
});
