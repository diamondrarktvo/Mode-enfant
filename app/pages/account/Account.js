import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Icon, CheckBox } from '@rneui/themed';

import { nameStackNavigation as nameNav } from '_utils/constante/NameStackNavigation';
import { Colors } from '_theme/Colors';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@rneui/base';

import {
   getStarted,
   accountPick,
   deleteAccount,
} from '_utils/redux/actions/action_creators';

export default function Account({ navigation }) {
   //all states
   const dispatch = useDispatch();
   const [selectAccount, setSelectAccount] = useState(0);
   const [accountPicked, setAccountPicked] = useState(null);
   const accounts = useSelector((selector) => selector.fonctionnality.accounts);
   //all efects
   useEffect(() => {
      if (accounts.length === 0) {
         setAccountPicked(null);
      }
   }, [accounts]);

   //all components

   const _renderItem = ({ item }) => {
      return (
         <TouchableOpacity activeOpacity={0.8}>
            <View key={item.id} style={styles.view_container_renderItem}>
               <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={selectAccount === item.id}
                  onPress={() => {
                     setSelectAccount(item.id);
                     setAccountPicked(item);
                  }}
                  containerStyle={{ backgroundColor: Colors.grey }}
               />
               <View
                  style={{
                     width: 90,
                     display: 'flex',
                     flexDirection: 'row',
                     marginRight: 130,
                  }}
               >
                  <Image
                     style={styles.icon_profil_flat}
                     source={
                        item.sexe === 'garcon'
                           ? require('_images/boy.png')
                           : require('_images/girl.png')
                     }
                  />
                  <Text
                     style={{
                        marginVertical: 8,
                        marginLeft: 12,
                        paddingRight: 8,
                        fontWeight: '600',
                        fontSize: 24,
                     }}
                     numberOfLines={1}
                  >
                     {item.nom}
                  </Text>
               </View>
               <Icon
                  name={'delete'}
                  color={Colors.red}
                  size={20}
                  onPress={() => dispatch(deleteAccount(item.id))}
               />
               <Icon
                  name={'edit'}
                  color={Colors.blue}
                  size={20}
                  onPress={() => {
                     navigation.navigate(nameNav.editAccount, { compte: item });
                  }}
               />
            </View>
         </TouchableOpacity>
      );
   };

   const _idKeyExtractor = (item, index) =>
      item?.id == null ? index.toString() : item.id.toString();

   return (
      <View style={styles.view_container}>
         <View style={styles.view_profil}>
            <Image style={styles.profil} source={require('_images/boy.png')} />
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
               {accountPicked !== null
                  ? accountPicked.nom
                  : 'Choisir un compte'}
            </Text>
            <View style={styles.view_list_profil}>
               <FlatList
                  data={accounts}
                  key={'_'}
                  keyExtractor={_idKeyExtractor}
                  renderItem={_renderItem}
                  removeClippedSubviews={true}
                  getItemLayout={(data, index) => ({
                     length: data.length,
                     offset: data.length * index,
                     index,
                  })}
                  initialNumToRender={5}
                  maxToRenderPerBatch={3}
               />
            </View>
            <TouchableOpacity
               style={styles.add_profil}
               onPress={() => {
                  navigation.navigate(nameNav.addAccount);
               }}
            >
               <Icon name={'add-circle'} color={Colors.blue} size={26} />
               <Text
                  style={{
                     color: Colors.blue,
                     fontSize: 20,
                     fontWeight: '600',
                     marginLeft: 8,
                  }}
               >
                  Ajouter un compte
               </Text>
            </TouchableOpacity>
         </View>
         <View style={styles.view_boutton}>
            <Button
               color={accountPicked !== null ? '#f05e85' : Colors.grey}
               containerStyle={styles.boutton}
               disabled={accountPicked === null ? true : false}
               onPress={() => {
                  dispatch(getStarted());
                  dispatch(accountPick(accountPicked));
               }}
            >
               Entrer
            </Button>
         </View>
      </View>
   );
}
