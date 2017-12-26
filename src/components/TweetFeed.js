import React, { Component } from 'react';
import TweetCard from './TweetCard';

class TweetFeed extends Component {
  constructor(props) {
    super(props);

    // Static data for feeds
    this.data = [
      { 
        name: "Methusael", handle: "@IamMethusael",
        verified: true, time:"12m", avatar:"images/dp.jpg",
        retweet: "Vipin Yadav", image: "images/tweet-images/image0.jpg",
        text: "Merry Christmas Everyone!"
      },
      { 
        name: "NJIT", handle: "@NJIT",
        verified: true, time:"51m", avatar:"images/avatar-05.png",
        image: "images/tweet-images/image1.jpg",
        text: "Asst. Professor Daphne Soares' research on blind cave \
               fish provides new insight on neurobiology in humans."
      },
      {
        name: "Shower Thoughts", handle: "@TheWeirdWorld",
        verified: true, time:"2h", avatar:"images/avatar-10.png",
        retweet: "NJIT",
        text: "Surgery is stabbing someone to life."
      }
    ];
  }

  render() {
    return (
      <div className="tweet-feed">
      {
        this.data.map((obj, idx) => (
          <TweetCard name={obj.name} handle={obj.handle} verified={obj.verified}
                     time={obj.time} avatar={obj.avatar} retweet={obj.retweet}
                     image={obj.image} text={obj.text} />
        ))
      }
      </div>
    )
  }
}

export default TweetFeed;
