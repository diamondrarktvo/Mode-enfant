import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Colors } from '_theme/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles';

export default function About({ navigation }) {
   const dispatch = useDispatch();

   /*const langueActual = useSelector(
      (selector) => selector.fonctionnality.langue
   );*/

   return (
      <KeyboardAwareScrollView style={{ backgroundColor: Colors.background }}>
         <View style={styles.view_container}>
            <Text>Test About</Text>
         </View>
      </KeyboardAwareScrollView>
   );
}
