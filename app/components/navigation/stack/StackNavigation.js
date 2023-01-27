import { createStackNavigator } from '@react-navigation/stack';
import { nameStackNavigation as nameNav } from '_utils';
import BottomBarTabs from '_components/navigation/tabs/BottomBarTabs';
import { Home } from '_pages';
import { configStack } from './configStack';
import { useSelector } from 'react-redux';

let Stack = createStackNavigator();
export default function StackNavigation() {
   const isStarted = useSelector((selector) => selector.fonctionnality.started);

   return isStarted ? (
      <Stack.Navigator initialRouteName={nameNav.home}>
         <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name={nameNav.home} component={BottomBarTabs} />
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
      <Stack.Navigator initialRouteName={nameNav.login}>
         <Stack.Group screenOptions={configStack.screenOptionsForHeaderDisable}>
            <Stack.Screen name={nameNav.home} component={Home} />
         </Stack.Group>
      </Stack.Navigator>
   );
}
