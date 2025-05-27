import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useState } from "react";

function TATETI() {

  const array = Array(9);

  return (
    <View style={styles.container}>
        
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>X</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>O</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>X</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>X</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>X</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>X</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>O</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>O</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>O</Text></TouchableOpacity>

    </View>
  )
}

export default TATETI;

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',           // hace que pasen a la siguiente línea
    justifyContent: 'center',
    alignItems: 'center',
    width: 270,                 // 3 celdas de 90px
    height: 270,
    backgroundColor: 'grey',
    alignSelf: 'center',        // centra horizontalmente
    marginTop: 100,
  },
  button: {
    width: 90,
    height: 90,
    borderWidth: 5,
    borderColor: 'black',
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'white',
  },
});