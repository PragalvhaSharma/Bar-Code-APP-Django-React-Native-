import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '/Users/pragalvhasharma/Downloads/PragGOToDocuments/CompSci/myProjects/CurrentProjects/EventsAPP/app/HomeScreen.js';
import EventDetailScreen from '/Users/pragalvhasharma/Downloads/PragGOToDocuments/CompSci/myProjects/CurrentProjects/EventsAPP/app/EventDetailScreen.js';
import 'react-native-gesture-handler';
import { navOptions } from './options';
import { useNavigation } from '@react-navigation/core';
import ProfileScreen from '/Users/pragalvhasharma/Downloads/PragGOToDocuments/CompSci/myProjects/CurrentProjects/EventsAPP/app/profiles.js'
import ProfileDetailScreen from '../app/profile-detail-screen';
import HomeTabs from './tabs';
import NewEventScreen from '../app/newEvent';

//Automatically provides a navigation context to all screens defined within the navigator.
const Stack = createStackNavigator();

export const HomeStack = () => {
    const navigation = useNavigation();
    return(
        <Stack.Navigator
        screenOptions={()=>navOptions(navigation)}
        >
            {/* //options={{ headerShown: false }} */}
            <Stack.Screen name="Home" component={HomeTabs}/>
            <Stack.Screen name="EventDetail" component={EventDetailScreen}/>
            <Stack.Screen name="New Event" component={NewEventScreen}/>
        </Stack.Navigator>
    );
}

export const ProfileStack = () => {
    const navigation = useNavigation();
    return(
        <Stack.Navigator
        screenOptions={()=>navOptions(navigation)}
        >
            {/* //options={{ headerShown: false }} */}
            <Stack.Screen name="Profiles" component={ProfileScreen}/>
            <Stack.Screen name="Profile" component={ProfileDetailScreen}/>
        </Stack.Navigator>
    );
}


