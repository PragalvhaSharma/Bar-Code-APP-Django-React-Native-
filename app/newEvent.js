import { useState, useLayoutEffect } from 'react';
import {View, TextInput, StyleSheet, Button, Text} from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements';
import { useNavigation } from 'expo-router';

const NewEventScreen = () => {
    //State functions execute everytine that I type on the keyboard
    const [name, setName]   = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(new Date()) // Creates a Date object with the current date and time
    const [alert, setAlert] = useState({
        isVisible: 'false',
        msg: ''
    })

    const navigation = useNavigation();

    useLayoutEffect(() => {
        // Set the title of the screen
        navigation.setOptions({
          headerTitle: 'add new event',
          headerLeft: () => (
            <HeaderBackButton
              tintColor = "white"
              onPress = {()=>navigation.goBack()}
            /> 
          ),
        });
      }, [navigation]);
    

    const handelAddEvent = async () => {  
        const d = date.toISOString().slice(0, 10)

        const data = {
            name,
            description,
            date: d
        }

        const response = await fetch('http://127.0.0.1:8000/api/events/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const res = await response.json()
        console.log(res)
        setAlert({isVisible: true, msg: 'event added'})
    }


    return (
        <View styles={styles.screen}>
            {alert.isVisible && <Text>{alert.msg}</Text>}
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="name"
                style={styles.input}
                blurOnSubmit={true}
            />
            <TextInput
                value={description}
                onChangeText={setDescription}
                placeholder="description"
                multiline={true}
                style={styles.input}
                blurOnSubmit={true}
            />
            <TextInput
                value={date}
                onChangeText={setDate}
                placeholder="event date"
                style={styles.input}
                blurOnSubmit={true}
            />
            <Button onPress={handelAddEvent} title="Create Event"/>
        </View>
    );

}

const styles = StyleSheet.create({
    screen:{
        padding: 20, 
    },
    input: {
        borderWidth: 1.5,
        borderColor: 'black',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5, 
        height: 40,
        backgroundColor: 'white',
        marginTop: 20, 
        allignSelf: 'center',
        margin: 12,
        padding: 10,
    }
})

export default NewEventScreen;