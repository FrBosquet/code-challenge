import React, { Component } from 'react';
import request from '../request';
import { ARTICLE_BY_ID } from '../queries';
import { Link } from 'react-router-dom';

class Content extends Component{
  // definition
  constructor(props) {
    super(props);
    this.state = {
      author: 'Not found',
      content: '',
      published: false,
      tags: [],
      title: '',
    };
  }

  // lifecycle
  componentWillMount() {
    let query = ARTICLE_BY_ID(this.props.match.params.id);
    console.log('Query', query);
    request(query).then(response => {
      let {author, content, published, tags, title} = response.data.articleById;
      console.log(response.data.articleById);
      this.setState({
        author: author,
        content: content,
        published: published,
        tags: tags,
        title: title,
      });
    });
  }

  // render
  render(){
    return (
      <div className="article-detail wrapper">
        <h1 className="article-detail-author">Author: {this.state.author}</h1>
        <h2 className="article-detail-title">{this.state.title}</h2>
        <p className="article-detail-state">{this.state.published ? "Is published" : "Is not published"}</p>
        <p className="article-detail-content">{this.state.content}</p>
        <div className="article-detail-footer-wrapper">
          <div>
            {this.state.tags.map((tag, i)=>
              <span key={i} className="article-detail-tag button">{tag}</span>
            )}
          </div>
          <div>
            <Link to="/">
              <span className="button">
                go back
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}


export default Content;
