import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import {
   Button,
   View,
   Text,
   StyleSheet,
   ScrollView,
   FlatList,
   ImageBackground,
   TouchableOpacity,
   Image,
   BackHandler,
} from 'react-native';
import { addCheckedApps } from '_utils/redux/actions/action_creators';
import { useSelector, useDispatch } from 'react-redux';
import { Icon, CheckBox } from '@rneui/themed';

import { Colors } from '_theme/Colors';
import { nameStackNavigation as nameNav } from '_utils/constante/NameStackNavigation';

const image = {
   uri: 'https://static.vecteezy.com/ti/vecteur-libre/p3/3232304-nuage-soleil-et-montagne-paysage-ete-ciel-bleu-vectoriel.jpg',
};
const image1 = {
   uri: 'https://img.freepik.com/vecteurs-libre/enfants-heureux-sautant-prairie-ete_74855-5852.jpg?w=2000',
};
const image2 = {
   uri: 'https://icon-library.com/images/add-image-icon/add-image-icon-5.jpg',
};

export default function ListApplications({ navigation }) {
   const dispatch = useDispatch();
   const [checked, setChecked] = React.useState([]);
   const toogleCheck = (item) => {
      if (!checked.includes(item.id)) {
         setChecked([...checked, item.id]);
      } else {
         let newCheck = checked.filter((check) => check !== item.id);
         setChecked(newCheck);
      }
   };

   const allApps = useSelector(
      (selector) => selector.fonctionnality.all_apps_in_phone
   );
   const appsChecked = useSelector(
      (selector) => selector.fonctionnality.apps_checked
   );
   //all efect
   useEffect(() => {
      setChecked(appsChecked);
   }, []);

   useEffect(() => {
      dispatch(addCheckedApps(checked));
   }, [checked]);

   function handleBackButtonClick() {
      navigation.goBack();
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

   //all components
   const _renderItem = ({ item }) => {
      return (
         <TouchableOpacity
            style={styles.view_one_item}
            onPress={() => toogleCheck(item)}
         >
            <Image source={item.icone} style={{ width: 30, height: 30 }} />
            <Text style={styles.text}>{item.nom}</Text>
            <CheckBox
               checked={checked.includes(item.id) ? true : false}
               containerStyle={{ backgroundColor: '#fef1e1' }}
               onPress={() => toogleCheck(item)}
               iconType="material-community"
               checkedIcon="checkbox-outline"
               uncheckedIcon={'checkbox-blank-outline'}
            />
         </TouchableOpacity>
      );
   };

   const _idKeyExtractor = (item, index) =>
      item?.id == null ? index.toString() : item.id.toString();

   return (
      <View style={styles.container}>
         <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}
         >
            <View style={styles.corps}>
               <View
                  style={{
                     backgroundColor: '#77f1ff',
                     paddingVertical: 12,
                     height: 'auto',
                     paddingHorizontal: 8,
                     marginHorizontal: 24,
                     marginVertical: 12,
                     borderRadius: 30,
                  }}
               >
                  <View
                     style={{
                        borderWidth: 2,
                        backgroundColor: 'red',
                        borderColor: Colors.white,
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        position: 'absolute',
                        zIndex: 2,
                        top: -16,
                        left: 24,
                     }}
                  >
                     <Icon
                        name={'chevron-left'}
                        color={Colors.white}
                        size={48}
                        onPress={() => {
                           navigation.goBack();
                        }}
                     />
                  </View>
                  <View
                     style={{
                        backgroundColor: '#fef2e2',
                        paddingVertical: 10,
                        height: 600,
                        paddingHorizontal: 10,
                        marginVertical: 6,
                        marginHorizontal: 6,
                        borderRadius: 30,
                     }}
                  >
                     <Text style={{ textAlign: 'center', fontSize: 18 }}>
                        1 sélectionné
                     </Text>
                     <View
                        style={{
                           backgroundColor: '#fed5b7',
                           paddingVertical: 12,
                           height: 'auto',
                           paddingHorizontal: 12,
                           marginTop: 8,
                           marginBottom: 16,
                           marginHorizontal: 8,
                           borderRadius: 30,
                        }}
                     >
                        <FlatList
                           data={allApps}
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
                  </View>
               </View>
            </View>
         </ImageBackground>
      </View>
   );
}
