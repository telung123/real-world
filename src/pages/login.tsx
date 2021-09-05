import { useRequestMap } from '@/api'
import { token } from '@/api/auth'
import Layout from '@/components/layout/Layout'
import { AxiosError } from 'axios'
import React, { FC, useCallback, useContext, useEffect } from 'react'
import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { AppContext } from '..'

interface FormData {
  email: string
  password: string
}

const Login: FC = () => {
  const { userToken } = useContext(AppContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const history = useHistory()
  const { data: userData, mutate } = useRequestMap.CurrentUser(userToken)

  useEffect(() => {
    if (userData?.user) {
      history.push('/home')
    }
  }, [history, userData?.user])

  const onSubmit: SubmitHandler<FormData> = useCallback(
    async formValue => {
      await useRequestMap
        .UserLogin({ user: formValue })
        .then(response => {
          token(response.data.user.token)
          void mutate().then(() => history.push('/'))
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
    [history, mutate],
  )

  return (
    <Layout>
      <div className="container page-login">
        <div className="common-form">
          <h2 className="form-title">로그인</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <legend>로그인</legend>
              <div className="form-row">
                <label>
                  <span className="form-head">이메일</span>
                  <input
                    type="email"
                    placeholder="이메일"
                    className="txt large block"
                    {...register('email', {
                      validate: {
                        required: value => value !== '' || '필수 항목입니다.',
                      },
                    })}
                  />
                </label>
                {errors.email && (
                  <p className="input-error">
                    <i className="fas fa-times-circle"></i>{' '}
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="form-row">
                <label>
                  <span className="form-head">비밀번호</span>
                  <input
                    type="password"
                    placeholder="비밀번호"
                    className="txt large block"
                    {...register('password', {
                      validate: {
                        required: value => value !== '' || '필수 항목입니다.',
                      },
                    })}
                  />
                </label>
                {errors.password && (
                  <p className="input-error">
                    <i className="fas fa-times-circle"></i>{' '}
                    {errors.password.message}
                  </p>
                )}
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
