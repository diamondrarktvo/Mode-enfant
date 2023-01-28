import React, { useState, useEffect } from 'react';
import {
   View,
   Text,
   Image,
   SafeAreaView,
   FlatList,
   TouchableOpacity,
   BackHandler,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles';
import { Icon, Input, CheckBox } from '@rneui/themed';

import { nameStackNavigation as nameNav } from '_utils/constante/NameStackNavigation';
import { Colors } from '_theme/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@rneui/base';
import { editAccount } from '_utils/redux/actions/action_creators';

export default function EditAccount({ navigation, route }) {
   //all states
   const dispatch = useDispatch();
   const [selectedSexe, setSexe] = React.useState(0);
   const [childName, setChildName] = useState('');
   const [pass, setPass] = useState();
   const [accountEdit, setAccountEdit] = useState({
      id: null,
      nom: '',
      sexe: '',
   });

   //all efects
   useEffect(() => {
      setAccountEdit({
         id: pass,
         nom: route.params.compte.nom,
         sexe: route.params.compte.sexe,
      });
      setChildName(route.params.compte.nom);
      setPass(route.params.compte.id);
      setSexe(route.params.compte.sexe === 'fille' ? 0 : 1);
   }, []);

   useEffect(() => {
      setAccountEdit({
         id: pass,
         nom: childName,
         sexe: selectedSexe === 0 ? 'fille' : 'garcon',
      });
   }, [selectedSexe, childName]);

   //all function
   function handleBackButtonClick() {
      navigation.navigate(nameNav.account);
      return true;
   }
   //change state isActive when backhandler is touched
   useEffect(() => {
      BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
      return () => {
         BackHandler.removeEventListener(
            'hardwareBackPress',
            handleBackButtonClick
         );
      };
   }, []);

   return (
      <View style={styles.view_cont}>
         <View style={styles.view_baniere}>
            <Image
               style={styles.img_baniere}
               source={require('_images/bears.jpg')}
            />
         </View>
         <View style={styles.view_card}>
            <Text
               style={{
                  color: Colors.black,
                  fontSize: 22,
                  fontWeight: '400',
                  textAlign: 'center',
                  marginVertical: 20,
               }}
            >
               Modifie les informations
            </Text>
            <View style={styles.input_profil}>
               <Input
                  placeholder="Nom de l'enfant"
                  rightIcon={
                     <Icon name="border-color" color={Colors.blue} size={20} />
                  }
                  onChangeText={(value) => setChildName(value)}
                  value={childName}
               />
               <View
                  style={{
                     display: 'flex',
                     flexDirection: 'row',
                     justifyContent: 'center',
                     alignItems: 'center',
                  }}
               >
                  <CheckBox
                     checked={selectedSexe === 0}
                     onPress={() => setSexe(0)}
                     checkedIcon="dot-circle-o"
                     uncheckedIcon="circle-o"
                  />
                  <Text style={styles.label_radio}>Fille</Text>
                  <CheckBox
                     checked={selectedSexe === 1}
                     onPress={() => setSexe(1)}
                     checkedIcon="dot-circle-o"
                     uncheckedIcon="circle-o"
                  />
                  <Text style={styles.label_radio}>Garçon</Text>
               </View>
            </View>
         </View>
         <View style={styles.view_boutton}>
            <Button
               color={childName === '' ? Colors.grey : '#f05e85'}
               containerStyle={styles.boutton}
               disabled={childName === '' ? true : false}
               onPress={() => {
                  dispatch(editAccount(accountEdit));
                  setAccountEdit({ id: null, nom: '', sexe: '' });
                  navigation.navigate(nameNav.account);
               }}
            >
               OK
            </Button>
         </View>
      </View>
   );
}
