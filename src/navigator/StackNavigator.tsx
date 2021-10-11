import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import {FormularioScreen} from '../screens/FormularioScreen';
import { ListarUsuariosScreen } from '../screens/ListarUsuariosScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="FormularioScreen" component={FormularioScreen} />
            <Stack.Screen name="ListarUsuariosScreen" component={ListarUsuariosScreen} />
        </Stack.Navigator>
    );
}