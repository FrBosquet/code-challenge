import React, { Component } from 'react';
import request from '../request';
import { ARTICLES_QUERY } from '../queries';
import Card from '../components/card';


class Content extends Component{
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  render(){
    return (
      <div className="content wrapper">
        {this.state.articles.map((article, i)=>{
          return <Card
                    key={i}
                    id={article.id}
                    author={article.author}
                    excerpt={article.excerpt}/>
        })};
      </div>
    );
  }
}

export default Content;
