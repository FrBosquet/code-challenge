import React, { Component } from 'react';
import request from '../request';
import { ARTICLES_QUERY } from '.

class Content extends Component{
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  // render
  render(){
    return (
      <div>
        {this.props.match.params.id}
      </div>
    );
  }
}

export default Content;
