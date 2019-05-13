/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Organization from '../../components/Organization/Loadable';
import Profile from '../../components/Profile/Loadable';
import Navigation from '../../components/Navigation/Loadable';
import * as routes from './routes';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Route component={() => <Navigation />} />
      <Switch>
        <Route
          exact
          path={routes.ORGANIZATION}
          component={() => <Organization />}
        />
        <Route exact path={routes.PROFILE} component={() => <Profile />} />
        <NotFoundPage />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
