import React from "react"
import * as Minesweeper from "/minesweeper.js"
import Board from "./board.jsx";

class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      board: new Minesweeper.Board(9, 10),
    }
    this.updateGame = this.updateGame.bind(this);
  }
  updateGame(tile, flag) {
    if(flag){
      tile.toggleFlag();
    }
    else{
      tile.explore();
    }
    this.setState({board : this.state.board})
  }

  render(){
    return(
      <div>
        {/* passing in the board */}
        {/* inside Board tag are props passing down to board.jsx */}
        <Board board={this.state.board}
          // passing down the ability to use function updateGame
          update={this.updateGame}>
        </Board>
      </div>
    )
  }
}

export default Game;