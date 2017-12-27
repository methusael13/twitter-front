import React, { Component } from 'react';
import { ButtonFilled } from './Button';
import AvatarCircle from './Avatar';
import SearchBar from './SearchBar';

import './css/Header.css';

class NavLink extends Component {
  constructor(props) {
    super(props);

    this.navId = this.props.dataNavId;
    this.parentHandler = this.props.parentCallback;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (typeof this.parentHandler !== "function")
      return;
    this.parentHandler(this.navId);
  }

  render() {
    const active = this.props.active;
    // Extract active icon, inactive icon and title
    const { aicon, iicon, title } = this.props;
    const navLinkKlass = "nav-link" + (active ? " active" : "");

    return (
      <li className={navLinkKlass} onClick={this.handleClick}>
        <span className="icon">
          <i className={ "fa " + (active ? aicon : iicon) } aria-hidden="true"></i>
        </span>
        <span className="text">{title}</span>
      </li>
    );
  }
}

class HeaderNavPanel extends Component {
  constructor(props) {
    super(props);

    this.state = { activeId: 0 };
    this.handleChildEvent = this.handleChildEvent.bind(this);

    // Nav data
    this.navData = [
      [ "Home", "fa-home", "fa-home" ],
      [ "Moments", "fa-heart-o", "fa-heart" ],
      [ "Notifications", "fa-bell-o", "fa-bell" ],
      [ "Messages", "fa-envelope-o", "fa-envelope" ]
    ];
  }

  shouldComponentUpdate(nprops, nstate) {
    return nstate.activeId !== this.state.activeId;
  }

  handleChildEvent(navId) {
    if (this.state.activeId !== navId)
      this.setState({ activeId: navId });
  }

  render() {
    return (
      <ul className="header-nav">
        {
          this.navData.map((item, idx) => (
            <NavLink title={item[0]} iicon={item[1]} aicon={item[2]}
                     active={idx === this.state.activeId}
                     parentCallback={this.handleChildEvent}
                     dataNavId={idx} key={"hader-nav-item-" + idx} />
          ))
        }
      </ul>
    );
  }
}

class HeaderSearchpanel extends Component {
  render() {
    return (
      <div className="header-nav-right">
        <SearchBar />
        <AvatarCircle size="2rem" src="images/dp.jpg" />
        <ButtonFilled fontSize="0.875rem" padTB="0.5625rem" padLR="1.08rem" value="Tweet" />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="profile-header">
        <div className="container">
          <HeaderNavPanel />
          <div className="twitter-logo">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </div>
          <HeaderSearchpanel />
        </div>
      </div>
    );
  }
}

export default Header;
