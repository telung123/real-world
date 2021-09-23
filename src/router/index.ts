import Form from '@/pages/form'
import Home from '@/pages/home'
import Join from '@/pages/join'
import Login from '@/pages/login'
import Profile from '@/pages/profile'
import ProfileForm from '@/pages/profileForm'

export interface RouteItem {
  path: string
  exact?: boolean
  component: any
}

const routes: RouteItem[] = [
  { path: '/login', component: Login },
  { path: '/join', component: Join },
  { path: '/@:username', component: Profile },
  { path: '/article/form', component: Form },
  { path: '/profile/form', component: ProfileForm },
  { path: '/', component: Home },
]

export default routes
