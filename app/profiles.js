import { useNavigation } from "@react-navigation/core";
import {Button, View, Text} from 'react-native';


const ProfileScreen = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Text>Profiles Screen</Text>
      {/* Works assuming we have regestired a Profile screen in the navigator */}
      <Button title="Some Profile" onPress={()=>navigation.navigate("Profile", {profileID: 1})}/>
    </View>
  );
}

export default ProfileScreen