import { View, StyleSheet, TouchableOpacity, Text, Alert } from "react-native";
import useTaTeTi from "./useTaTeTi";




function TATETI() {
  const { handlePress, board, winner, turn, resetGame } = useTaTeTi();

  // Dejamos esta lógica aquí ya que por el momento es la única forma de renderizar una victoria que tenemos, pero lo más
  // correcto sería crear un componente en el cuál estén implementadas las distintas formas de renderizar una victoria.
  if (winner) {
    Alert.alert('¡Tenemos un ganador!', `Ganó: ${winner}`, [
      { text: 'Reiniciar', onPress: resetGame }
    ]);
  } else if (turn === 8) {
    Alert.alert('Empate', 'Nadie ganó.', [{ text: 'Reiniciar', onPress: resetGame }]);
  }

  return (
    <View style={styles.container}>
      {board.map((cell, index) => (
        <TouchableOpacity
          style={styles.button}
          key={index}
          onPress={() => {
            handlePress(index);
          }}
        >
          <Text style={styles.buttonText}>{cell}</Text>
        </TouchableOpacity>
      ))}</View>
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