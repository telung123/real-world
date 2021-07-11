import { FC } from 'react'
import Home from '@/pages/Home'
import * as routePath from '@/router/path'

export interface RouteItem {
  path: string
  exact?: boolean
  component: FC
}

const routes: RouteItem[] = [
  ...Object.values(routePath),
  { path: '*', component: Home },
]

export default routes
