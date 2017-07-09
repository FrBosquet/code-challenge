import React, { Component } from 'react';
import request from './request';
import { ARTICLES_QUERY } from './queries';

import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';

class App extends Component {
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

  // Renders
  render() {
    return (
      <div className="App">
        <Header title="Coding challenge"/>
        {/* <pre>{JSON.stringify(this.state.articles, null, 2)}</pre> */}
        <Content articles={this.state.articles}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
