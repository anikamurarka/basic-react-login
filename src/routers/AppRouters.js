import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from '../components/LoginPage';
import {NotFoundPage} from '../components/NotFoundPage'
import Application from '../components/ApplicationPage'





  const AppRouter =() => (
    <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Login} exact = {true}/>
        <Route path="/signup" component={Application}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>

  )

  export default AppRouter;
