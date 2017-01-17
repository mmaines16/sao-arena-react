import React from "react";
import Modal from "./EnergyTable/Modal";
import EnergyController from "./EnergyTable/EnergyController"

export default class EnergyTable extends React.Component {
  constructor() {
    super();

    /* Changes in Energy (essentially the state of this component)
     * should and will be pulled from a data store to sync with
     * the rest of the application's data flow
     */

    this.state = {
      showModal: false,
      randomUsed: 6, //temp value for testing
      randomLeft: 2

      ,
      energies: {
        initial: {
          green: 2,
          red: 1,
          blue: 1,
          white: 2,
        },
        green: 1,
        red: 0,
        blue: 0,
        white: 1,
      },
    };

    this._showEnergyModal.bind(this);
    this._hideEnergyModal.bind(this);
  }

  _showEnergyModal = () => {
    var newState = Object.assign({}, this.state);
    newState.showModal = true;
    this.setState(newState);
    console.log("State: " + this.state + " -> newState: " + newState);
  }

  _hideEnergyModal = () => {
    var newState = Object.assign({}, this.state);
    newState.showModal = false;
    this.setState(newState);
  }

  _CancelEnergyModal = () => {
    this._resetEnergies();
    this._hideEnergyModal();
  }

  _EndTurnModal = () => {
    if(this.state.randomLeft > 0)
    {
      return;
    }

    var newState = Object.assign({}, this.state);
    newState.energies.initial.green = newState.energies.green;
    newState.energies.initial.red = newState.energies.red;
    newState.energies.initial.blue = newState.energies.blue;
    newState.energies.initial.white = newState.energies.white;
    newState.randomUsed = 0; //grab from app later
    newState.randomLeft = 0; //grab from app later (set to new randomUsed in the future)


    this.state = newState;

    var energyCountGreen = document.getElementById('green-energy-counter');
    var energyCountRed = document.getElementById('red-energy-counter');
    var energyCountBlue = document.getElementById('blue-energy-counter');
    var energyCountWhite = document.getElementById('white-energy-counter');

    energyCountGreen.innerHTML = newState.energies.green;
    energyCountRed.innerHTML = newState.energies.red;
    energyCountBlue.innerHTML = newState.energies.blue;
    energyCountWhite.innerHTML = newState.energies.white;

    var randomLeftCount = document.getElementById('randomLeft');
    randomLeftCount.innerHTML = newState.randomLeft;

    console.log("Applying changes to energy...\nClosing Modal...\n");
    this.setState({showModal: false});
  }

  _resetEnergies() {
    var newState = Object.assign({}, this.state);
    newState.energies.green = newState.energies.initial.green;
    newState.energies.red = newState.energies.initial.red;
    newState.energies.blue = newState.energies.initial.blue;
    newState.energies.white = newState.energies.initial.white;
    newState.randomLeft = this.state.randomUsed;

    this.state = newState;

    var energyCountGreen = document.getElementById('green-energy-counter');
    var energyCountRed = document.getElementById('red-energy-counter');
    var energyCountBlue = document.getElementById('blue-energy-counter');
    var energyCountWhite = document.getElementById('white-energy-counter');

    energyCountGreen.innerHTML = newState.energies.green;
    energyCountRed.innerHTML = newState.energies.red;
    energyCountBlue.innerHTML = newState.energies.blue;
    energyCountWhite.innerHTML = newState.energies.white;

    var randomLeftCount = document.getElementById('randomLeft');
    randomLeftCount.innerHTML = newState.randomLeft;
  }

  _MinusClick = (color) => {
    console.log("Minus Clicked in EnergyController: " + color);
    var newState = Object.assign({}, this.state);

    if(parseInt(this.state.randomUsed) != parseInt(this.state.randomLeft)) {
      switch(color) {
        case "green":
           if(parseInt(this.state.energies.initial.green) != parseInt(this.state.energies.green)) {
             newState.energies.green = parseInt(newState.energies.green) + 1;
             newState.randomLeft = parseInt(newState.randomLeft) + 1;
             this.setState(newState);

             var energyCount = document.getElementById('green-energy-counter');
             energyCount.innerHTML = newState.energies.green;

             var randomLeftCount = document.getElementById('randomLeft');
             randomLeftCount.innerHTML = newState.randomLeft;
           }
          break;
        case "red":
          if(parseInt(this.state.energies.initial.red) != parseInt(this.state.energies.red)) {
            newState.energies.red = parseInt(newState.energies.red) + 1;
            newState.randomLeft = parseInt(newState.randomLeft) + 1;
            this.setState(newState);

            var energyCount = document.getElementById('red-energy-counter');
            energyCount.innerHTML = newState.energies.red;

            var randomLeftCount = document.getElementById('randomLeft');
            randomLeftCount.innerHTML = newState.randomLeft;
          }
          break;
        case "blue":
          if(parseInt(this.state.energies.initial.blue) != parseInt(this.state.energies.blue)) {
            newState.energies.blue = parseInt(newState.energies.blue) + 1;
            newState.randomLeft = parseInt(newState.randomLeft) + 1;
            this.setState(newState);

            var energyCount = document.getElementById('blue-energy-counter');
            energyCount.innerHTML = newState.energies.blue;

            var randomLeftCount = document.getElementById('randomLeft');
            randomLeftCount.innerHTML = newState.randomLeft;
          }
          break;
        case "white":
          if(parseInt(this.state.energies.initial.white) != parseInt(this.state.energies.white)) {
            newState.energies.white = parseInt(newState.energies.white) + 1;
            newState.randomLeft = parseInt(newState.randomLeft) + 1;
            this.setState(newState);

            var energyCount = document.getElementById('white-energy-counter');
            energyCount.innerHTML = newState.energies.white;

            var randomLeftCount = document.getElementById('randomLeft');
            randomLeftCount.innerHTML = newState.randomLeft;
          }
          break;
      }

      if(newState.randomLeft > 0)
      {
        document.getElementById('endTurnButton').className = "btn btn-lg btn-success spacer-right pull-right disabled";
      }
    }

  }

