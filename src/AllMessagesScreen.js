import React from 'react'
import { Dimensions, Text, View, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import SystemMessageContainer from './components/SystemMessageContainer/SystemMessageContainer';
import UserMessageContainer from './components/UserMessageContainer/UserMessageContainer';


const {height, width} = Dimensions.get('screen')

const AllMessagesScreen = ({navigation, route}) => {

    const renderMessages = ({item}) => {
        if(item){
            return(
                <>
                <UserMessageContainer message={item.userMsg}/>
                <SystemMessageContainer message={item.sysMsg} tag={item.sysTag}/>
                <SystemMessageContainer message={item.sysQstn} tag={item.sysTag}/>
                </>
            )
        }
    }


    return(
        <View style={{flex: 1, backgroundColor: '#F3EEEA'}}>

            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back_button}>
                    <Icon name="chevron-back-outline" size={30} color={"#113946"}></Icon>
                </TouchableOpacity>
                <Text style={styles.header_text}>History</Text>
            </View>

            <FlatList data={route.params.allMessages} renderItem={renderMessages}/>


        </View>
    )
}

export default AllMessagesScreen


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F3EEEA', 
        alignItems: 'center', 
        width: width, 
        height: height * 0.07, 
        borderBottomWidth: 0.5, 
        borderBottomColor: 'B0A695', 
        flexDirection: 'row',

    },
    back_button: {
        height: height * 0.057, 
        width: height * 0.057, 
        borderRadius: height * 0.03, 
        alignItems: 'center', 
        justifyContent: 'center',

    },
    header_text: {
        color: '#113946', 
        fontSize: 18, 
        marginLeft: width * 0.01 , 
        fontWeight: '600',

    }
})