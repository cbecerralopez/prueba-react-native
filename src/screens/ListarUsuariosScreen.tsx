import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useContext, useState } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { UserContext, UserState } from '../context/UsersContext';
import { PopUpInfoUserScreen } from '../components/PopUpInfoUser';


interface Props extends DrawerScreenProps<any, any> { }
export const ListarUsuariosScreen = ({ navigation }: Props) => {

  const { usersState } = useContext(UserContext)
  const [state, setState] = useState(false)
  const [user, setUser] = useState({})
  if (usersState === undefined) {
    return <Text>No hay usuarios registrados</Text>
  }
  return (

    <ScrollView style={styles.container}>
      {
        usersState.map((item) => {
          return (
            <View style={styles.item} key={item.id}>
              {/* <TouchableOpacity onPress={() => { navigation.navigate('InfoUser', item) }}> */}
              <TouchableOpacity onPress={() => { setUser(item), setState(true) }}>
                <Text style={styles.title}>Nombre: {item.nombre} {item.apellido}</Text>
                <Text style={styles.title}>Usuario: {item.userName} </Text>
              </TouchableOpacity>
            </View>
          )
        })
        }
      <View>
        <PopUpInfoUserScreen show={state} changeState={setState} user={user} />
      </View>
    </ScrollView>
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
    fontSize: 18,
  },
});