  _PlusClick = (color) => {
    console.log("Plus Clicked in EnergyController: " + color);
    console.log(this.state);
    var newState = Object.assign({}, this.state);
      console.log(newState);
      switch(color) {
        case "green":
           if(parseInt(this.state.energies.green) > 0) {
             newState.energies.green = parseInt(newState.energies.green) - 1;
             newState.randomLeft = parseInt(newState.randomLeft) - 1;
             this.setState(newState);

             var energyCount = document.getElementById('green-energy-counter');
             energyCount.innerHTML = newState.energies.green;

             var randomLeftCount = document.getElementById('randomLeft');
             randomLeftCount.innerHTML = newState.randomLeft;
           }
          break;
        case "red":
          if(parseInt(this.state.energies.red) > 0) {
            newState.energies.red = parseInt(newState.energies.red) - 1;
            newState.randomLeft = parseInt(newState.randomLeft) - 1;
            this.setState(newState);

            var energyCount = document.getElementById('red-energy-counter');
            energyCount.innerHTML = newState.energies.red;

            var randomLeftCount = document.getElementById('randomLeft');
            randomLeftCount.innerHTML = newState.randomLeft;
          }
          break;
        case "blue":
          if(parseInt(this.state.energies.blue) > 0) {
            newState.energies.blue = parseInt(newState.energies.blue) - 1;
            newState.randomLeft = parseInt(newState.randomLeft) - 1;
            this.setState(newState);

            var energyCount = document.getElementById('blue-energy-counter');
            energyCount.innerHTML = newState.energies.blue;

            var randomLeftCount = document.getElementById('randomLeft');
            randomLeftCount.innerHTML = newState.randomLeft;
          }
          break;
        case "white":
          if(parseInt(this.state.energies.white) > 0) {
            newState.energies.white = parseInt(newState.energies.white) - 1;
            newState.randomLeft = parseInt(newState.randomLeft) - 1;
            this.setState(newState);

            var energyCount = document.getElementById('white-energy-counter');
            energyCount.innerHTML = newState.energies.white;

            var randomLeftCount = document.getElementById('randomLeft');
            randomLeftCount.innerHTML = newState.randomLeft;
          }
          break;
      }

      if(newState.randomLeft == 0)
      {
        document.getElementById('endTurnButton').className = "btn btn-lg btn-success spacer-right pull-right enabled";
      }
  }

  render() {
    return (
      <div class="energy-table energy-table-margin-left">
        <div class="row energy-table-row">
          <div class="col-md-offset-2 col-md-2">
            <div class="energy green"></div>
          </div>
          <div class="col-md-offset-2 col-md-2">
            <span>{ this.state.energies.initial.green }</span>
          </div>
        </div>
        <div class="row energy-table-row">
          <div class="col-md-offset-2 col-md-2">
            <div class="energy red"></div>
          </div>
          <div class="col-md-offset-2 col-md-2">
            <span>{ this.state.energies.initial.red }</span>
          </div>
        </div>
        <div class="row energy-table-row">
          <div class="col-md-offset-2 col-md-2">
            <div class="energy blue"></div>
          </div>
          <div class="col-md-offset-2 col-md-2">
            <span>{ this.state.energies.initial.blue }</span>
          </div>
        </div>
        <div class="row energy-table-row">
          <div class="col-md-offset-2 col-md-2">
            <div class="energy white"></div>
          </div>
          <div class="col-md-offset-2 col-md-2">
            <span>{ this.state.energies.initial.white }</span>
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
                <h4><strong><i>Random Energy Used: </i> <span id="randomLeft">{this.state.randomLeft}</span></strong></h4>
              </div>

              <EnergyController color="green" energy={this.state.energies.green} onPlusClick={ this._PlusClick } onMinusClick={ this._MinusClick }>
                { this.state.energies.green }
              </EnergyController>
              <EnergyController color="red" energy={this.state.energies.red} onPlusClick={ this._PlusClick } onMinusClick={ this._MinusClick }>
                { this.state.energies.red }
              </EnergyController>
              <EnergyController color="blue" energy={this.state.energies.blue} onPlusClick={ this._PlusClick } onMinusClick={ this._MinusClick }>
                { this.state.energies.blue }
              </EnergyController>
              <EnergyController color="white" energy={this.state.energies.white} onPlusClick={ this._PlusClick } onMinusClick={ this._MinusClick }>
                { this.state.energies.white }
              </EnergyController>

          </div>

            <div class="panel-footer row">
              <div class="row">
                <button class="btn btn-lg btn-danger pull-right" onClick={this._CancelEnergyModal}>Cancel</button>
                <button id="endTurnButton" class="btn btn-lg btn-success spacer-right pull-right disabled" onClick={this._EndTurnModal}>End Turn</button>
              </div>
            </div>

          </div>
        </Modal>
      </div>
    );
  }
}
