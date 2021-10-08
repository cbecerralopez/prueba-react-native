import React, { useState } from 'react'
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native'
import close from '../assets/icons/close.png'
import { InfoUser } from '../screens/InfoUser'

interface Props{
    show:boolean
    changeState:React.Dispatch<React.SetStateAction<boolean>>
} 

export const PopUpInfoUserScreen = ({show,changeState}:Props) => {
    const [modal, setModal] = useState(false)

    return (
        <View>

            <Modal
                animationType='slide'
                onDismiss={() => { console.log("close") }}
                onShow={() => { console.log("show") }}
                transparent
                visible={show}
            >
                <View
                    style={{ flex: 1, backgroundColor: 'rgb(1,1,1,0,5)', justifyContent: 'center', alignItems: 'center' }}>
                    <View
                        style={{ height: '80%', width: '95%', backgroundColor: '#808080', borderRadius: 10 }}
                    >
                        <View
                            style={{ height: 45, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingHorizontal: 10 }}
                        >
                            <TouchableOpacity onPress={() => { changeState(false)}}>
                                <Image source={close} style={{ width: 30, height: 30, tintColor: '#000' }} />
                            </TouchableOpacity>
                        </View>
                        <View>
                           <Text>
                               Aqui va la info del usuario
                           </Text>
                        </View>
                    </View>
                </View>
            </Modal>

        </View>
    )
}
