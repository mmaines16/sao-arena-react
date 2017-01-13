import React from "react";

export default class EnergyController extends React.Component {

  render() {
    return (
      <div class="row half-row">
        <div class="col-md-offset-1 col-md-1">
          <span class="fa fa-plus energy-controller btn btn-default" onClick={() => this.props.onPlusClick(this.props.color)}></span>
          <span class="fa fa-minus energy-controller btn btn-default" onClick={() => this.props.onMinusClick(this.props.color)}></span>
        </div>
        <div class="col-md-offset-1 col-md-2">
          <div class={this.props.color + " energy-large"}></div>
        </div>
        <div class="col-md-offset-1 col-md-2">
          <span id={this.props.color + "-energy-counter"} class="energy-counter-large">{this.props.children}</span>
          <input class="hidden" value={this.props.energy}/>
        </div>
      </div>
    );
  }
}
