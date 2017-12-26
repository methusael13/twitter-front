import React, { Component } from 'react';
import AvatarCircle from './Avatar';

import './css/TweetInput.css';

export default class TweetInput extends Component {
  render() {
    return (
      <div className="tweet-input-wrapper">
        <span className="avatar-wrapper">
          <AvatarCircle size="32px" src={this.props.dpSrc} />
        </span>
        <span className="input-wrapper">
          <input type="text" className="tweet-input" placeholder={this.props.placeholder} />
          <i className="fa fa-picture-o" aria-hidden="true"></i>
        </span>
      </div>
    )
  }
}
