import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from './components/header';
import Content from './components/content';
import ArticleDetail from './components/article_detail';
import Footer from './components/footer';

class App extends Component {

  // Renders
  render() {
    return (
      <div className="App">
        <Header title="Coding challenge"/>
        <Switch>
          <Route exact path="/" component={Content} />
          <Route path="/:id" component={ArticleDetail} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
