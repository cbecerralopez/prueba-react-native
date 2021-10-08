import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { UserContext, UserState } from '../context/UsersContext';

interface Props {
  user: UserState
  changeStatePopUp: React.Dispatch<React.SetStateAction<boolean>>

}
export const InfoUser = ({ user,changeStatePopUp }: Props) => {
  const { changeStateUser, deleted } = useContext(UserContext)

  if (user == undefined) {
    return <Text> primero seleccion un usuario</Text>
  }
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.title}>ID: {user.id}</Text>
        <Text style={styles.title}>Nombre: {user.nombre}</Text>
        <Text style={styles.title}>Apellido: {user.apellido}</Text>
        <Text style={styles.title}>User Name: {user.userName}</Text>
        <Text style={styles.title}>Email: {user.email}</Text>
        <Text style={styles.title}>Creado por: {user.createBy}</Text>
        <Text style={styles.title}>Estado: {user.estado ? "activado" : "desactivado"}</Text>
      </View>

      <View style={styles.fila}>
        <TouchableOpacity onPress={() => { deleted(user),changeStatePopUp(false) }}>
          <View style={{ ...styles.fab, backgroundColor: 'red', }}>
            <Text style={styles.fabText} >Borrar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { changeStateUser(user) }}>
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
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    width:'100%',
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