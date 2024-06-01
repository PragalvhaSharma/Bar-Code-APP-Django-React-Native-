
import HomeScreen from '/Users/pragalvhasharma/Downloads/PragGOToDocuments/CompSci/myProjects/CurrentProjects/EventsAPP/app/HomeScreen.js';
import QrCodeScreen from '../app/qr-code-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const HomeTabs = () => {
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator screenOptions={({route}) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: 'black'
            },
            tabBarActiveTintColor: 'yellow',
            tabBarInactiveTintColor: 'gray',
            tabBarIcon: ({focused,color,size}) => {
                let iconName;
                if (route.name == 'HomeTabs') {
                    iconName = focused ? 'home' : 'home-outline'
                }
                else if (route.name === 'QrCode') {
                    iconName = focused ? 'qr-code' : 'qr-code-outline'
                }
    
                return <Ionicons name={iconName} size={focused? 35: size} color={color}/>
            }
    
        })}>
            <Tab.Screen name="HomeTabs" component={HomeScreen}/>
            <Tab.Screen name="QrCode" component={QrCodeScreen}/>
        </Tab.Navigator>
    )
}

export default HomeTabs;