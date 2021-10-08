import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useContext, useState } from 'react'
import { StatusBar, StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { UserContext } from '../context/UsersContext';
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
            <View style={styles.containerInfo} key={item.id}>
              {/* <TouchableOpacity onPress={() => { navigation.navigate('InfoUser', item) }}> */}
              <TouchableOpacity onPress={() => { setUser(item), setState(true) }}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require('../assets/icons/user.png')} style={{ width: 50, height: 50 }} />
                  <View style={{ justifyContent: 'center', marginHorizontal: 50 }}>
                    <Text style={styles.title}>{item.nombre} {item.apellido}</Text>
                  </View>

                </View>
              </TouchableOpacity>
            </View>
          )
        })
      }
      <View>
        <PopUpInfoUserScreen show={state} changeStatePopUp={setState} user={user} />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  containerInfo: {
    backgroundColor: '#554B5F',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    color: "white"
  },
});