import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { FormularioScreen } from '../screens/FormularioScreen';
import { ListarUsuariosScreen } from '../screens/ListarUsuariosScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { MenuLateral } from './MenuLateral';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Menulateral" component={MenuLateral} />
        </Stack.Navigator>
    );
}