import React, { Component } from 'react';
import './css/Avatar.css';

class AvatarCircle extends Component {
  render() {
    const styles = {
      backgroundImage: 'url(' + this.props.src + ')',
      width: this.props.size,
      height: this.props.size
    }
    
    return (<div className="avatar-circle" style={styles}></div>);
  }
}

export default AvatarCircle;
