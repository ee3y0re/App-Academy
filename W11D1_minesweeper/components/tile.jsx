import React from "react";

class Tile extends React.Component {
  render() {
    let tileState = "T"
    // if(this.props.tileObj.explored){
    //   if(this.props.tileObj.bombed){
    //     tileState = "&#9762";
    //   }
    // }
    if (this.props.tileObj.bombed) {
        return (<div> 
          ☢
        </div>)
      }

    return <div> 
      {tileState}
      </div>
  }
}

export default Tile;