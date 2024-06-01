//Use {} for named exports and no {} for default exports cuz only one component 

import { DrawerItem, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import {HomeStack, ProfileStack} from './stack';
import { View, Image, SafeAreaView, Linking} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator   
            drawerContent={(props) => {
            return (
                <SafeAreaView style={{flex:1, paddingTop:20, backgroundColor: '#99f6e4'}}>
                    <View style={{justifyContent:'center', alignItems:'center', height:140}}>
                        <Image 
                            style={{width: 100, resizeMode: 'contain'}}
                            source={require("../assets/Cool-Logo.png")}
                        />
                    </View>
                    {/* DrawerItemList is a component that renders the list of items in the drawer */}
                    {/* DrawerItemList are my screens*/}
                    <DrawerItemList {...props} />
                    <DrawerItem
                        label="More Info"
                        onPress={() => Linking.openURL('https://google.com')}
                        icon={() => (
                            <Ionicons name="information-circle" size={24} color="black"/>
                        )}
                    />
                </SafeAreaView>
            );
            }}     
            screenOptions={{
                headerShown: false,
            }}>
            <Drawer.Screen name="HomeStack" component={HomeStack} 
            options={{title: 'Home',
            drawerIcon: () => (
                <Ionicons name="home" size={24} color="black"/>
            )
            }}/>
            <Drawer.Screen name="ProfilesStack" component={ProfileStack} 
            options={{title: 'Profiles',
            drawerIcon: () => (
                <Ionicons name="person" size={24} color="black"/>
            )
            }}/>
        </Drawer.Navigator>
    );
}