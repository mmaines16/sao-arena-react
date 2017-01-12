import React from "react";
import Modal from "./Modal";

export default class EnergyTable extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
    };

    this._showEnergyModal.bind(this);
    this._hideEnergyModal.bind(this);
  }

  _showEnergyModal = () => {
    this.setState({showModal: true});
    console.log(this.state);
  }

  _hideEnergyModal = () => {
    this.setState({showModal: false});
  }

  _EndTurnModal = () => {
    console.log("Applying changes to energy...\nClosing Modal...\n");
    this.setState({showModal: false});
  }

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
          <button class="energy-table-btn btn btn-danger" onClick={this._showEnergyModal}>End Turn</button>
        </div>
        <Modal show={this.state.showModal}>
          <div class="panel well">
            <span class="fa fa-times pull-right modal-close" aria-hidden="true"></span>
            <div class="panel-heading">
              <h2><b>Spend Random Energy</b></h2>
            </div>

            <div class="panel-body">
              <div class="row half-row no-border">
                <h4><strong><i>Random Energy Used: </i> <span>0</span></strong></h4>
              </div>
              <div class="row half-row">
                <div class="col-md-offset-1 col-md-1">
                  <span class="fa fa-plus energy-controller btn btn-default"></span>
                  <span class="fa fa-minus energy-controller btn btn-default"></span>
                </div>
                <div class="col-md-offset-1 col-md-2">
                  <div class="energy-large green"></div>
                </div>
                <div class="col-md-offset-1 col-md-2">
                  <span id="green-energy-counter" class="energy-counter-large">0</span>
                </div>
              </div>

              <div class="row half-row">
                <div class="col-md-offset-1 col-md-1">
                  <span class="fa fa-plus energy-controller btn btn-default"></span>
                  <span class="fa fa-minus energy-controller btn btn-default"></span>
                </div>
                <div class="col-md-offset-1 col-md-2">
                  <div class="energy-large red"></div>
                </div>
                <div class="col-md-offset-1 col-md-2">
                  <span id="red-energy-counter" class="energy-counter-large">0</span>
                </div>
              </div>

              <div class="row half-row">
                <div class="col-md-offset-1 col-md-1">
                  <span class="fa fa-plus energy-controller btn btn-default"></span>
                  <span class="fa fa-minus energy-controller btn btn-default"></span>
                </div>
                <div class="col-md-offset-1 col-md-2">
                  <div class="energy-large blue"></div>
                </div>
                <div class="col-md-offset-1 col-md-2">
                  <span id="blu-energy-counter" class="energy-counter-large">0</span>
                </div>
              </div>

              <div class="row half-row">
                <div class="col-md-offset-1 col-md-1">
                  <span class="fa fa-plus energy-controller btn btn-default"></span>
                  <span class="fa fa-minus energy-controller btn btn-default"></span>
                </div>
                <div class="col-md-offset-1 col-md-2">
                  <div class="energy-large white"></div>
                </div>
                <div class="col-md-offset-1 col-md-2">
                  <span id="white-energy-counter" class="energy-counter-large">0</span>
                </div>
              </div>
            </div>

            <div class="panel-footer row">
              <div class="row">
                <button class="btn btn-lg btn-danger pull-right" onClick={this._hideEnergyModal}>Cancel</button>
                <button class="btn btn-lg btn-success spacer-right pull-right" onClick={this._EndTurnModal}>End Turn</button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
