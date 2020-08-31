import React, { Fragment } from 'react';
import Book from './pages/Book'
import Home from './pages/Home'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/book/:bookID" component={Book} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}

export default App;
