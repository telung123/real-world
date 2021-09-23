import axios from 'axios'
import Cookies from 'js-cookie'

export const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

export const hasToken = () => Cookies.get('jwt')

const issuedToken = hasToken()
if (issuedToken) {
  http.interceptors.request.use(config => {
    config.headers.Authorization = `Token ${issuedToken}`
    return config
  })
} else {
  http.interceptors.request.use(config => {
    delete config.headers.Authorization
    return config
  })
}

/**
 * @param token user email, pw로 인증받은 이후 발급된 token.
 */
export const token = (token: string | null = null): void => {
  if (token) {
    Cookies.set('jwt', token)
  } else {
    Cookies.remove('jwt')
  }
}
