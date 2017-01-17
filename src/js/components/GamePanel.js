import React from "react";
import CharacterPanel from "./GamePanel/CharacterPanel";
import OpponentPanel from "./GamePanel/OpponentPanel";

export default class GamePanel extends React.Component {
  render() {
    return (
      <div class="container GamePanel">
        <div class="row">
          <div class="col-md-8 test test3">
            <CharacterPanel type="player" />
          </div>
          <div class="col-md-4 test test3 pull-right">
            <OpponentPanel />
          </div>
        </div>

        <div class="row">
          <div class="col-md-8 test test3">
            <CharacterPanel type="player" />
          </div>
          <div class="col-md-4 test test3 pull-right">
            <OpponentPanel />
          </div>
        </div>

        <div class="row">
          <div class="col-md-8 test test3">
            <CharacterPanel type="player" />
          </div>
          <div class="col-md-4 test test3 pull-right">
            <OpponentPanel />
          </div>
        </div>
      </div>
    );
  }
}
