import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import CreateNaver from '../Pages/CreateNaver';
import EditNaver from '../Pages/EditNaver';
import SignUp from '../Pages/SignUp';
import { isAuthenticated } from '../services/auth';
import { NaversProvider } from '../context/context';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
        <NaversProvider>
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/naver/create" component={CreateNaver} />
          <PrivateRoute path="/naver/edit/:id" component={EditNaver} />
        </NaversProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
