import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import { ClubsMainContainer } from './ui/page';
import { MembersMainContainer } from './ui/page';



class Routes extends React.PureComponent {
  //
  render() {
    //
    return (
      <BrowserRouter>
        <Route exact path="/" render={() => <Redirect exact from="/" to="/clubs" />} />
        <Route exact path="/clubs" render={() => <ClubsMainContainer />} />
        <Route exact path="/" render={() => <Redirect exact from="/" to="/members" />} />
        <Route exact path="/members" render={() => <MembersMainContainer />} />
      </BrowserRouter>
    );
  }
}

export default Routes;
