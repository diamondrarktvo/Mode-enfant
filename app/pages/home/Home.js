import React, { useState } from 'react';
import {
   View,
   Text,
   Image,
   SafeAreaView,
   ImageBackground,
   ScrollView,
   FlatList,
   TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles';
import { Icon, CheckBox } from '@rneui/themed';

import { nameStackNavigation as nameNav } from '_utils/constante/NameStackNavigation';
import { Colors } from '_theme/Colors';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@rneui/base';
import { getStarted } from '_utils/redux/actions/action_creators';

export default function Home({ navigation }) {
   //all states
   const dispatch = useDispatch();

   //const allArticles = useSelector((selector) => selector.article.articles);
   //all efects
   const { t } = useTranslation();

   //all components

   return (
      <View style={styles.view_container}>
         <ImageBackground
            source={require('_images/bg_7.jpeg')}
            resizeMode="stretch"
            style={styles.backgroundImage}
         >
            <View style={styles.view_application}>
               <View style={styles.one_applis}>
                  <Image
                     style={styles.icon_applis}
                     source={require('_images/twitter.png')}
                  />
                  <Text style={styles.name_applis}>Twitter</Text>
               </View>
               <View style={styles.one_applis}>
                  <Image
                     style={styles.icon_applis}
                     source={require('_images/chrome.png')}
                  />
                  <Text style={styles.name_applis}>Chrome</Text>
               </View>
            </View>
            <View style={styles.view_bottom_bar}>
               <Icon
                  name={'settings'}
                  containerStyle={styles.bottom_bar}
                  color={Colors.white}
                  size={32}
                  onPress={() => {
                     navigation.navigate(nameNav.password);
                  }}
               />
               <Icon
                  name={'logout'}
                  containerStyle={styles.bottom_bar}
                  color={Colors.white}
                  size={32}
                  onPress={() => {
                     dispatch(getStarted());
                  }}
               />
            </View>
         </ImageBackground>
      </View>
   );
}
