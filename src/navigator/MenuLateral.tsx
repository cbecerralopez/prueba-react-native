import React from 'react';
import { createDrawerNavigator, DrawerScreenProps } from '@react-navigation/drawer';
import FormularioScreen from '../screens/FormularioScreen';
import { ListarUsuariosScreen } from '../screens/ListarUsuariosScreen';
import { Home } from '../screens/Home';
import { Usuario } from '../models/usuario';
import { useWindowDimensions } from 'react-native';
import { UserProvider, UserState } from '../context/UsersContext';
import { InfoUser } from '../screens/InfoUser';

export type RootStackParams = {
  Inicio: undefined
  Formulario: undefined
  ListarUsuarios: undefined
  InfoUser: UserState
}
const Drawer = createDrawerNavigator<RootStackParams>();

export const MenuLateral = () => {
  const { width } = useWindowDimensions()
  return (
    <AppStates>
      <Drawer.Navigator screenOptions={{ drawerType: width >= 700 ? 'permanent' : 'front' }}>
        <Drawer.Screen name="Inicio" options={{ title: "Inicio" }} component={Home} />
        <Drawer.Screen name="Formulario" options={{ title: "Formulario" }} component={FormularioScreen} />
        <Drawer.Screen name="ListarUsuarios" options={{ title: "Listar Usuarios" }} component={ListarUsuariosScreen} />
        <Drawer.Screen name="InfoUser" options={{ title: "Informacion" }} component={InfoUser} />
      </Drawer.Navigator >
    </AppStates>
  );
}
const AppStates = ({ children }: any) => {
  return (
    <UserProvider>{children}</UserProvider>
  )
}