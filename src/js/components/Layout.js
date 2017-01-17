import React from "react";
import InfoPanel from "./InfoPanel";
import GamePanel from "./GamePanel";
import DetailPanel from "./DetailPanel";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div class="row">
          <div class="col-md-offset-3 col-md-6">
            <InfoPanel />
          </div>
          
          <div class="col-md-12">
            <GamePanel />
          </div>

          <div class="col-md-12">
            <DetailPanel />
          </div>

        </div>
      </div>
    );
  }
}
