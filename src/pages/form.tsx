import { useRequestMap } from '@/api'
import React, { FC } from 'react'
import { FieldErrors, useForm } from 'react-hook-form'
import { useHistory } from 'react-router'

interface FormData {
  title: string
  description: string
  body: string
  tagList?: string
}

const Form: FC = () => {
  const history = useHistory()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onSubmit',
    defaultValues: {
      title: '',
      description: '',
      body: '',
      tagList: '',
    },
  })

  const onSubmit = async (data: FormData) => {
    const submitData = {
      article: {
        ...data,
        tagList: data?.tagList?.split(',') ?? [],
      },
    }
    await useRequestMap
      .CreateArticle(submitData)
      .then(response => {
        console.log('success', response.data)
      })
      .catch(e => console.log(e))
  }

  return (
    <>
      <div className="container page-form">
        <div className="common-form">
          <h2 className="form-title">글 등록하기</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <div className="form-row">
                <label>
                  <span className="form-head">제목</span>
                  <input
                    type="text"
                    placeholder="제목"
                    className="txt large block"
                    {...register('title', {
                      validate: {
                        required: value => value !== '' || '필수 항목입니다.',
                      },
                    })}
                  />
                </label>
                {errors.title && (
                  <p className="input-error">
                    <i className="fas fa-times-circle"></i>{' '}
                    {errors.title.message}
                  </p>
                )}
              </div>
              <div className="form-row">
                <label>
                  <span className="form-head">설명</span>
                  <input
                    type="text"
                    placeholder="설명"
                    className="txt large block"
                    {...register('description', {
                      validate: {
                        required: value => value !== '' || '필수 항목입니다.',
                      },
                    })}
                  />
                </label>
                {errors.description && (
                  <p className="input-error">
                    <i className="fas fa-times-circle"></i>{' '}
                    {errors.description.message}
                  </p>
                )}
              </div>
              <div className="form-row">
                <label>
                  <span className="form-head">내용</span>
                  <textarea
                    cols={60}
                    rows={10}
                    placeholder="내용"
                    className="txt large block"
                    {...register('body', {
                      validate: {
                        required: value => value !== '' || '필수 항목입니다.',
                      },
                    })}
                  ></textarea>
                </label>
                {errors.body && (
                  <p className="input-error">
                    <i className="fas fa-times-circle"></i>{' '}
                    {errors.body.message}
                  </p>
                )}
              </div>
              <div className="form-row">
                <label>
                  <span className="form-head">태그</span>
                  <input
                    type="text"
                    placeholder="태그"
                    className="txt large block"
                    {...register('tagList')}
                  />
                </label>
              </div>
              <div className="form-action">
                {/* TODO: 등록시 글 상세로 이동 */}
                <button type="submit" className="btn large primary">
                  등록
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
        </div>
      </div>
    </>
  )
}

export default Form
