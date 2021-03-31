import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from '../components/LoginPage';
import {NotFoundPage} from '../components/NotFoundPage'
import Application from '../components/ApplicationPage'
import {GITHUB_HOST} from '../constants'



const HOST=  (typeof window !== undefined)? window.location.origin +"/basic-react-login":"" ;
const LOGIN_URL = `${HOST}`
const APPLICATION_URL = `${HOST}/signup`

  const AppRouter =() => (
    <BrowserRouter>
    <div>
      <Switch>
        <Route path= {LOGIN_URL} component={Login} exact = {true}/>
        <Route path={APPLICATION_URL } component={Application}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>

  )

  export default AppRouter;
