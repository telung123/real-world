import routes from '@/router'
import React, { FC } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

const App: FC = () => {
  return (
    <Switch>
      {routes.map(({ component: Component, ...props }, index) => {
        return (
          <Route
            key={index}
            exact={true}
            sensitive={true}
            render={routeProps => <Component {...routeProps} />}
            {...props}
          />
        )
      })}
      <Redirect to="/" />
    </Switch>
  )
}

export default App
