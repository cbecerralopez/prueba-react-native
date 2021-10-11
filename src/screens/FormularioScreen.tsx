import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FormularioTextInput from '../components/FormularioTextInput';
import useForm from '../hooks/useForm';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { UserContext, UserState } from '../context/UsersContext';
import { AuthContext } from '../context/AuthContext';

interface Props extends DrawerScreenProps<any, any> { }

export const FormularioScreen = ({ navigation }: Props) => {

  const { add } = useContext(UserContext)
  const { authState: { userName } } = useContext(AuthContext)

  const { nombre, email, usuario, apellido, password, onChange, cleanForm } = useForm({
    nombre: '',
    apellido: '',
    password: '',
    email: '',
    usuario: '',
  });

  const user: UserState = {
    id: undefined,
    nombre: nombre,
    apellido: apellido,
    email: email,
    userName: usuario,
    password: password,
    estado: true,
    createBy: userName
  }

  return (
    <View style={styles.container}>

      <FormularioTextInput placeholder="nombre" keyboard="default" value={nombre} onChange={onChange} />
      <FormularioTextInput placeholder="apellido" keyboard="default" value={apellido} onChange={onChange} />
      <FormularioTextInput placeholder="usuario" keyboard="default" value={usuario} onChange={onChange} />
      <FormularioTextInput placeholder="email" keyboard='email-address' value={email} onChange={onChange} />
      <FormularioTextInput placeholder="password" keyboard="visible-password" value={password} onChange={onChange} />
      
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity  style={styles.btn} onPress={() => { navigation.navigate('ListarUsuarios'), add(user), cleanForm("apellido") }}>
            <Text style={styles.Text}>Guardar</Text>
          </TouchableOpacity>
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },
  fila: {
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    bottom: 25,
  },
  btn: {
    backgroundColor: '#271E31',
    width: 150,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 280
  },
  Text: {
    color: 'white',
    fontSize: 20,
  },
});
