import React from "react";
import HealthBar from "./CharacterPanel/HealthBar";

export default class OpponentPanel extends React.Component {
  constructor() {
    super();

    this.state = {
      health: 80,
    };
  }

  render() {
    setTimeout(() => {this.setState({health: 28})}, 2000);

    return (
      <div class="row opponent-panel">

        <div class="col-md-10 rack-container-inverse">
          <div class="row effect-rack-inverse">
            <div class="thumbnail-effect-inverse pull-right"><span class="effect-stacked"><strong>10</strong></span></div>
            <div class="thumbnail-effect-inverse pull-right"><span class="effect-stacked"><strong>5</strong></span></div>
            <div class="thumbnail-effect-inverse pull-right"><span class="effect-stacked"><strong>2</strong></span></div>
          </div>
        </div>

        <div class="col-md-2 thumbnail-opponent">
          <div class="thumbnail-large"></div>
          <HealthBar percent={this.state.health}/>
        </div>


      </div>
    );
  }
}
