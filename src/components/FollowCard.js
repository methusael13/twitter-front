import React, { Component } from 'react';
import { OpCardHeader } from './Trends';
import AvatarCircle from './Avatar';
import { ButtonStroked } from './Button';
import { CloseButton } from './UtilComponents';

import './css/FollowCard.css';

export class UserHeader extends Component {
  constructor(props) {
    super(props);

    this.stats = undefined;
    if (this.props.stats) {
      this.stats = this.props.stats.map((item, idx) => {
        return <span className="stats text-link"
                     key={"user-header-stat-" + idx}>{item}</span>;
      });
    }
  }

  render() {
    return (
      <div className="user-header">
        <span className="name">{this.props.name}</span>
        {
          ((this.props.verified) ?
           (<i className="fa fa-check-circle user-verified" aria-hidden="true"></i>) : ""
          )
        }
        <span className="handle">{this.props.handle}</span>
        { (this.stats ? this.stats : "") }
      </div>
    )
  }
}

export class FollowItem extends Component {
  render() {
    return (
      <div className="follow-item">
        <AvatarCircle size="50px" src={this.props.avatar} />
        <div className="follow-section">
          <UserHeader name={this.props.name} handle={this.props.handle}
                      verified={this.props.verified} />
          <div className="follow-btn">
            <ButtonStroked fontSize="12px" padTB="5px" padLR="25px" value="Follow" />
          </div>
        </div>
        <CloseButton size="10px" />
      </div>
    )
  }
}

class FollowList extends Component {
  constructor(props) {
    super(props);

    this.list = [
      [ "Teresa", "@Teresa", "avatar-02.png", true ],
      [ "Christopher", "@christ01", "avatar-03.png", true ],
      [ "Catherine", "@cath", "avatar-01.png", true ],
      [ "David", "@david02", "avatar-04.png", false ]
    ];
  }

  render() {
    return (
      <div className="follow-list">
      {
        this.list.map((item, idx) => (
          <FollowItem name={item[0]} handle={item[1]} key={"follow-item-" + idx}
                      avatar={"images/" + item[2]} verified={item[3]} />
        ))
      }
      </div>
    )
  }
}

class FollowCard extends Component {
  render() {
    return (
      <div className="follow-card card-component">
        <div className="follow-list-wrapper">
          <OpCardHeader title="Who to follow" funcs={["Refresh", "View all"]} />
          <FollowList />
        </div>
        <div className="follow-footer">
          <a className="text-link" href="#">Connect other address books</a>
        </div>
      </div>
    )
  }
}

export default FollowCard;
