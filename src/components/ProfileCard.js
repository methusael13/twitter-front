import React, { Component } from 'react';
import AvatarCircle from './Avatar';

import './css/ProfileCard.css';

class ProfileStatsItem extends Component {
  render() {
    return (
      <li className="profile-stats-item">
        <span className="type">{this.props.type}</span>
        <span className="value">{this.props.value}</span>
      </li>
    )
  }
}

class ProfileCard extends Component {
  render() {
    const coverStyle = {
      backgroundImage: 'url(' + this.props.coverSrc + ')'
    }

    return (
      <div className="profile-card card-component">
        <div className="profile-cover" style={coverStyle}></div>
        <div className="profile-data">
          <AvatarCircle size="75px" src={this.props.dpSrc} />
          <div className="profile-handle">
            <span className="name">{this.props.name}</span>
            <span className="handle">{this.props.handle}</span>
          </div>
          <div className="profile-stats">
            <ul className="profile-stats-list">
              <ProfileStatsItem type="Tweets" value={this.props.tweets} />
              <ProfileStatsItem type="Following" value={this.props.following} />
              <ProfileStatsItem type="Followers" value={this.props.followers} />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
