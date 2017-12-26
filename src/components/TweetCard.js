import React, { Component } from 'react';
import { UserHeader } from './FollowCard';
import AvatarCircle from './Avatar';

import './css/TwitterCard.css';

class TweedDataCard extends Component {
  constructor(props) {
    super(props);

    this.state = { imgHeight: 0 };
    this.tweetImage = this.props.image ? this.props.image : undefined;
    this.styles = {};

    if (this.tweetImage)
      this.styles.backgroundImage = "url(" + this.tweetImage + ")";
  }

  componentDidMount() {
    if (!this.imageDOM) return;

    // Calculate image height based on parent width
    let dummyImg = new Image(); dummyImg.src = this.tweetImage;
    let aspect = dummyImg.naturalHeight / dummyImg.naturalWidth;
    let newHeight = Math.round(this.imageDOM.offsetWidth * aspect);

    // Update state to reflect new image height
    this.setState({ imgHeight: newHeight });
  }

  render() {
    // Augmented style
    const _styles = { ...this.styles, height: this.state.imgHeight + "px" };
    // React div component; Ref callback attaches the underlying
    // DOM element on component mount to {this.imageDOM}.
    // Required for calculating element dimensions.
    let imageComponent = (
      <div className="tweet-image"
           ref={(div) => { this.imageDOM = div }} style={_styles}>
      </div>
    );

    return (
      <div className="tweet-data-wrapper">
        <UserHeader name={this.props.name} handle={this.props.handle}
                    verified={this.props.verified} stats={[this.props.time]} />
        <div className="tweet-text">{this.props.text}</div>
        {
          ((this.tweetImage) ? imageComponent : "" )
        }
        <span className="tweet-card-options">
          <i className="fa fa-angle-down" aria-hidden="true"></i>
        </span>
      </div>
    )
  }
}

class RetweetNotification extends Component {
  render() {
    return (
      <div className="retweet-notif">
        <span className="icon">
          <i className="fa fa-retweet" aria-hidden="true"></i>
        </span>
        <span className="text">{this.props.retweet + " Retweeted"}</span>
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
            (<RetweetNotification retweet={this.props.retweet} />) : ""
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
