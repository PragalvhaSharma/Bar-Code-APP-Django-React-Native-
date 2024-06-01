import {View, FlatList, RefreshControl} from 'react-native'
// import { DUMMY_DATA } from '../Data/dummy';
import EventItem from './event-item';

//Connected to from HomeScreen - - - Recieves data as prop
const EventList = ({data, onRefresh}) => {
    //specify how each item in the FlatList should be rendered -- Required by flatlist component
    //item is a property recieved by the flatlist component that contains the data for each item
    const renderItem=({item}) => {
        return (
            <EventItem id={item.id} name={item.name} description={item.description} qrCode = {item.qr_code}/>
        )
    }
    return (
        <View>
            <FlatList data= {data} 

            //Extracts a unique key for each item, here it uses the id property of each item.
            keyExtractor = {item => item.id}
            renderItem = {renderItem}
            refreshControl= {
                //Adds pull-to-refresh functionality to the list
                <RefreshControl
                refreshing={false}
                onRefresh={onRefresh}/>
            }
            />
        </View>
    )
}

export default EventList;