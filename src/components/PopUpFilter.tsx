import React, { useState } from 'react'
import { Image, Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

interface Props {
    show: boolean
    changeStatePopUpFilter: React.Dispatch<React.SetStateAction<boolean>>
    setParams: React.Dispatch<React.SetStateAction<string[]>>
}

export const PopUpFilter = ({ show, changeStatePopUpFilter,setParams }: Props) => {

    return (
        <View style={styles.container}>
            <Modal
                animationType='none'
                transparent
                visible={show}
            >
                <View
                    style={styles.container}>
                    <View style={styles.popUp}>
                        <View style={styles.image}>
                            <Text style={{ marginHorizontal: 30, fontSize: 24, color: 'black' }}>Filtros</Text>
                            <TouchableOpacity onPress={() => { changeStatePopUpFilter(false) }}>
                                <Image source={require('../assets/icons/close.png')} style={styles.imageDesing} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'flex-start' }}>
                            <TouchableOpacity style={{ borderColor: 'black', borderWidth: 1 }} onPress={()=>{setParams(["activo"])}}>
                                <Text>Activado</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderColor: 'black', borderWidth: 1 }} onPress={()=>{setParams(["desactivado"])}}>
                                <Text>desactivado</Text>
                            </TouchableOpacity>
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
        alignItems: 'flex-end'
    },
    imageDesing: {
        width: 15,
        height: 15,
        tintColor: '#000',
        marginHorizontal: 15
    },
    popUp: {
        position: 'relative',
        height: '100%',
        width: '60%',
        backgroundColor: 'white',
        //  left:150

    },
    image: {
        height: 40,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }

})