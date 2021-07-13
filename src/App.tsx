import routes from '@/router'
import React, { ReactElement } from 'react'
import { Route, Switch } from 'react-router-dom'

function App(): ReactElement {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} {...route} exact={route.exact ?? true} />
      ))}
    </Switch>
  )
}

export default App
