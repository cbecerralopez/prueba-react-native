import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FormularioTextInput from '../components/FormularioTextInput';
import useForm from '../hooks/useForm';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { UserContext, UserState } from '../context/UsersContext';
import { AuthContext, AuthState } from '../context/AuthContext';

interface Props extends DrawerScreenProps<any, any> { }

const FormularioScreen = ({ navigation }: Props) => {

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
      <View>
        <FormularioTextInput placeholder="nombre" keyboard="default" value={nombre} onChange={onChange} />
        <FormularioTextInput placeholder="apellido" keyboard="default" value={apellido} onChange={onChange} />
        <FormularioTextInput placeholder="usuario" keyboard="default" value={usuario} onChange={onChange} />
        <FormularioTextInput placeholder="email" keyboard="default" value={email} onChange={onChange} />
        <FormularioTextInput placeholder="password" keyboard="default" value={password} onChange={onChange} />
      </View>
      <View style={styles.fila}>
        <TouchableOpacity onPressIn={() => { add(user) }} onPress={() => {navigation.navigate('ListarUsuarios'),cleanForm("apellido") }}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>Guardar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('Inicio') }}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>Cancelar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormularioScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
    width: 150,
    height: 45,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 15,
    alignItems: 'baseline',
  },
  fabText: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
  },
});
