import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {HomeStack} from '../components/stack';
import { DrawerNavigator } from '../components/drawer';
import { StatusBar } from 'expo-status-bar';

//31:46
function Index() {
  return(
    //There is always the navigation container at the top level
    //COnnects to the screen-connector 
    <NavigationContainer independent={true}>
      {/* <HomeStack /> */}
      <DrawerNavigator />
      <StatusBar style='dark'/>
    </NavigationContainer>
  );
 
}

export default Index

// INDEX
// |
// |-- NavigationContainer
//     |
//     |-- HomeStack (Stack.Navigator)
//         |
//         |-- HomeScreen (uses useNavigation to navigate to EventDetail)
//         |
//         |-- EventDetailScreen
