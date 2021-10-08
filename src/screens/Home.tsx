import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';

interface Props extends DrawerScreenProps<any, any> {

}
export const Home = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      {/* <Button title="Formulario" onPress={()=>{navigation.navigate("FormularioScreen")}}></Button> */}
      <Image
        style={styles.logo}
        source={{ uri: 'https://www.kvalue.cl/wp-content/uploads/2021/04/Logo_Web-300x105.png' }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  logo: {
    width: 300,
    height: 100,

  },
});