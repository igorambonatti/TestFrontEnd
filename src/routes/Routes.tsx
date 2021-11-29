import React from 'react'
import {
  Route as ReactDomRoute,
  RouteProps as ReactDomProps,
  Redirect,
} from 'react-router-dom'

interface IRouteProps extends ReactDomProps {
  isPrivate?: boolean
  component: React.ComponentType
}

const Route: React.FC<IRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const user = false
  return (
    <ReactDomRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        )
      }}
    />
  )
}

export default Route
