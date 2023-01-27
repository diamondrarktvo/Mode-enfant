import React, { useEffect, useState } from 'react';
import {
   View,
   Text,
   Image,
   SafeAreaView,
   ImageBackground,
   ScrollView,
   FlatList,
   TouchableOpacity,
   BackHandler,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles';
import { Icon } from '@rneui/themed';

import { nameStackNavigation as nameNav } from '_utils/constante/NameStackNavigation';
import { Colors } from '_theme/Colors';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@rneui/base';
import {
   getStarted,
   activeDeactiveTouchBack,
} from '_utils/redux/actions/action_creators';

export default function Home({ navigation }) {
   //all states
   const dispatch = useDispatch();
   const { t } = useTranslation();

   const isTouchBackActive = useSelector(
      (selector) => selector.fonctionnality.isTouchBackActive
   );
   //all efects
   useEffect(() => {
      if (isTouchBackActive === false) {
         dispatch(activeDeactiveTouchBack());
      }
   }, []);

   useEffect(() => {
      if (isTouchBackActive) {
         const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            () => {
               return true;
            }
         );
         return () => backHandler.remove();
      }
   }, [isTouchBackActive]);

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
                     dispatch(activeDeactiveTouchBack());
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
