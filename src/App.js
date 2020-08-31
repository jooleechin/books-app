import React, { Fragment } from 'react';
import AllBooks from './pages/AllBooks'
import Home from './pages/Home'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/book/:bookID" component={AllBooks} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}

export default App;
