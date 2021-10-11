import React from 'react';
import { KeyboardTypeOptions, StyleSheet, TextInput } from 'react-native';

interface props {
  placeholder: keyof {
    password: string;
    apellido: string;
    usuario: string;
    nombre: string;
    email: string;
  },
  keyboard: KeyboardTypeOptions;
  value: string;
  onChange: (
    value: string,
    campo: keyof {
      password: string;
      apellido: string;
      usuario: string;
      nombre: string;
      email: string;
    },
  ) => void;
}

const FormularioTextInput = ({
  placeholder,
  keyboard,
  value,
  onChange,
}: props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      keyboardType={(keyboard != undefined) ? keyboard : 'default'}
      value={value}
      onChangeText={value => {
        onChange(value, placeholder)
      }
      }
      maxLength={placeholder != "password" ? 15 : 5}
      secureTextEntry={placeholder != "password" ? false : true }
    />
  );
};

export default FormularioTextInput;
const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
});
