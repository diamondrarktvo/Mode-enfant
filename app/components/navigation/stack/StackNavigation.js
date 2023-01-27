import { createStackNavigator } from '@react-navigation/stack';
import { nameStackNavigation as nameNav } from '_utils';
import { Account, Home, Password, Parametre } from '_pages';
import { configStack } from './configStack';
import { useSelector } from 'react-redux';

let Stack = createStackNavigator();
export default function StackNavigation() {
   const isStarted = useSelector((selector) => selector.fonctionnality.started);

   return isStarted ? (
      <Stack.Navigator initialRouteName={nameNav.home}>
         <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name={nameNav.home} component={Home} />
         </Stack.Group>

         <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name={nameNav.password} component={Password} />
            <Stack.Screen name={nameNav.parametre} component={Parametre} />
         </Stack.Group>

         {/*<Stack.Group screenOptions={configStack.screenOptionsForHeaderShown}>
            <Stack.Screen
               name={nameNav.listPage}
               component={Listing}
               options={({ route }) => ({
                  title: route.params.titleScreen,
               })}
            />
            </Stack.Group>*/}
      </Stack.Navigator>
   ) : (
      <Stack.Navigator initialRouteName={nameNav.account}>
         <Stack.Group screenOptions={configStack.screenOptionsForHeaderDisable}>
            <Stack.Screen name={nameNav.account} component={Account} />
         </Stack.Group>
      </Stack.Navigator>
   );
}
