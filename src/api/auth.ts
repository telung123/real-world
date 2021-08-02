import axios from 'axios'
import Cookies from 'js-cookie'
import { Users } from '@/api/types'

/**
 * @description JWT 토큰 - 쿠키 저장(서버 구현X = httpOnly, secure 적용X)
 * @param token user email, pw로 인증받은 이후 발급된 token 저장.
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
