import React, { Component } from 'react';
import { UserHeader } from './FollowCard';
import AvatarCircle from './Avatar';

import './css/TwitterCard.css';

class TweedDataCard extends Component {
  constructor(props) {
    super(props);

    this.tweetImage = this.props.image ? this.props.image : undefined;
    this.styles = {}

    if (this.tweetImage)
      this.styles.backgroundImage = "url(" + this.tweetImage + ")";
  }

  render() {
    return (
      <div className="tweet-data-wrapper">
        <UserHeader name={this.props.name} handle={this.props.handle}
                    verified={this.props.verified} stats={[this.props.time]} />
        <div className="tweet-text">{this.props.text}</div>
        {
          ((this.tweetImage) ?
            (<div className="tweet-image" style={this.styles}></div>) : ""
          )
        }
      </div>
    )
  }
}

class TweetCard extends Component {
  render() {
    return (
      <div className="tweet-card">
        {
          ((this.props.retweet) ?
            (<div className="retweet-notif">{this.props.retweet + " Retweeted"}</div>) : ""
          )
        }
        <div className="tweet-section">
          <div className="avatar-wrapper">
            <AvatarCircle size="50px" src={this.props.avatar} />
          </div>
          <TweedDataCard name={this.props.name} handle={this.props.handle}
                         verified={this.props.verified}
                         text={this.props.text} image={this.props.image}
                         time={this.props.time} />
        </div>
      </div>
    )
  }
}

export default TweetCard;
