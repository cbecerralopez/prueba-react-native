import React, { useState } from 'react'
import { Image, Modal, Text, TouchableOpacity, View, StyleSheet, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

interface Props {
    show: boolean
    changeStatePopUpFilter: React.Dispatch<React.SetStateAction<boolean>>
    setParams: React.Dispatch<React.SetStateAction<string[]>>
}

export const PopUpFilter = ({ show, changeStatePopUpFilter, setParams }: Props) => {

    const [state, setstate] = useState("")
    return (
        <View style={styles.container}>

            <Modal
                animationType='none'
                transparent
                visible={show}
            >
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: '50%' }}>
                        <TouchableOpacity onPress={() => { changeStatePopUpFilter(false) }} style={{ height: '100%' }}>
                        </TouchableOpacity>
                    </View>

                    <View style={{ alignItems: 'flex-end', flex: 1 }}>

                        <View style={styles.popUp}>
                            <View style={styles.image}>
                                <Text style={{ marginHorizontal: 30, fontSize: 24, color: 'black' }}>Filtros</Text>
                                <TouchableOpacity onPress={() => { changeStatePopUpFilter(false) }}>
                                    <Image source={require('../assets/icons/close.png')} style={styles.imageDesing} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: 'flex-start', marginHorizontal: 20 }}>
                                <TouchableOpacity style={styles.btn} onPress={() => { setParams(["all"]) }}>
                                    <Text style={styles.title}>Todos</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btn} onPress={() => { setParams(["activado"]) }}>
                                    <Text style={styles.title}>Activados</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btn} onPress={() => { setParams(["desactivado"]) }}>
                                    <Text style={styles.title}>Desactivados</Text>
                                </TouchableOpacity>

                            </View>
                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageDesing: {
        width: 15,
        height: 15,
        tintColor: '#000',
        marginHorizontal: 15
    },
    popUp: {
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'flex-start'
    },
    image: {
        height: 40,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 25,
    },
    btn: {
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 20
    }

})