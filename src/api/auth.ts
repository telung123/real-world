import axios from 'axios'
import Cookies from 'js-cookie'
import { http } from '@/api/index'
import jwt, { Jwt } from 'jsonwebtoken'
import { Users } from '@/api/types'

/**
 * @description JWT 토큰 발급
 * @param jwt.sign 토큰에 전달할 Data, 비밀키, option(만료일 등), 콜백함수
 */
export const token = (payload: Pick<Users, 'email' | 'username'>): void => {
  jwt.sign(
    payload,
    process.env.REACT_APP_SECRET_KEY as string,
    { expiresIn: '1d' },
    (err, token) => {
      if (err) {
        return console.log(err)
      }

      // axios default header로 토큰 설정
      http.defaults.headers.common['Authorization'] = `Token ${token as string}`

      return console.log(token)
    },
  )
}
