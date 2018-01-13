import React, { Component } from 'react';
import ProfileCard from './ProfileCard';
import Trends from './Trends';
import FollowCard from './FollowCard';
import TweetInput from './TweetInput';
import TweetFeed from './TweetFeed';
import FooterCard from './FooterCard';

import './css/ContentArea.css';

class ContentArea extends Component {
  render() {
    return (
      <div className="content-area">
        <div className="col-profile">
          <ProfileCard name="Methusael" handle="@IamMethusael"
                       tweets="20" following="64" followers="35"
                       coverSrc="/images/cover.jpg"
                       dpSrc="/images/dp.jpg" />
          <Trends />
        </div>
        <div className="col-follow">
          <FollowCard /><FooterCard />
        </div>
        <div className="col-tweet">
          <div className="col-tweet-wrapper card-component">
            <TweetInput dpSrc="/images/dp.jpg" placeholder="What's happening?" />
            <TweetFeed />
          </div>
        </div>
      </div>
    );
  }
}

export default ContentArea;
