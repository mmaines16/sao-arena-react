import React from "react";
import ReactDOM from "react-dom";
import HealthBar from "./CharacterPanel/HealthBar";
import Skill from "./CharacterPanel/Skill";

export default class CharcaterPanel extends React.Component {
  constructor() {
    super();

    this.state = {
      health: 80,
    };
  }
  
  onCharacterImageClick = () => {
    var thumbnail = ReactDOM.findDOMNode(this).getElementsByClassName("thumbnail-large")[0];
    console.log('Character Thumbnail Selected');
    console.log(thumbnail);
  }


  render() {
    window.characters.push(this); //debug

    return (
      <div class="row character-panel">
        <div class="col-md-2">
          <div class="thumbnail-large character-image" onClick={this.onCharacterImageClick}></div>
          <HealthBar percent={this.state.health}/>
        </div>

        <div class="col-md-10 rack-container">
          <div class="row effect-rack">
            <div class="thumbnail-effect"><span class="effect-stacked"><strong>2</strong></span></div>
            <div class="thumbnail-effect"><span class="effect-stacked"><strong>2</strong></span></div>
          </div>

          <div class="row skill-rack">

            <Skill character={this}/>
            <Skill character={this}/>
            <Skill character={this}/>
            <Skill character={this}/>

          </div>
        </div>

      </div>
    );
  }
}
