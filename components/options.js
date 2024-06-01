import { Ionicons } from "@expo/vector-icons"
import { Text } from "react-native"

//THis function takes in a navigation
export const navOptions = (nav) => {
    return {
        headerTintColor: '#cbd5e1',
        headerStyle: {
            backgroundColor: '#0f127a',
        },
        headerRight: () => (
            <Ionicons
                name="menu"
                size={30}
                color="white"
                onPress={() => nav.toggleDrawer()}
                style={{ marginRight: 20 }}
            />
        ),
        headerLeft: () => (
            <Text style={{ color: 'white', fontSize: 20, paddingLeft: 10 }}>Events</Text>
        ),
    }

}