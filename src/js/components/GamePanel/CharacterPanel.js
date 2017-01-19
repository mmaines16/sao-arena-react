import React from "react";
import HealthBar from "./CharacterPanel/HealthBar";

export default class CharcaterPanel extends React.Component {
  constructor() {
    super();

    this.state = {
      health: 80,
    };
  }


  render() {
    setTimeout(() => {this.setState({health: 55})}, 3000); //Debugging
    return (
      <div class="row character-panel">
        <div class="col-md-2">
          <div class="thumbnail-large"></div>
          <HealthBar percent={this.state.health}/>
        </div>

        <div class="col-md-10 rack-container">
          <div class="row effect-rack">
            <div class="thumbnail-effect"><span class="effect-stacked"><strong>2</strong></span></div>
            <div class="thumbnail-effect"><span class="effect-stacked"><strong>2</strong></span></div>
          </div>

          <div class="row skill-rack">

            <div class="col-md-3 skill">
              <div class="thumbnail-skill">
              </div>
            </div>

            <div class="col-md-3 skill">
              <div class="thumbnail-skill">
              </div>
            </div>

            <div class="col-md-3 skill">
              <div class="thumbnail-skill">
              </div>
            </div>

            <div class="col-md-3 skill">
              <div class="thumbnail-skill">
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}
