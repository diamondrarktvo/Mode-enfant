import { Colors } from '_theme/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   view_cont: {
      flex: 1,
      marginTop: 30,
      paddingTop: 40,
      paddingHorizontal: 15,
      backgroundColor: Colors.violet,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
   },
   view_baniere: {
      paddingVertical: 2,
   },
   img_baniere: {
      width: 340,
      height: 100,
   },
   view_card: {
      marginHorizontal: 8,
      width: 360,
      height: 340,
      borderRadius: 16,
      borderWidth: 3,
      borderColor: Colors.violet,
      padding: 12,
      backgroundColor: Colors.background,
   },
   input_profil: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 28,
      marginBottom: 20,
   },
   view_boutton: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
   },
   boutton: {
      width: 140,
      padding: 8,
   },
   label_radio: {
      fontSize: 22,
      fontWeight: 'bold',
   },
});
