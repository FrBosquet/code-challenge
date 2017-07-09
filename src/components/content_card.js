import React, { Component } from 'react';

class ContentCard extends Component{
  render(){
    return (
      <div className="content-card">
        <h3 className="content-card-author">{this.props.author}</h3>
        <p className="content-card-excerpt">{this.props.excerpt}</p>
      </div>
    );
  }
}

export default ContentCard;
