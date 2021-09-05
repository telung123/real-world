import axios from 'axios'
import Cookies from 'js-cookie'

// export const issuedToken = Cookies.get('jwt')
// if (issuedToken) {
//   axios.defaults.headers.common['Authorization'] = `Token ${issuedToken}`
// }

/**
 * @param token user email, pw로 인증받은 이후 발급된 token.
 */
export const token = (token: string | null = null): void => {
  if (token) {
    Cookies.set('jwt', token)

    // axios default header로 토큰 설정
    axios.defaults.headers.common['Authorization'] = `Token ${token}`
  } else {
    Cookies.remove('jwt')
    delete axios.defaults.headers.common['Authorization']
  }
}
