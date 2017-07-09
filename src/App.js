import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';

class App extends Component {

  // Renders
  render() {
    return (
      <div className="App">
        <Header title="Coding challenge"/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default App;
