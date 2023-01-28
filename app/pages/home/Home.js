import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
   View,
   Text,
   Image,
   ImageBackground,
   TouchableOpacity,
   BackHandler,
   Linking,
} from 'react-native';
import { styles } from './styles';
import { Icon } from '@rneui/themed';

import { nameStackNavigation as nameNav } from '_utils/constante/NameStackNavigation';
import { Colors } from '_theme/Colors';
import { useSelector, useDispatch } from 'react-redux';
import { activeDeactiveTouchBack } from '_utils/redux/actions/action_creators';

export default function Home({ navigation }) {
   //all states
   const dispatch = useDispatch();

   const isTouchBackActive = useSelector(
      (selector) => selector.fonctionnality.isTouchBackActive
   );

   //array of id contain all apps check
   const appsChecked = useSelector(
      (selector) => selector.fonctionnality.apps_checked
   );
   //all apps in phone
   const allApps = useSelector(
      (selector) => selector.fonctionnality.all_apps_in_phone
   );

   //all apps checked
   let appsCheckedToList = allApps.filter((app) => {
      return appsChecked.includes(app.id);
   });
   //all effects
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
         <StatusBar hidden={true} />
         <ImageBackground
            source={require('_images/bg_7.jpeg')}
            resizeMode="stretch"
            style={styles.backgroundImage}
         >
            <View style={styles.view_application}>
               {appsCheckedToList.map((app) => (
                  <TouchableOpacity
                     key={app.id}
                     activeOpacity={0.7}
                     onPress={() => {
                        if (app.nom === 'Setting') {
                           Linking.openSettings();
                        } else {
                           Linking.openURL(app.url);
                        }
                     }}
                  >
                     <View style={styles.one_applis}>
                        <Image style={styles.icon_applis} source={app.icone} />
                        <Text style={styles.name_applis}>{app.nom}</Text>
                     </View>
                  </TouchableOpacity>
               ))}
            </View>
            <View style={styles.view_bottom_bar}>
               <Icon
                  name={'settings'}
                  containerStyle={styles.bottom_bar}
                  color={Colors.white}
                  size={32}
                  onPress={() => {
                     navigation.navigate(nameNav.password, {
                        direction: 'Parametre',
                     });
                     dispatch(activeDeactiveTouchBack());
                  }}
               />
               <Icon
                  name={'logout'}
                  containerStyle={styles.bottom_bar}
                  color={Colors.white}
                  size={32}
                  onPress={() => {
                     navigation.navigate(nameNav.password, {
                        direction: 'Compte',
                     });
                     dispatch(activeDeactiveTouchBack());
                  }}
               />
            </View>
         </ImageBackground>
      </View>
   );
}
