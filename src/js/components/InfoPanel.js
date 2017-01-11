import React from "react";
import AvatarBox from "./InfoPanel/AvatarBox";
import EnergyTable from "./EnergyTable"

export default class InfoPanel extends React.Component {
  render() {
    return (
      <div class="info-panel row">
        <div class="row">
          <div class="col-md-2 avatar-margin-left">
            <AvatarBox />
          </div>
          <div class="col-md-7 container">
            <EnergyTable />
          </div>
          <div class="col-md-2">
            <AvatarBox />
          </div>
        </div>

        <div class="timer row">
          <div class="progress-bar col-md-offset-3 col-md-5 container">

          </div>
        </div>
      </div>
    );
  }
}
