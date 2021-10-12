import 'react-native-gesture-handler'
import React from 'react';
import { createDrawerNavigator, DrawerScreenProps } from '@react-navigation/drawer';
import {FormularioScreen} from '../screens/FormularioScreen';
import { ListarUsuariosScreen } from '../screens/ListarUsuariosScreen';
import { Home } from '../screens/Home';
import { useWindowDimensions } from 'react-native';
import { UserProvider } from '../context/UsersContext';
import { LoginScreen } from '../screens/LoginScreen';
import { StackNavigator } from './StackNavigator';

export type RootStackParams = {
  Inicio: undefined
  Formulario: undefined
  ListarUsuarios: undefined
  Login:undefined
}
const Drawer = createDrawerNavigator<RootStackParams>();

export const MenuLateral = () => {
  const { width } = useWindowDimensions()
  return (
    <AppStates>
      <Drawer.Navigator screenOptions={{ drawerType: width >= 700 ? 'permanent' : 'front' }}>
        <Drawer.Screen name="Inicio" options={{ title: "Inicio" }} component={Home} />
        <Drawer.Screen name="Formulario" options={{ title: "Registrar usuario" }} component={FormularioScreen} />
        <Drawer.Screen name="ListarUsuarios" options={{ title: "Listar Usuarios" }} component={ListarUsuariosScreen} />
      </Drawer.Navigator >
    </AppStates>
  );
}
const AppStates = ({ children }: any) => {
  return (
    <UserProvider>{children}</UserProvider>
  )
}