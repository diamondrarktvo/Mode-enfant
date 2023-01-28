import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import {
   Button,
   View,
   Text,
   StyleSheet,
   ScrollView,
   ImageBackground,
   TouchableOpacity,
   Switch,
   Image,
   BackHandler,
} from 'react-native';
import { activeDeactiveTouchBack } from '_utils/redux/actions/action_creators';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from '@rneui/themed';

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

export default function Parametre({ navigation }) {
   const dispatch = useDispatch();
   const [isEnabled, setIsEnabled] = useState(true);
   const toggleSwitch = () => {
      if (isEnabled) {
         alert('Alerte repos desactivé');
      } else {
         alert('Repos dans 30 minutes');
      }
      setIsEnabled((previousState) => !previousState);
   };

   function handleBackButtonClick() {
      navigation.navigate(nameNav.home);
      dispatch(activeDeactiveTouchBack());
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
      <View style={styles.container}>
         <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}
         >
            <View style={styles.corps}>
               <ImageBackground
                  source={require('_images/rubban.png')}
                  style={{ width: 300, height: 130, marginTop: 40 }}
               >
                  <Text
                     style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: 'white',
                        padding: 8,
                        marginTop: 30,
                     }}
                  >
                     Paramètres
                  </Text>
               </ImageBackground>
               <View
                  style={{
                     backgroundColor: '#77f1ff',
                     paddingVertical: 12,
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
                           navigation.navigate(nameNav.home);
                           dispatch(activeDeactiveTouchBack());
                        }}
                     />
                  </View>
                  <View
                     style={{
                        backgroundColor: '#fef2e2',
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        marginVertical: 6,
                        marginHorizontal: 6,
                        borderRadius: 30,
                     }}
                  >
                     <View
                        style={{
                           backgroundColor: '#fed5b7',
                           paddingVertical: 12,
                           paddingHorizontal: 12,
                           marginVertical: 8,
                           marginHorizontal: 8,
                           borderRadius: 30,
                        }}
                     >
                        <TouchableOpacity
                           style={styles.view_one_item}
                           onPress={() => {
                              alert('Rediriger vers la page correspondante!');
                           }}
                        >
                           <Image
                              source={require('_images/add-image-icon-5.png')}
                              style={{ width: 30, height: 30 }}
                           />
                           <Text style={styles.text}>
                              {' '}
                              Ajouter des applications
                           </Text>
                           <Icon
                              name={'chevron-right'}
                              color={Colors.blue}
                              size={32}
                           />
                        </TouchableOpacity>
                        <TouchableOpacity
                           style={styles.view_one_item}
                           onPress={() => {
                              alert('Rediriger vers la page correspondante!');
                           }}
                        >
                           <Image
                              source={require('_images/temps.png')}
                              style={{ width: 30, height: 30 }}
                           />
                           <Text style={styles.text}>
                              {' '}
                              Limites de temps de{'\n'} l'utilisation de
                              l'appareil
                           </Text>
                           <Icon
                              name={'chevron-right'}
                              color={Colors.blue}
                              size={32}
                           />
                        </TouchableOpacity>
                        <TouchableOpacity
                           style={styles.view_one_item}
                           onPress={() => {
                              alert('Rediriger vers la page correspondante!');
                           }}
                        >
                           <Image
                              source={require('_images/Hourglass-Timer.png')}
                              style={{ width: 30, height: 30 }}
                           />
                           <Text style={styles.text}>
                              Limite de temps d'utilisation de l'application
                           </Text>
                           <Icon
                              name={'chevron-right'}
                              color={Colors.blue}
                              size={32}
                           />
                        </TouchableOpacity>
                        <TouchableOpacity
                           style={styles.view_one_item}
                           onPress={() => {
                              alert('Rediriger vers la page correspondante!');
                           }}
                        >
                           <Image
                              source={require('_images/password.png')}
                              style={{ width: 30, height: 30 }}
                           />
                           <Text style={styles.text}>
                              {' '}
                              Réinitialiser le mot de passe
                           </Text>
                           <Icon
                              name={'chevron-right'}
                              color={Colors.blue}
                              size={32}
                           />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.view_one_item}>
                           <Image
                              source={require('_images/repos.png')}
                              style={{ width: 30, marginRight: 30, height: 30 }}
                           />
                           <Text style={styles.text}> Rappel de repos</Text>
                           <Switch
                              trackColor={{
                                 false: '#767577',
                                 true: Colors.blue,
                              }}
                              thumbColor={isEnabled ? Colors.blue : '#f4f3f4'}
                              ios_backgroundColor="#3e3e3e"
                              onValueChange={toggleSwitch}
                              value={isEnabled}
                           />
                        </TouchableOpacity>
                     </View>
                  </View>
               </View>
            </View>
         </ImageBackground>
      </View>
   );
}
