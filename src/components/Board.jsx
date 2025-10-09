import React from "react"
import Square from "./Square"

// creating a board component that shows 9 squares in a grid
function Board({ board, onSquareClick }) {
  // rendering 9 squares using the board array and click handler
  return (
    <div className='grid grid-cols-3 gap-3'>
      {board.map((value, index) => (
        <Square
          key={index} // setting a unique key for each square
          value={value} // passing x, o, or null to square
          onClick={() => onSquareClick(index)} // calling onSquareClick with square index
        />
      ))}
    </div>
  )
}

export default Board
