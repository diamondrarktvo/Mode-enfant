import { createStackNavigator } from '@react-navigation/stack';
import { nameStackNavigation as nameNav } from '_utils';
import { Account, Home, Password, Parametre } from '_pages';
import AddAccount from '_components/addAccount/AddAccount';
import EditAccount from '_components/editAccount/EditAccount';
import ListApplications from '_components/listingApplis/ListingApplication';
import ChangePassword from '_components/changePassword/ChangePassword';
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
            <Stack.Screen
               name={nameNav.listApplication}
               component={ListApplications}
            />
            <Stack.Screen
               name={nameNav.changePassword}
               component={ChangePassword}
            />
         </Stack.Group>
      </Stack.Navigator>
   ) : (
      <Stack.Navigator initialRouteName={nameNav.account}>
         <Stack.Group screenOptions={configStack.screenOptionsForHeaderDisable}>
            <Stack.Screen name={nameNav.account} component={Account} />
         </Stack.Group>
         <Stack.Group screenOptions={configStack.screenOptionsForHeaderDisable}>
            <Stack.Screen name={nameNav.addAccount} component={AddAccount} />
         </Stack.Group>
         <Stack.Group screenOptions={configStack.screenOptionsForHeaderDisable}>
            <Stack.Screen name={nameNav.editAccount} component={EditAccount} />
         </Stack.Group>
      </Stack.Navigator>
   );
}
