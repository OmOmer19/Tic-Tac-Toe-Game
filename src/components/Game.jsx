import React,{useState} from "react";
import Board from "./Board";
import { FaTimes, FaRegCircle } from "react-icons/fa";

// helper function to check for a winner
function calculateWinner(board) {
  // all winning lines on the tic tac toe board
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]

  // checking each winning line to see if there's a winner
  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a] // return 'x' or 'o'
    }
  }

  return null // no winner found
}

// checking if the board is full (tie) without using .every()
function isBoardFull(board) {
  for (let i = 0; i < board.length; i++) {
     // if any square is empty, board is not full
    if (board[i] === null) {
      return false
    }
  }
  return true
}

function Game() {
  // initializing the board state with 9 empty squares
  const [board, setBoard] = useState(Array(9).fill(null))
  // tracking if 'x' plays next
  const [xIsNext, setXIsNext] = useState(true)

  // getting the winner by passing current board to helper
  const winner = calculateWinner(board)

  // function to handle clicks on squares
  function handleSquareClick(index) {
    // ignoring clicks if square filled or game already won
    if (board[index] || winner) return

    // creating a copy of current board to modify
    const newBoard = board.slice()
    // marking square with current player's symbol
    newBoard[index] = xIsNext ? "x" : "o"
    // updating board state with new board
    setBoard(newBoard)
    // toggling player turn
    setXIsNext(!xIsNext)
  }

  // function to restart the game by resetting state
  function handleRestart() {
    // resetting board to all empty squares
    setBoard(Array(9).fill(null))
    // setting 'x' as next player
    setXIsNext(true)
  }

  // rendering the game UI
  return (
    <div className="flex flex-col items-center space-y-6">
      {/* displaying game status with winner, tie or next player */}
      <div className="text-center p-4 rounded-md w-full max-w-xs">
        {winner ? (
          // showing winner with big icon and green background
          <div className="flex items-center justify-center space-x-3 bg-green-100 text-green-800 font-extrabold text-2xl sm:text-3xl rounded-md py-3">
            {winner === "x" ? (
              <FaTimes className="text-red-600 text-4xl" />
            ) : (
              <FaRegCircle className="text-blue-600 text-4xl" />
            )}
            <span>wins!</span>
          </div>
        ) : isBoardFull(board) ? (
          // showing tie message with yellow background if no winner and board full
          <div className="bg-yellow-100 text-yellow-800 font-extrabold text-2xl sm:text-3xl rounded-md py-3">
            It&apos;s a tie!
          </div>
        ) : (
          // showing next player with colored icon if no winner or tie
          <div className="text-xl sm:text-2xl font-semibold">
            Next player:{" "}
            {xIsNext ? (
              <FaTimes className="inline text-red-600 ml-2" />
            ) : (
              <FaRegCircle className="inline text-blue-600 ml-2" />
            )}
          </div>
        )}
      </div>

      {/* rendering the board component with current state and click handler */}
      <Board board={board} onSquareClick={handleSquareClick} />
    

      {/* showing play again button if game ended by win or tie */}
      {(winner || isBoardFull(board)) && (
        <button
          onClick={handleRestart} // resetting game on click
          className="mt-4 px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold shadow-md
             hover:from-purple-600 hover:to-indigo-700 hover:scale-105 active:scale-95 transition-all duration-200 ease-out"
         >
          Play Again
        </button>
      )}

    </div>
  )
}

export default Game