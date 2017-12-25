import React, { Component } from 'react';
import './css/UtilComponents.css';

export class CloseButton extends Component {
  constructor(props) {
    super(props);
    this.styles = {
      'metawrapper': {
        width: this.props.size,
        height: this.props.size
      }
    }
  }

  render() {
    return (
      <div className="close-wrapper" style={this.styles.metawrapper}>
        <div className="close-body"></div>
      </div>
    )
  }
}
