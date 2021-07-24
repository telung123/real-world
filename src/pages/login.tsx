import Layout from '@/components/layout/Layout'
import React, { FC } from 'react'

const Login: FC = () => {
  return (
    <Layout>
      <div className="container page-login">
        <div className="common-form">
          <h2 className="form-title">로그인</h2>
          <form>
            <fieldset>
              <legend>로그인</legend>
              <div className="form-row">
                <label>
                  <span className="form-head">이메일</span>
                  <input
                    type="email"
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
                  로그인
                </button>
              </div>
            </fieldset>
          </form>
          <div className="info-box">
            처음 오셨나요? <a href="/join">회원가입</a>을 해주세요.
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login
