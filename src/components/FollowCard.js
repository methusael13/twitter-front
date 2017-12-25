import React, { Component } from 'react';
import { OpCardHeader } from './Trends';
import AvatarCircle from './Avatar';
import { ButtonStroked } from './Button';
import { CloseButton } from './UtilComponents';

import './css/FollowCard.css';

export class FollowItem extends Component {
  render() {
    return (
      <div className="follow-item">
        <AvatarCircle size="50px" src={this.props.avatar} />
        <div className="follow-section">
          <div className="follow-data">
            <span className="name">{this.props.name}</span>
            <span className="handle">{this.props.handle}</span>
          </div>
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
      [ "Teresa", "@Teresa", "avatar-02.png" ],
      [ "Christopher", "@christ01", "avatar-03.png" ],
      [ "Catherine", "@cath", "avatar-01.png" ],
      [ "David", "@david02", "avatar-04.png" ]
    ];
  }

  render() {
    return (
      <div className="follow-list">
      {
        this.list.map((item, idx) => (
          <FollowItem name={item[0]} handle={item[1]} key={"follow-item-" + idx}
                      avatar={"images/" + item[2]} />
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
        <OpCardHeader title="Who to follow" funcs={["Refresh", "View all"]} />
        <FollowList />
        <div className="follow-footer">
          <a className="text-link" href="#">Connect other address books</a>
        </div>
      </div>
    )
  }
}

export default FollowCard;
