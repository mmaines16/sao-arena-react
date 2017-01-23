import React from "react";

export default class DetailPanel extends React.Component {
  render() {
    return (
      <div class="container DetailPanel">
        <div class="row test2">

          <div class="col-md-9">
            <div class="test4 row">
              <div class="col-md-3">
                <div class="thumbnail-detail-panel"></div>
              </div>
              <div class="col-md-9">
                <div class="detail-panel-info"></div>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="test4">
              <button class="btn btn-danger btn-block">Surrender?</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
