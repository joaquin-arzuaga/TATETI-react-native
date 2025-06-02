import { useState } from "react";

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

function useTaTeTi(){
    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState(0);
    const winner = checkWinner(board);

      return {
        handlePress(index) {
        if (board[index] !== null) return;
    
        const newBoard = [...board];
        newBoard[index] = turn % 2 === 0 ? 'X' : 'O';
        setBoard(newBoard);
        setTurn(turn + 1);
        },

        board,

        winner,

        turn,
      
        resetGame: () => {
          setBoard(Array(9).fill(null));
          setTurn(0);
        }
      }
}

export default useTaTeTi;