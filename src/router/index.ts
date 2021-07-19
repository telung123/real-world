import Form from '@/pages/form'
import Home from '@/pages/home'
import Join from '@/pages/join'
import Login from '@/pages/login'

export interface RouteItem {
  path: string
  exact?: boolean
  component: any
}

const routes: RouteItem[] = [
  { path: '/login', component: Login },
  { path: '/join', component: Join },
  { path: '/article/form', component: Form },
  { path: '/', component: Home },
]

export default routes
