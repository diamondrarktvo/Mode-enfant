import React, { useState, useEffect } from 'react';
import {
   View,
   Text,
   ImageBackground,
   TouchableOpacity,
   BackHandler,
} from 'react-native';
import { styles } from './styles';
import { Icon } from '@rneui/themed';

import { nameStackNavigation as nameNav } from '_utils/constante/NameStackNavigation';
import { Colors } from '_theme/Colors';
import { useSelector, useDispatch } from 'react-redux';
import {
   activeDeactiveTouchBack,
   changePassword,
} from '_utils/redux/actions/action_creators';

export default function ChangePassword({ navigation }) {
   //all states
   const [password, setPassWord] = useState('');
   const [passwordEnter, setPasswordEnter] = useState('oooo');
   const [isOldPass, setIsOldPass] = useState(false);
   const [texteInfo, setTexteInfo] = useState(
      "Saisissez l'ancien mot de passe"
   );
   const dispatch = useDispatch();
   const [pass1, setPass1] = useState('o');
   const [pass2, setPass2] = useState('o');
   const [pass3, setPass3] = useState('o');
   const [pass4, setPass4] = useState('o');
   const [numeric, setNumeric] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
   const [clickCount, setClickCount] = useState(1);

   const passwordFromSelector = useSelector(
      (selector) => selector.fonctionnality.password
   );
   //all efects

   useEffect(() => {
      setPass1('o');
      setPass2('o');
      setPass3('o');
      setPass4('o');
      setClickCount(1);
      setPassWord(passwordFromSelector);
   }, []);

   function handleBackButtonClick() {
      navigation.goBack();
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

   useEffect(() => {
      setPasswordEnter(pass1 + '' + pass2 + '' + pass3 + '' + pass4);
   }, [pass1, pass2, pass3, pass4]);

   //when user enter correct oldPassword, the password that it enter is the new password
   useEffect(() => {
      if (isOldPass === false) {
         if (passwordEnter.includes('o')) {
            return;
         } else {
            if (passwordEnter === password) {
               setPass1('o');
               setPass2('o');
               setPass3('o');
               setPass4('o');
               setTexteInfo('Saisir le nouveau mot de passe.');
               setPasswordEnter('oooo');
               setIsOldPass(true);
            } else if (passwordEnter !== password) {
               setPass1('o');
               setPass2('o');
               setPass3('o');
               setPass4('o');
               setTexteInfo(
                  'Mot de passe incorrecte. Veuillez saisir ?? nouveau.'
               );
            }
         }
      }
   }, [passwordEnter, isOldPass]);

   useEffect(() => {
      if (isOldPass) {
         dispatch(changePassword(passwordEnter));
         return;
      }
   }, [isOldPass, passwordEnter]);
   //all components Saisissez votre mot de passe

   return (
      <View style={styles.view_container}>
         <ImageBackground
            source={require('_images/password_bg.png')}
            resizeMode="stretch"
            style={styles.backgroundImage}
         >
            <View style={styles.textWarning}>
               <Text style={{ fontSize: 20, color: Colors.black }}>
                  {texteInfo}
               </Text>
            </View>

            <View style={styles.input_bar_password}>
               {pass1 === 'o' ? (
                  <Text>
                     <Icon
                        name={'radio-button-unchecked'}
                        color={'#bfb2a9'}
                        size={24}
                     />
                  </Text>
               ) : (
                  <Text
                     style={{
                        fontSize: 36,
                        color: '#bfb2a9',
                        fontWeight: 'bold',
                     }}
                  >
                     {pass1}
                  </Text>
               )}

               {pass2 === 'o' ? (
                  <Text>
                     <Icon
                        name={'radio-button-unchecked'}
                        color={'#bfb2a9'}
                        size={24}
                     />
                  </Text>
               ) : (
                  <Text
                     style={{
                        fontSize: 36,
                        color: '#bfb2a9',
                        fontWeight: 'bold',
                     }}
                  >
                     {pass2}
                  </Text>
               )}

               {pass3 === 'o' ? (
                  <Text>
                     <Icon
                        name={'radio-button-unchecked'}
                        color={'#bfb2a9'}
                        size={24}
                     />
                  </Text>
               ) : (
                  <Text
                     style={{
                        fontSize: 36,
                        color: '#bfb2a9',
                        fontWeight: 'bold',
                     }}
                  >
                     {pass3}
                  </Text>
               )}

               {pass4 === 'o' ? (
                  <Text>
                     <Icon
                        name={'radio-button-unchecked'}
                        color={'#bfb2a9'}
                        size={24}
                     />
                  </Text>
               ) : (
                  <Text
                     style={{
                        fontSize: 36,
                        color: '#bfb2a9',
                        fontWeight: 'bold',
                     }}
                  >
                     {pass4}
                  </Text>
               )}
               <Icon
                  name={'backspace'}
                  color={'#7a6246'}
                  size={38}
                  onPress={() => {
                     setPass1('o');
                     setPass2('o');
                     setPass3('o');
                     setPass4('o');
                     setClickCount(1);
                  }}
               />
            </View>
            <View style={styles.forgetPassword}></View>
            <View style={styles.keyboard_numeric_list}>
               {numeric.map((chiffre, index) => (
                  <View key={index}>
                     <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => {
                           if (clickCount < 5) {
                              switch (clickCount) {
                                 case 1:
                                    setPass1(chiffre);
                                    setClickCount(clickCount + 1);
                                    break;
                                 case 2:
                                    setPass2(chiffre);
                                    setClickCount(clickCount + 1);
                                    break;
                                 case 3:
                                    setPass3(chiffre);
                                    setClickCount(clickCount + 1);
                                    break;
                                 case 4:
                                    setPass4(chiffre);
                                    if (isOldPass) {
                                       setTexteInfo('Mot de passe mis ?? jour');
                                       navigation.navigate(nameNav.parametre);
                                    }
                                    setClickCount(1); //setClickCount(clickCount + 1);
                                    break;
                                 default:
                                    break;
                              }
                           }
                        }}
                     >
                        <Text style={styles.one_pave_numerique}>{chiffre}</Text>
                     </TouchableOpacity>
                  </View>
               ))}
            </View>
         </ImageBackground>
      </View>
   );
}
