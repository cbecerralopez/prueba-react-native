import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<any, any> { }

interface login {
  userName: string
  password: string
}
export const LoginScreen = ({ navigation }: Props) => {
  const { authState,signIn } = useContext(AuthContext)

  const [login, setLogin] = useState<login>({ userName: '', password: '' })
  return (
 
    <View style={styles.formContainer}>

      <Text style={styles.title}>Login</Text>

      <Text style={styles.label}>Usuario:</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Ingrese su Nombre de usuario:"
        placeholderTextColor="rgba(255,255,255,0.4)"
        keyboardType="default"
        selectionColor="white"
        onChangeText={(value) => { setLogin({ ...login, ['userName']: value }) }}
        value={login.userName}
        autoCapitalize="none"
        autoCorrect={false}
      />


      <Text style={styles.label}>Contraseña:</Text>
      <TextInput
        style={styles.inputField}
        placeholder="******"
        placeholderTextColor="rgba(255,255,255,0.4)"
        underlineColorAndroid="white"
        secureTextEntry
        selectionColor="white"
        onChangeText={(value) => { setLogin({ ...login, ['password']: value }) }}
        value={login.password}
        autoCapitalize="none"
        autoCorrect={false}
      />


      {/* Boton login */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => {signIn(login.userName,login.password)?navigation.replace('Menulateral'):Alert.alert("Usuario o contraseña invalidos")}}
        >
          <Text style={styles.buttonText} >Login</Text>
        </TouchableOpacity>
      </View>

    </View>

  )
}
const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#271E31',
    width: 150,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 280
  },
  title: {
    color: 'white',
    fontSize: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 50
  },
  label: {
    marginTop: 25,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    height: 600,
    marginBottom: 50,
    backgroundColor: '#AB9EDC'
  },
  button: {
    borderWidth: 2,
    borderColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 100
  },
  buttonText: {
    fontSize: 18,
    color: 'white'
  },
  inputField: {
    color: 'white',
    fontSize: 20,
  }
})