import React, { useContext } from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootStackParams } from '../navigator/MenuLateral';
import { UserContext } from '../context/UsersContext';

interface Props extends DrawerScreenProps<RootStackParams, 'InfoUser'> { }

export const InfoUser = ({ navigation, route }: Props) => {
  const { changeState, deleted } = useContext(UserContext)
  const params = route.params
console.log(params)
  if (params == undefined) {
    return <Text> primero seleccion un usuario</Text>
  }
  return (
    <View style={styles.container}>


      <View >
        <Text style={styles.title}>ID: {params.id}</Text>
        <Text style={styles.title}>Nombre: {params.nombre}</Text>
        <Text style={styles.title}>Apellido: {params.apellido}</Text>
        <Text style={styles.title}>User Name: {params.userName}</Text>
        <Text style={styles.title}>Email: {params.email}</Text>
        <Text style={styles.title}>Creado por: {params.createBy}</Text>
        <Text style={styles.title}>Estado: {params.estado ? "activado" : "desactivado"}</Text>
      </View>

      <View style={styles.fila}>
        <TouchableOpacity onPress={() => { deleted(params), navigation.navigate('ListarUsuarios') }}>
          <View style={{ ...styles.fab, backgroundColor: 'red', }}>
            <Text style={styles.fabText} >Borrar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { changeState(params) }}>
          <View style={{ ...styles.fab, backgroundColor: 'blue', }}>
            <Text style={styles.fabText}>Desactivar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity >
          <View style={styles.fab}>
            <Text style={styles.fabText}>Desactivar</Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20
  },
  title: {
    fontSize: 25,
  },
  fila: {
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    bottom: 25,
  },
  fab: {
    backgroundColor: '#33DDFF',
    width: 105,
    height: 45,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
    alignItems: 'baseline',
  },
  fabText: {
    color: 'white',
    fontSize: 15,
    alignSelf: 'center',
  },
});