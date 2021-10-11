import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useContext, useState } from 'react'
import { StatusBar, StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { UserContext, UserState } from '../context/UsersContext';
import { PopUpInfoUserScreen } from '../components/PopUpInfoUser';
import { FilterDrawerLayout } from '../components/FilterDrawerLayout';



interface Props extends DrawerScreenProps<any, any> { }
export const ListarUsuariosScreen = ({ navigation }: Props) => {

  const { usersState } = useContext(UserContext)
  const [state, setState] = useState(false)
  const [user, setUser] = useState({})
  const [filter, setFilter] = useState("")
  const [params, setParams] = useState([""])

  const searchFilter = (): UserState[] => {
    if (filter != "" || params.length > 0) {
      let result = usersState.filter(usersState => usersState.nombre?.toLowerCase().includes(filter.toLowerCase()))
      if (params.includes("activo")) {
      return  result.filter(result => result.estado === true)
      }
      if (params.includes("desactivado")) {
        return  result.filter(result => result.estado === false)
        }
        return result
    }
    return usersState
  }

  if (usersState === undefined) {
    return <Text>No hay usuarios registrados</Text>
  }
  return (

    <View style={{ flex: 1}}>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:15}}>

      <TextInput
        style={{ borderColor: 'black', borderWidth: 1 ,width:'80%',marginHorizontal:10}}
        value={filter}
        onChangeText={e => { setFilter(e) }}
        placeholder={"Search Filter"} />

        <TouchableOpacity onPress={()=>{{console.log("soy drawer")}}}>
          <Image  source={require('../assets/icons/filtro.png')} style={{ width: 30, height: 30 }}/>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container}>
        {
          searchFilter().map((item) => {
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
    </View>

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