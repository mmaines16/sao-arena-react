import React from "react";

export default class EnergyTable extends React.Component {
  render() {
    return (
      <div class="energy-table energy-table-margin-left">
        <div class="row energy-table-row">
          <div class="col-md-offset-2 col-md-2">
            <div class="energy green"></div>
          </div>
          <div class="col-md-offset-2 col-md-2">
            <span>0</span>
          </div>
        </div>
        <div class="row energy-table-row">
          <div class="col-md-offset-2 col-md-2">
            <div class="energy red"></div>
          </div>
          <div class="col-md-offset-2 col-md-2">
            <span>0</span>
          </div>
        </div>
        <div class="row energy-table-row">
          <div class="col-md-offset-2 col-md-2">
            <div class="energy blue"></div>
          </div>
          <div class="col-md-offset-2 col-md-2">
            <span>0</span>
          </div>
        </div>
        <div class="row energy-table-row">
          <div class="col-md-offset-2 col-md-2">
            <div class="energy white"></div>
          </div>
          <div class="col-md-offset-2 col-md-2">
            <span>0</span>
          </div>
        </div>
        <div class="row energy-table-btn-container">
          <button class="energy-table-btn btn btn-primary">Reset Skills</button>
          <button class="energy-table-btn btn btn-danger">End Turn</button>
        </div>
      </div>
    );
  }
}
