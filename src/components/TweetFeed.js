import React, { Component } from 'react';
import TweetCard from './TweetCard';

class TweetFeed extends Component {
  constructor(props) {
    super(props);

    // Static data for feeds
    this.data = [
      { 
        name: "Methusael", handle: "@IamMethusael",
        verified: false, time:"57m", avatar:"/images/dp.jpg",
        retweet: "Vipin Yadav", image: "/images/tweet-images/image0.jpg",
        text: "Merry Christmas everyone!",
        stats: { comments: 7, retweets: 25, likes: 150 }
      },
      {
        name: "Shower Thoughts", handle: "@TheWeirdWorld",
        verified: true, time:"4h", avatar:"/images/avatar-10.png",
        retweet: "NJIT",
        text: "Surgery is stabbing someone to life.",
        stats: { comments: 15, retweets: 75, likes: 230 }
      },
      { 
        name: "NJIT", handle: "@NJIT",
        verified: true, time:"13h", avatar:"/images/avatar-05.png",
        image: "/images/tweet-images/image1.jpg",
        text: "Asst. Professor Daphne Soares' research on blind cave \
               fish provides new insight on neurobiology in humans.",
        stats: { comments: 3, retweets: 0, likes: 112 }
      },
      { 
        name: "Diana Prince", handle: "@WonderWoman",
        verified: true, time:"19h", avatar:"/images/avatar-06.png",
        image: "/images/tweet-images/image2.jpg",
        retweet: "Queen Hippolyta",
        text: "I don't fear death so much as I fear its prologues: \
               loneliness, decrepitude, pain, debilitation, depression \
               and senility. After a few years of those, I imagine death \
               presents like a holiday at the beach.",
        stats: { comments: 55, retweets: 183, likes: 436 }
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
                     image={obj.image} text={obj.text} stats={obj.stats}
                     key={"tweet-card-item-" + idx} />
        ))
      }
      </div>
    )
  }
}

export default TweetFeed;
