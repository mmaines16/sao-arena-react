import React from "react";
import InfoPanel from "./InfoPanel";

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
        </div>
      </div>
    );
  }
}
