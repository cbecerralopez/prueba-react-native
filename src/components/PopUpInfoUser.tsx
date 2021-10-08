import React, { useState } from 'react'
import { Image, Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { UserState } from '../context/UsersContext'
import { InfoUser } from './InfoUser'

interface Props {
    show: boolean
    changeStatePopUp: React.Dispatch<React.SetStateAction<boolean>>
    user: UserState
}

export const PopUpInfoUserScreen = ({ show, changeStatePopUp, user }: Props) => {

    return (
        <View>
            <Modal
                animationType='slide'
                onDismiss={() => { console.log("close") }}
                onShow={() => { }}
                transparent
                visible={show}
            >
                <View
                    style={styles.container}>
                    <View style={styles.popUp}>
                        <View style={styles.image}>
                            <Text style={{ marginHorizontal: 100, fontSize: 24 }}>Informacion</Text>
                            <TouchableOpacity onPress={() => { changeStatePopUp(false) }}>
                                <Image source={require('../assets/icons/close.png')} style={styles.imageDesing} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <InfoUser user={user} changeStatePopUp={changeStatePopUp} />

                            
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(1,1,1,0,5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageDesing: {
        width: 30,
        height: 30,
        tintColor: '#000',
    },
    popUp: {
        height: '80%',
        width: '95%',
        backgroundColor: '#808080',
    },
    image: {
        height: 40,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }

})