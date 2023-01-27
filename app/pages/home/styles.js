import { Colors } from '_theme/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   view_container: {
      flex: 1,
      marginTop: 30,
      paddingHorizontal: 15,
      backgroundColor: Colors.violet,
   },
   view_profil: {
      paddingHorizontal: 8,
      paddingVertical: 5,
      width: 80,
      borderRadius: 28,
      borderWidth: 5,
      borderColor: Colors.white,
      backgroundColor: '#f8bd47',
   },
   profil: {
      width: 60,
      height: 60,
   },
   view_card: {
      weight: 360,
      borderRadius: 16,
      padding: 12,
      backgroundColor: Colors.background,
   },
   view_list_profil: {},
   view_container_renderItem: {
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'space-between',
   },
   icon_profil_flat: {
      width: 32,
      height: 32,
   },
   boutton: {
      width: 150,
      borderRadius: 15,
   },
});
