import { useRequestMap } from '@/api'
import Layout from '@/components/layout/Layout'
import React, { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'

interface FormData {
  username: string
  email: string
  password: string
}

const Join: FC = () => {
  const history = useHistory()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FormData> = async formData => {
    try {
      console.log(formData)
      await useRequestMap.UserRegister(formData)

      alert('회원가입 성공!')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Layout>
      <div className="container page-join">
        <div className="common-form">
          <h2 className="form-title">회원가입</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <div className="form-row">
                <label>
                  <span className="form-head">사용자 이름</span>
                  <input
                    type="text"
                    placeholder="사용자 이름"
                    className="txt large block"
                    {...register('username', {
                      validate: {
                        required: value => value !== '' || '필수 항목입니다.',
                      },
                    })}
                  />
                </label>
                {errors.username && (
                  <p className="input-error">
                    <i className="fas fa-times-circle"></i>{' '}
                    {errors.username.message}
                  </p>
                )}
              </div>
              <div className="form-row">
                <label>
                  <span className="form-head">이메일</span>
                  <input
                    type="text"
                    placeholder="이메일"
                    className="txt large block"
                    {...register('email', {
                      validate: {
                        required: value => value !== '' || '필수 항목입니다.',
                        pattern: value =>
                          /^\S+@\S+\.\S+$/.test(value) ||
                          '이메일 양식을 확인해주세요.',
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
                  회원가입
                </button>
                <button
                  type="button"
                  className="btn large"
                  onClick={() => history.goBack()}
                >
                  취소
                </button>
              </div>
            </fieldset>
          </form>
          <div className="info-box">
            이미 계정이 있으신가요? <Link to="/login">로그인</Link>을 해주세요.
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Join
