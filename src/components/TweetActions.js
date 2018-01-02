import React, { Component } from 'react';
import './css/TweetActions.css';

class TweetActionItem extends Component {
  constructor(props) {
    super(props);

    // Set state stats to initial seed stat value
    this.state = { performed: false, stats: this.props.stats };
    this.handleAction = this.handleAction.bind(this);
    this.getActionIcon = this.getActionIcon.bind(this);

    // Class name that defines the change of component state
    this.innerClassName = "";
  }

  handleAction(event) {
    // Default stats increment action
    let didPerform = !this.state.performed;
    let newStat = this.state.stats + 1;
    this.setState({ performed: didPerform, stats: newStat });
  }

  getActionIcon(performed) {
    return <i className={"fa " + this.props.icon} aria-hidden="true"></i>
  }

  /* Needs better implementation */
  getHumanReadableStats(stats) {
    // Return {stats} as it is if {stats} > 0
    // else return an empty string
    return stats > 0 ? stats : "";
  }

  render() {
    // Might use multiple inner classes in the future
    let klasses = [ "tweet-action-item", this.props.className, this.innerClassName ];
    // Join above class names with spaces
    klasses = klasses.reduce((acc, item) => acc + " " + item);

    return (
      <div className={klasses} onClick={this.handleAction}>
        <div className="action-icon">
          { this.getActionIcon(this.state.performed) }
        </div>
        <div className="action-stat">
          { this.getHumanReadableStats(this.state.stats) }
        </div>
      </div>
    )
  }
}

class LikeActionItem extends TweetActionItem {
  /* Toggle action for like button */
  handleAction(event) {
    let didPerform = !this.state.performed;
    let newStat = this.state.stats + (didPerform ? 1 : -1);
    this.innerClassName = didPerform ? "tweet-like-active" : "";

    this.setState({ performed: didPerform, stats: newStat });
  }

  /* Like icon when clicked changes to the filled version.
   * Need to override {getActionIcon} to do just that. */
  getActionIcon(performed) {
    let _icon = this.props.icon;
    if (performed) {
      // FontAwesome has the convention of using a
      // '-o' suffix for non-filled icons. So we remove it
      // from the current icon in case a like was performed.
      _icon = this.props.icon.replace(/-o$/, "");
    }

    return <i className={"fa " + _icon} aria-hidden="true"></i>
  }
}

class MessageActionItem extends TweetActionItem {
  // Direct messaging isn't a toggle or a stat
  handleAction(event) { /* Do nothing really */ }

  // Don't display any stat
  getHumanReadableStats(stats) { return ""; }
}

class TweetActions extends Component {
  render() {
    return (
      <div className="tweet-action-list">
        <TweetActionItem stats={this.props.comments} icon="fa-comment-o"
                         className="tweet-action-comments" />
        <TweetActionItem stats={this.props.retweets} icon="fa-retweet"
                         className="tweet-action-retweets" />
        <LikeActionItem stats={this.props.likes} icon="fa-heart-o"
                        className="tweet-action-likes" />
        <MessageActionItem icon="fa-envelope-o" className="tweet-action-messages" />
      </div>
    )
  }
}

export default TweetActions;
