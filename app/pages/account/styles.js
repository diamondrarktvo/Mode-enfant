import { Colors } from '_theme/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   view_container: {
      flex: 1,
      marginTop: 30,
      paddingTop: 40,
      paddingHorizontal: 15,
      backgroundColor: Colors.violet,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
   },
   view_profil: {
      paddingHorizontal: 8,
      paddingVertical: 5,
      width: 80,
      borderRadius: 28,
      borderWidth: 5,
      borderColor: Colors.white,
      backgroundColor: Colors.yellow,
      marginBottom: 10,
   },
   profil: {
      width: 60,
      height: 60,
   },
   view_card: {
      marginHorizontal: 10,
      width: 360,
      height: 'auto',
      borderRadius: 16,
      padding: 12,
      backgroundColor: Colors.background,
   },
   view_list_profil: {
      marginVertical: 30,
   },
   view_container_renderItem: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: Colors.grey,
      marginVertical: 5,
      borderRadius: 22,
   },
   icon_profil_flat: {
      width: 34,
      height: 34,
   },
   add_profil: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
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
      padding: 12,
   },
});
