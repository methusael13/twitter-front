import React, { Component } from 'react';
import './css/Trends.css';

class TrendItem extends Component {
  render() {
    return (
      <div className="trend-item">
        <span className="trend-hash">{this.props.hashTag}</span>
        <span className="trend-text">{this.props.text}</span>
        <span className="trend-stats">{this.props.stats}</span>
      </div>
    );
  }
}

export class OpCardHeader extends Component {
  render() {
    return (
      <div className="opcard-header">
        <span className="title">{this.props.title}</span>
        {
          this.props.funcs.map((item, idx) => (
            <a className="text-link" href="#" key={"opcard-item-" + idx}>{item}</a>
          ))
        }
      </div>
    )
  }
}

class Trends extends Component {
  constructor(props) {
    super(props);

    this.data = [
      [
        "#LookBeforeYouLeave",
        "Really just 5 minutes away? Check your accurate ETA with Google Maps.",
        "Promoted by Google India"
      ],
      [ "#ChangingRelationships", "", "4,110 Tweets" ],
      [ "Washington Sundar", "", "2,180 Tweets" ],
      [ "#Christmas Eve", "", "116K Tweets" ],
      [ "Lux Golden Rose Awards", "", "1,651 Tweets" ],
      [ "#IceHouseToWhiteHouse", "", "2,100 Tweets" ],
      [ "TED Talks India", "", "" ]
    ];
  }

  render() {
    return (
      <div className="trends card-component">
        <OpCardHeader title="Trends For You" funcs={["Change"]} />
        <div className="trends-list">
        {
          this.data.map((item, idx) => (
            <TrendItem hashTag={item[0]} text={item[1]} stats={item[2]}
                       key={"trend-item-" + idx} />
          ))
        }
        </div>
      </div>
    )
  }
}

export default Trends;
