import { useRequestMap } from '@/api'
import { hasToken } from '@/api/auth'
import { FC, useEffect } from 'react'
import { FieldErrors, useForm } from 'react-hook-form'
import { useHistory } from 'react-router'

interface FormData {
  image: string
  username: string
  bio: string
  email: string
  password: string
}

const ProfileForm: FC = () => {
  const history = useHistory()
  const { data: { user: userData } = {} } = useRequestMap.CurrentUser(
    hasToken(),
  )
  const { register, reset, handleSubmit } = useForm<FormData>({
    mode: 'onSubmit',
    defaultValues: {
      image: '',
      username: '',
      bio: '',
      email: '',
      password: '',
    },
  })

  useEffect(() => {
    if (!userData) return

    reset({
      image: userData.image ?? '',
      username: userData.username,
      bio: userData.bio,
      email: userData.email,
    })
  }, [reset, userData])

  const onSubmit = (data: FormData) => {
    console.log(data)
  }
  const onSubmitError = (errors: FieldErrors) => {
    console.log(errors)
  }

  const onCancel = () => {
    // 수정 취소 -> mutate() ?
  }

  if (!userData) {
    history.push('/')
  }

  return (
    <>
      {userData && (
        <div className="container page-profile-edit">
          <div className="common-form">
            <h2 className="form-title">프로필 수정</h2>
            <form onSubmit={handleSubmit(onSubmit, onSubmitError)}>
              <fieldset>
                <div className="form-row">
                  <label>
                    <span className="form-head">프로필 이미지</span>
                    <input
                      type="text"
                      placeholder="프로필 이미지 URL"
                      className="txt large block"
                      {...register('image', {
                        validate: {
                          pattern: value => {
                            return (
                              /(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi.test(
                                value,
                              ) || 'URL 형식을 확인해주세요.'
                            )
                          },
                        },
                      })}
                    />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    <span className="form-head">사용자 이름</span>
                    <input
                      type="text"
                      placeholder="사용자 이름"
                      className="txt large block"
                      {...register('username', {
                        validate: {
                          required: value =>
                            value !== '' || '필수 항목 입니다.',
                        },
                      })}
                    />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    <span className="form-head">소개</span>
                    <textarea
                      cols={60}
                      rows={10}
                      placeholder="소개"
                      className="txt large block"
                      {...register('bio')}
                    >
                      {userData.bio}
                    </textarea>
                  </label>
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
                          required: value =>
                            value !== '' || '필수 항목 입니다.',
                          pattern: value =>
                            /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
                              value,
                            ) || '이메일 형식을 확인해주세요.',
                        },
                      })}
                    />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    <span className="form-head">새 비밀번호</span>
                    <input
                      type="password"
                      placeholder="새 비밀번호"
                      className="txt large block"
                      {...register('password')}
                    />
                  </label>
                </div>
                <div className="form-action">
                  <button type="submit" className="btn large primary">
                    수정
                  </button>
                  <button
                    type="button"
                    className="btn large"
                    onClick={onCancel}
                  >
                    취소
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default ProfileForm
