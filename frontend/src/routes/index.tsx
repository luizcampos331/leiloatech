import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BidAuction from '../pages/BidAuction';
import ActionRules from '../pages/ActionRules';
import ElectWinner from '../pages/ElectWinner';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={BidAuction} />
    <Route path="/action-rules" exact component={ActionRules} />
    <Route path="/elect-winner" exact component={ElectWinner} />
  </Switch>
);

export default Routes;
