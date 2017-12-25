import React, { Component } from 'react';
import ProfileCard from './ProfileCard';
import Trends from './Trends';
import FollowCard from './FollowCard';
import TweetInput from './TweetInput';
import TweetCard from './TweetCard';

import './css/ContentArea.css';

class ContentArea extends Component {
  render() {
    return (
      <div className="content-area">
        <div className="col-profile">
          <ProfileCard name="Methusael" handle="@IamMethusael"
                       tweets="20" following="64" followers="35"
                       coverSrc="images/cover.jpg"
                       dpSrc="images/dp.jpg" />
          <Trends />
        </div>
        <div className="col-follow">
          <FollowCard />
        </div>
        <div className="col-tweet">
          <div className="col-tweet-wrapper card-component">
            <TweetInput dpSrc="images/dp.jpg" placeholder="What's happening?" />
            <TweetCard name="Methusael Murmu" handle="@IamMethusael"
                       verified={true} text="Merry Christmas everyone!"
                       avatar="images/dp.jpg" time="12m"
                       retweet="Elon Musk" />
          </div>
        </div>
      </div>
    );
  }
}

export default ContentArea;
