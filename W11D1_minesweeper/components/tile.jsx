import React from "react";

class Tile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tile : this.props.tileObj,
    }
  }
  render() {
    let klassName = 'tile';
    let tileState = ""

    if(this.state.tile.explored){
      if(this.state.tile.bombed){
        tileState = "☢";
        klassName = klassName + " bombed";
      } else if (this.state.tile.adjacentBombCount() > 0) {
        tileState = this.state.tile.adjacentBombCount();
        klassName = klassName + " explored";
      } else {
        tileState = " ";
        klassName = klassName + " explored";
      }
    }

    if(this.state.tile.flagged) {
      tileState = "⚑";
      klassName = klassName + " flagged";
    }

    return <div 
        className={klassName} 
        onClick={() => this.props.update(this.state.tile, false)}> 
        {tileState}
      </div>
  }
}

export default Tile;