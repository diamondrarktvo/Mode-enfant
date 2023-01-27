import React, { useState } from 'react';
import {
   View,
   Text,
   Image,
   SafeAreaView,
   FlatList,
   TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles';
import { Icon, CheckBox } from '@rneui/themed';

import { nameStackNavigation as nameNav } from '_utils/constante/NameStackNavigation';
import { Colors } from '_theme/Colors';
import { useSelector } from 'react-redux';
import { Button } from '@rneui/base';

import { profil } from '_utils/constante/MockData';

export default function Home({ navigation }) {
   //all states

   //const allArticles = useSelector((selector) => selector.article.articles);
   //all efects
   const { t } = useTranslation();

   //all components

   const _renderItem = ({ item }) => {
      return (
         <TouchableOpacity activeOpacity={0.8}>
            <View key={item.id} style={styles.view_container_renderItem}>
               <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={item.check}
                  onPress={() => !item.check}
               />
               <Image
                  style={styles.icon_profil_flat}
                  source={require('_images/boy.png')}
               />
               <Text
                  style={{
                     marginVertical: 8,
                     paddingRight: 8,
                     fontWeight: 'bold',
                     fontSize: 17,
                  }}
                  numberOfLines={1}
               >
                  {item.nom}
               </Text>
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
            <Text style={{ color: Colors.black, fontSize: 22 }}>
               Nom de l'enfant
            </Text>
            <View style={styles.view_list_profil}>
               <FlatList
                  data={profil}
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
         <View style={styles.view_boutton}>
            <Button color="#f05e85" containerStyle={styles.boutton}>
               Entrer
            </Button>
         </View>
      </View>
   );
}
