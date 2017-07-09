import React, { Component } from 'react';
import ContentCard from './content_card';

class Content extends Component{
  render(){
    return (
      <div className="content">
        {this.props.articles.map((article)=>{
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
