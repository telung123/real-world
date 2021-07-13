import routes from '@/router'
import React, { ReactElement } from 'react'
import { Route, Switch } from 'react-router-dom'

function App(): ReactElement {
  return (
    <Switch>
      {routes.map(({ component: Component, exact, ...props }, index) => {
        return (
          <Route
            key={index}
            exact={exact ?? true}
            render={routeProps => <Component {...routeProps} />}
            {...props}
          />
        )
      })}
    </Switch>
  )
}

export default App
