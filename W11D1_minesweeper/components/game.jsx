import React from "react"
import * as Minesweeper from "./minesweeper.js"

class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      board: new Minesweeper.Board(9, 10),
    }
    this.updateGame = this.updateGame.bind(this);
  }
  updateGame() {}

  render(){
    return(
      <div>
      <span>{this.state.board}</span>
      <span>{this.updateGame}</span>
      </div>
    )
  }
}

export default Game;