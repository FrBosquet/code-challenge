import React, { Component } from 'react';
import { connect } from 'react-redux';
import request from '../request';
import { ARTICLES_QUERY } from '../queries';
import Card from '../components/card';
import { readArticles } from '../actions/index';

class Content extends Component{
  constructor({ dispatch }) {
    super(...arguments);

    request(ARTICLES_QUERY)
      .then(response =>{
        dispatch(readArticles(response.data.articles));
      })
  }

  render(){
    return (
      <div className="content wrapper">
        {this.props.articles.map((article)=>{
          return <Card
                    key={article.id}
                    id={article.id}
                    author={article.author}
                    excerpt={article.excerpt}/>
        })};
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {articles: state.articleReducer.articles || []};
}

export default connect( mapStateToProps, )(Content);
