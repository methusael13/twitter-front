import React, { Component } from 'react';
import './css/FooterCard.css';

export class CardFooterData extends Component {
  render() {
    return (
      <div className="card-footer">
        <span className="text-link footer-text-icon">
          <i className={"fa " + this.props.icon} aria-hidden="true"></i>
        </span>
        <a className="text-link" href="#">{this.props.text}</a>
      </div>
    )
  }
}

class FooterCard extends Component {
  constructor(props) {
    super(props);

    this.textData = [ "© 2017 Twitter" ];
    this.linkData = [
      "About", "Help Center", "Terms", "Privacy policy",
      "Cookies", "Ads info", "Brand", "Blog", "Status",
      "Apps", "Jobs", "Marketing", "Businesses", "Developers"
    ]
  }

  render() {
    return (
      <div className="footer-links-card card-component">
        <div className="footer-data">
          {
            this.textData.map((item, idx) => (
              <span className="footer-text" key={"footer-text-item-" + idx}>{item}</span>
            ))
          }
          {
            this.linkData.map((item, idx) => (
              <span className="footer-link text-link" key={"footer-link-item-" + idx}>
                {item}
              </span>
            ))
          }
        </div>
        <CardFooterData icon="fa-external-link" text="Advertise with Twitter" />
      </div>
    )
  }
}

export default FooterCard;
