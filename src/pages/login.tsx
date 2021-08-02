import { useRequestMap } from '@/api'
import { token } from '@/api/auth'
import Layout from '@/components/layout/Layout'
import React, { FC } from 'react'
import { FieldErrors, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Login: FC = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = async (formValue: { email: string; password: string }) => {
    try {
      const { data } = await useRequestMap.UserLogin({ user: formValue })
      token(data.token)
    } catch (e) {
      // TODO: Error- code분기 (422, 504 ..) 중앙화
      console.log(e)
    }
  }

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
