import React, { Fragment } from 'react';
import BookDetail from './pages/BookDetail'
import Home from './pages/Home'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/book/:bookID" component={BookDetail} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}

export default App;
