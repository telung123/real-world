import Layout from '@/components/Layout'
import React, { ReactElement } from 'react'

const Join = (): ReactElement => {
  return (
    <Layout>
      <div className="container page-join">
        <div className="common-form">
          <h2 className="form-title">회원가입</h2>
          <form>
            <fieldset>
              <div className="form-row">
                <label>
                  <span className="form-head">사용자 이름</span>
                  <input
                    type="text"
                    name="username"
                    placeholder="사용자 이름"
                    className="txt large block"
                    value=""
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  <span className="form-head">이메일</span>
                  <input
                    type="text"
                    name="email"
                    placeholder="이메일"
                    className="txt large block"
                    value=""
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  <span className="form-head">비밀번호</span>
                  <input
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                    className="txt large block"
                    value=""
                  />
                </label>
              </div>
              <div className="form-action">
                <button type="submit" className="btn large primary">
                  회원가입
                </button>
                <button type="button" className="btn large">
                  취소
                </button>
              </div>
            </fieldset>
          </form>
          <div className="info-box">
            이미 계정이 있으신가요? <a href="/login">로그인</a>을 해주세요.
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Join
