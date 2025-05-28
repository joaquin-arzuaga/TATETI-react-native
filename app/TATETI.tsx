import { View, StyleSheet, TouchableOpacity, Text, Alert } from "react-native";
import { useState } from "react";

function TATETI() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(0);

  const handlePress = (index) => {
    if (board[index] !== null) return;

    const newBoard = [...board];
    newBoard[index] = turn % 2 === 0 ? 'X' : 'O';
    setBoard(newBoard);
    setTurn(turn + 1);

    const winner = checkWinner(newBoard);
    if (winner) {
      Alert.alert('¡Tenemos un ganador!', `Ganó: ${winner}`, [
        { text: 'Reiniciar', onPress: resetGame }
      ]);
    } else if (turn === 8) {
      Alert.alert('Empate', 'Nadie ganó.', [{ text: 'Reiniciar', onPress: resetGame }]);
    }
  };

  const checkWinner = (board) => {
    const combos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // filas
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columnas
      [0, 4, 8], [2, 4, 6],           // diagonales
    ];

    for (const [a, b, c] of combos) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(0);
  };

  return (
    <View style={styles.container}>        
      {board.map((cell, index) => (
      <TouchableOpacity
        style={styles.button}
        key={index}
        onPress={() => handlePress(index)}
      >
        <Text style={styles.buttonText }>{cell}</Text>
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