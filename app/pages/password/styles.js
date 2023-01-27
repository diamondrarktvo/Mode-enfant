import { Colors } from '_theme/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   view_container: {
      flex: 1,
   },
   backgroundImage: {
      flex: 1,
      paddingTop: 40,
   },
   textWarning: {
      height: 60,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
   },
   input_bar_password: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginTop: 210,
      marginHorizontal: 60,
   },
   forgetPassword: {
      marginTop: 36,
   },
   keyboard_numeric_list: {
      width: 240,
      marginHorizontal: 80,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
   },
   one_pave_numerique: {
      paddingVertical: 8,
      paddingHorizontal: 22,
      fontSize: 52,
      color: '#bd8971',
   },
});
