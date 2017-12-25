import React, { Component } from 'react';
import './css/Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.dimStyle = {
      padding: this.props.padTB + " " + this.props.padLR,
      fontSize: this.props.fontSize
    }

    this.className = "twt-btn";
  }

  render() {
    return (
      <button className={this.className} style={this.dimStyle}>
        {this.props.value}
      </button>
    )
  }
}

export class ButtonFilled extends Button {
  render() {
    this.className = "twt-btn twt-btn-filled";
    return super.render();
  }
}

export class ButtonStroked extends Button {
  render() {
    this.className = "twt-btn twt-btn-stroked";
    return super.render();
  }
} 

export default Button;
