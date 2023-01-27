import React from 'react';
import {
   View,
   Text,
   Image,
   SafeAreaView,
   TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles';
import { Icon } from '@rneui/themed';

import { nameStackNavigation as nameNav } from '_utils/constante/NameStackNavigation';
import { Colors } from '_theme/Colors';
import { useSelector } from 'react-redux';

export default function Home({ navigation }) {
   //all states
   //const allArticles = useSelector((selector) => selector.article.articles);
   //all efects
   const { t } = useTranslation();

   //all components
   /*const _renderItem = ({ item }) => {
      return (
         <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
               navigation.navigate(nameNav.detailPage, {
                  titleScreen: `${
                     langueActual === 'fr' ? 'Article n° ' : 'Lahatsoratra '
                  } ${item.Article.numero_Article}`,
                  articleToViewDetail: item,
               });
            }}
         >
            <View key={item.id} style={styles.view_container_renderItem}>
               <Image
                  style={styles.image_poster_style}
                  source={item.photo ?? require('_images/book_loi.jpg')}
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
                  {langueActual === 'fr'
                     ? item.Titre?.titre_fr
                     : item.Titre?.titre_mg}
               </Text>
               <Text style={{ fontSize: 12 }}>
                  {t('mot_publie_home')}:{item.date_created?.substring(0, 10)}{' '}
               </Text>
            </View>
         </TouchableOpacity>
      );
   };*/

   return (
      <KeyboardAwareScrollView style={{ backgroundColor: Colors.background }}>
         <View style={styles.view_container}>
            <Text>Test Home fotsiny </Text>
         </View>
      </KeyboardAwareScrollView>
   );
}
