import React, { Component } from 'react';
import request from '../request';
import { ARTICLES_QUERY } from '../queries';
import ContentCard from './content_card';

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

  render(){
    return (
      <div className="content">
        {this.state.articles.map((article)=>{
          return <ContentCard
            author={article.author}
            excerpt={article.excerpt}
            key={article.id}/>
        })};
      </div>
    );
  }
}

export default Content;
