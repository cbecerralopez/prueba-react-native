import { useState } from 'react';
import { Alert } from 'react-native';
import { UserState } from '../context/UsersContext';

const useForm = <T extends Object>(formulario: T) => {
  const [state, setState] = useState(formulario);

  const onChange = (value: string, campo: keyof T) => {
    setState({
      ...state,
      [campo]: value,
    });
  };
  const cleanForm = (campo: keyof T) => {
    setState({
      ...state,
      ['nombre']: '',
      ['apellido']: '',
      ['email']: '',
      ['password']: '',
      ['usuario']: '',
    });
  }
  const validateInfo = (user: UserState): boolean => {
    if (user.nombre === "" || user.nombre?.length! <= 3) {
      if (user.nombre === "") {
        Alert.alert("debes ingresar tu nombre")
        return false
      }
      if (user.nombre?.length! <= 3) {
        Alert.alert("el nombre es demasiado corto")
        return false
      }
    }
    if (user.apellido === "" || user.apellido?.length! <= 3) {
      if (user.apellido === "") {
        Alert.alert("debes ingresar tu apellido")
        return false
      }
      if (user.apellido?.length! <= 3) {
        Alert.alert("el apellido es demasiado corto")
        return false
      }
    }
    if (user.userName === "" || user.userName?.length! <= 3) {
      if (user.userName === "") {
        Alert.alert("debes ingresar tu nombre de usuario")
        return false
      }
      if (user.userName?.length! <= 3) {
        Alert.alert("el nombre de usuario es demasiado corto")
        return false
      }
    }
    if (user.email === "" || user.email?.length! <= 3) {
      if (user.email === "") {
        Alert.alert("debes ingresar tu email")
        return false
      }
      if (user.email?.length! <= 3) {
        Alert.alert("el email es demasiado corto")
        return false
      }
    }
    if (user.password === "" || user.password?.length! < 5) {
      if (user.password === "") {
        Alert.alert("debes ingresar un password")
        return false
      }
      if (user.password?.length! < 5) {
        Alert.alert("el password debe contener 5 caracteres")
        return false
      }
    }
    return true

  }


  return {
    ...state,
    onChange,
    cleanForm,
    validateInfo
  }
};
export default useForm;
