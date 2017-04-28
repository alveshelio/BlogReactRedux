import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import PostsIndex from './PostsIndex';
import PostsNew from './PostsNew';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <div className='container'>
            <Switch>
              <Route path='/posts/new' component={PostsNew} />
              <Route exact path='/' component={PostsIndex} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
