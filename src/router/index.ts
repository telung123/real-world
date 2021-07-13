import { FC } from 'react'
import Home from '@/pages/home'
import * as routePath from 'router/path'

export interface RouteItem {
  path: string
  exact?: boolean
  component: any
}

const routes: RouteItem[] = [
  ...Object.values(routePath),
  { path: '*', component: Home },
]

export default routes
