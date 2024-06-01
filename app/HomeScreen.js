// Import necessary modules from react-navigation and react-native
import {View, StyleSheet, Button} from 'react-native';
import EventList from '../components/event-list';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';

const HomeScreen = () => {
  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(false)
  const navigation = useNavigation();

  const handleRefresh = () => {
    console.log('refreshing')
    //Set the opposite - - If true, set to false and vice versa
    setRefresh(prevState => !prevState)
  }

  useEffect(() => {
    fetchData()
  }, [refresh])

  const fetchData = async() => {
    const response = await fetch('http://127.0.0.1:8000/api/events/')
    const data = await response.json()
    setData(data)
}
  return (
    <View style={styles.screen}>
      <Button onPress={()=>navigation.navigate('New Event')} title="add new Event"/>
      <EventList data={data} onRefresh={handleRefresh}/>
    </View>
  );
}

const styles = StyleSheet.create({
    screen:{
        padding: 20, 
    }
})

export default HomeScreen