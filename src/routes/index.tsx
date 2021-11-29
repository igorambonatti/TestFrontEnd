import React from 'react'
import { Switch } from 'react-router-dom'

import Route from 'routes/Routes'
import DashboardScreen from 'screens/Dashboard/DashboardScreen'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={DashboardScreen} />
  </Switch>
)

export default Routes
