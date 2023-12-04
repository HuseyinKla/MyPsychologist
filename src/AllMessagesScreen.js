import React from 'react'
import { Dimensions, Text, View, TouchableOpacity, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import SystemMessageContainer from './components/SystemMessageContainer/SystemMessageContainer';
import UserMessageContainer from './components/UserMessageContainer/UserMessageContainer';



const AllMessagesScreen = ({navigation, route}) => {
    const {height, width} = Dimensions.get('screen')

    const renderMessages = ({item}) => {
        if(item){
            return(
                <>
                <UserMessageContainer message={item}/>
                <SystemMessageContainer message={item + item + item}/>
                </>
            )
        }
    }


    return(
        <View style={{flex: 1, backgroundColor: '#F3EEEA'}}>

            <View style={{backgroundColor: '#F3EEEA', alignItems: 'center', width: width, height: height * 0.07, borderBottomWidth: 0.5, borderBottomColor: 'B0A695', flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{height: height * 0.057, width: height * 0.057, borderRadius: height * 0.03, alignItems: 'center', justifyContent: 'center'}}>
                    <Icon name="chevron-back-outline" size={30} color={"#113946"}></Icon>
                </TouchableOpacity>
                <Text style={{color: '#113946', fontSize: 18, marginLeft: width * 0.01 , fontWeight: '600'}}>History</Text>
            </View>

            <FlatList data={route.params.messages} renderItem={renderMessages}/>


        </View>
    )
}

export default AllMessagesScreen