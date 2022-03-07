import React from "react";

class Tile extends React.Component {
  render() {
    let klassName = 'tile';
    let tileState = ""

    if(this.props.tileObj.explored){
      if(this.props.tileObj.bombed){
        tileState = "☢";
        klassName = klassName + " bombed";
      } else if (this.props.tileObj.adjacentBombCount() > 0) {
        tileState = this.props.tileObj.adjacentBombCount();
        klassName = klassName + " explored";
      } else {
        tileState = " ";
        klassName = klassName + " explored";
      }
    }

    if(this.props.tileObj.flagged) {
      tileState = "⚑";
      klassName = klassName + " flagged";
    }

    return <div 
        className={klassName} 
        onClick={() => this.props.handle()}> 
        {tileState}
      </div>
  }
}

export default Tile;