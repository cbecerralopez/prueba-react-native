import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateral } from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';
import { LoginScreen } from './src/screens/LoginScreen';
import { StackNavigator } from './src/navigator/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
      <StackNavigator/>
      </AppState>
    </NavigationContainer>
  )
}
const AppState = ({ children }: any) => {
  return (
    <AuthProvider>{children}</AuthProvider>
  )
}