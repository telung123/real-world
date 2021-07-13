import Form from '@/pages/Form'
import Home from '@/pages/Home'
import Join from '@/pages/Join'
import Login from '@/pages/Login'
import { RouteItem } from 'router'

export const RouteHome: RouteItem = {
  path: '/',
  component: Home,
}

export const RouteJoin: RouteItem = {
  path: '/join',
  component: Join,
}

export const RouteLogin: RouteItem = {
  path: '/login',
  component: Login,
}

export const RouteForm: RouteItem = {
  path: '/article/form',
  component: Form,
}
