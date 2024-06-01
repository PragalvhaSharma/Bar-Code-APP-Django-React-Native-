import {View, Text, StyleSheet} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { HeaderBackButton } from '@react-navigation/elements';

const ProfileDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {profileID} = route.params;

  // Extract the eventId from the route.params (contains all the parameters passed to this screen)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton
            tintColor = "white"
            onPress = {()=>navigation.goBack()}
        /> 
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <Text style={styles.textFont}>This is the Profile Detail for {profileID} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    screen:{
        padding: 20, 
    },
    textFont:{
        fontSize: 20,
    }
})

export default ProfileDetailScreen