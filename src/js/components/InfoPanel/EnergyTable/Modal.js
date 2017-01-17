import React from "react";
import ReactDOM from 'react-dom';

export default class Modal extends React.Component {

  componentDidMount() {
    this.modalTarget = document.createElement('div');
    this.modalTarget.className = 'modal';
    document.body.appendChild(this.modalTarget);
    console.log(this.props.show);
    this._render(this.props.show);
  }

  // componentWillUpdate() {
  //   this._render(this.props.show);
  // }

  componentWillReceiveProps(newProps) {
    if(this.props.show !== newProps.show && newProps.show) {
      console.log("Recieved True: Showing Modal");
      this._render(true);
      console.log(this.props.show + " -> " + newProps.show);
    }
    else if(this.props.show !== newProps.show && !newProps.show) {
      this._render(false);
    }

  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
  }

  _render(show) {
    this.modalTarget.className = 'modal';

    if(show) {
      ReactDOM.render(
        <div>
          {this.props.children}
        </div>,
        this.modalTarget
      );
    }
    else {
      this.modalTarget.className = 'modal hidden';
    }
  }

  render() {
    return (
      <div>
        <noscript />
      </div>
    );
  }
}
