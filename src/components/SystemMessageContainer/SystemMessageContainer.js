import React from 'react'
import { Dimensions, Text, View } from 'react-native'



const SystemMessageContainer = ({message, tag}) => {
    const {height, width} = Dimensions.get('screen')
    return(
        <View style={{
            backgroundColor: '#EBE3D5', 
            borderColor: '#B0A695', 
            borderWidth: 1,
            marginTop: height * 0.01, 
            marginBottom: height * 0.01, 
            maxWidth: width * 0.75,
            paddingHorizontal: width * 0.03,
            paddingVertical: height * 0.02,
            alignSelf: 'flex-start',
            marginLeft: width * 0.03,
            borderRadius: 10,
            borderTopLeftRadius: 0}}
            >

                <Text style={{color: 'black', fontSize: 14}}>{message}</Text>
                <Text style={{color: '#113946', fontSize: 14, fontWeight: 'bold'}}>Tag: #{tag}</Text>
        </View>
    )
}

export default SystemMessageContainer