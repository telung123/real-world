import Form from '@/pages/form'
import Home from '@/pages/home'
import Join from '@/pages/join'
import Login from '@/pages/login'
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
