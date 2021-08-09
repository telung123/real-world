import { useRequestMap } from '@/api'
import { token } from '@/api/auth'
import Layout from '@/components/layout/Layout'
import { AxiosError } from 'axios'
import React, { FC, useCallback, useEffect } from 'react'
import { FieldErrors, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'

const Login: FC = () => {
  const { register, handleSubmit } = useForm()
  const history = useHistory()
  const { data: userData } = useRequestMap.CurrentUser()

  useEffect(() => {
    if (userData?.user) {
      history.push('/home')
    }
  }, [history, userData])

  const onSubmit = useCallback(
    async (formValue: { email: string; password: string }) => {
      await useRequestMap
        .UserLogin({ user: formValue })
        .then(response => {
          token(response.data.user.token)
        })
        .catch((error: AxiosError) => {
          const code = error.response?.status
          switch (code) {
            case 422:
              return alert('이메일/비밀번호를 확인해주세요.')
            case 504:
              return alert('일시적 오류입니다.\n잠시후 다시 시도해주세요.')
            default:
              break
          }
        })
    },
    [],
  )

  const onError = (error: FieldErrors): void => {
    // TODO: 토스트로 변경? Form error 취합

    console.log('error', error)
  }

  return (
    <Layout>
      <div className="container page-login">
        <div className="common-form">
          <h2 className="form-title">로그인</h2>

          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <fieldset>
              <legend>로그인</legend>
              <div className="form-row">
                <label>
                  <span className="form-head">이메일</span>
                  <input
                    type="email"
                    placeholder="이메일"
                    className="txt large block"
                    {...register('email', { required: true })}
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  <span className="form-head">비밀번호</span>
                  <input
                    type="password"
                    placeholder="비밀번호"
                    className="txt large block"
                    {...register('password', { required: true })}
                  />
                </label>
              </div>
              <div className="form-action">
                <button type="submit" className="btn large primary">
                  로그인
                </button>
              </div>
            </fieldset>
          </form>

          <div className="info-box">
            처음 오셨나요? <Link to="/join">회원가입</Link>을 해주세요.
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login
