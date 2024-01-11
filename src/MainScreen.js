import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, ScrollView, KeyboardAvoidingView,} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import SystemMessageContainer from './components/SystemMessageContainer/SystemMessageContainer';
import UserMessageContainer from './components/UserMessageContainer/UserMessageContainer';
import axios from 'axios';



const {height, width} = Dimensions.get('screen')




const MainScreen = ({navigation}) => {
    const [userMessage, setUserMessage] = useState('')
    const [userDisplayMessage, setUserDisplayMessage] = useState('')
    const [allMessages, setAllMessages] = useState([])
    const [employees, setEmployees] = useState()
    const [postBilgi, setPostBilgi] = useState()


    const goAllMessagesScreen = () => {
        navigation.navigate('AllMessagesScreen', {allMessages})
    }

    const getEmployees = async () => {
        try {
          const response = await axios.get('http://192.168.1.15:5000/employees');
          setEmployees(response.data)
        } catch (error) {
          console.error(error);
        }
      };

      const postDeneme = async (msg) => {
        if(userMessage){
            try {
            const response = await axios.post('http://192.168.1.15:5000/systemAnswer', {messageContent: msg},
            {
                headers: axios.defaults.headers['Content-Type'] = 'application/json'
            });
            systemAnswer = JSON.stringify(response.data.systemMessage).replaceAll('"','')
            setPostBilgi(systemAnswer)
            } catch (error) {
            console.error(error);
            }
            setUserDisplayMessage(userMessage)
            setAllMessages([...allMessages, {userMsg: userMessage, sysMsg: systemAnswer}])
            setUserMessage('')
        }
      };

      const fetchDataPost =  async () => {
        try {
            const responseData = await axios.post(url, postData,
                {
                    headers: axios.defaults.headers['Content-Type'] = 'multipart/form-data'
                })
                setData(responseData.data)
                setLoading(false)
                console.log("post işlem sonucu: ",responseData.status)
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    return(

        <KeyboardAvoidingView
        style={styles.container}
      >

        <View style={styles.header_container}>
            <Text style={styles.header_text}>MyPsychologist</Text>
            <TouchableOpacity onPress={goAllMessagesScreen} style={styles.all_message_button}>
                <Icon name="reader" size={30} color={"#113946"}></Icon>
            </TouchableOpacity>
        </View>


        <View style={{flex: 1}}>

            <ScrollView>
            <View style={{flex: 1, backgroundColor: '#F3EEEA'}}>
                {userDisplayMessage ? <>
                    <UserMessageContainer message={userDisplayMessage}/>
                    <SystemMessageContainer message={postBilgi}/>
                </> 
                :<SystemMessageContainer message={'How was your day?'}/>
            }

            </View>
            </ScrollView>

            <View style={styles.input_container}>
                <ScrollView>
                <TextInput
                    multiline
                    style={styles.input}
                    placeholder="How do you feel..."
                    placeholderTextColor="gray"
                    textAlignVertical="top"
                    onChangeText={setUserMessage}
                    value={userMessage}
                />
                </ScrollView>

                <TouchableOpacity onPress={()=> postDeneme(userMessage)} style={styles.send_button}>
                    <Icon name="send" size={23} color={"white"}></Icon>
                </TouchableOpacity>

            </View>
        </View>

      </KeyboardAvoidingView>
    )
}

export default MainScreen


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#F3EEEA',

    },
    header_container: {
        backgroundColor: '#F3EEEA', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        width: width, 
        height: height * 0.07, 
        borderBottomWidth: 0.5, 
        borderBottomColor: 'B0A695', 
        flexDirection: 'row',

    },
    header_text: {
        color: '#113946', 
        fontSize: 18, 
        marginLeft: width * 0.03, 
        fontWeight: '600',

    },
    all_message_button: {
        marginRight: width * 0.02, 
        height: height * 0.057, 
        width: height * 0.057, 
        borderRadius: height * 0.03, 
        alignItems: 'center', 
        justifyContent: 'center',

    },
    input_container: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        width: width, 
        marginVertical: height * 0.01, 

    },
    input: {
        borderWidth: 1,
        borderColor: '#B0A695',
        fontSize: 16,
        maxHeight: height * 0.115,
        backgroundColor: '#EBE3D5',
        marginLeft: width * 0.02,
        marginRight: width * 0.02,
        borderRadius: 20,
        paddingLeft: width * 0.03,
        paddingBottom: 2,

    },
    send_button: {
        marginRight: width * 0.02, 
        backgroundColor: '#6C584C', 
        height: height * 0.057, 
        width: height * 0.057, 
        borderRadius: height * 0.03, 
        alignItems: 'center', 
        justifyContent: 'center',

    }

})