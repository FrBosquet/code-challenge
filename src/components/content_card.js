import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ContentCard extends Component{
  render(){
    return (
        <div className="content-card">
          <Link to={'/' + this.props.id}>
            <h3 className="content-card-author">{this.props.author}</h3>
            <p className="content-card-excerpt">{this.props.excerpt}</p>
          </Link>
        </div>
    );
  }
}

export default ContentCard;
