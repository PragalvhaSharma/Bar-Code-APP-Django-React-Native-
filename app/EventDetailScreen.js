import {View, Text, StyleSheet} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { HeaderBackButton } from '@react-navigation/elements';

const EventDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  // Extract the eventId from the route.params (contains all the parameters passed to this screen)
  const { eventId, name, description} = route.params;

  useLayoutEffect(() => {
    // Set the title of the screen
    navigation.setOptions({
      headerTitle: name,
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
      <Text style={styles.textFont}>This is the Event Detail for {eventId} </Text>
      <Text style={styles.textFont}>{name}</Text>
      <Text style={styles.textFont}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    screen:{
        padding: 20, 
    },
    textFont:{
        fontSize: 14,
    }
})

export default EventDetailScreen