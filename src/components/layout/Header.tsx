import { useRequestMap } from '@/api'
import { token, hasToken } from '@/api/auth'
import Loading from '@/components/Loading'
import React, { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header: FC = () => {
  const {
    data: userData,
    isValidating,
    mutate,
  } = useRequestMap.CurrentUser(hasToken())

  const onLogout = (e: React.MouseEvent) => {
    e.preventDefault()
    token(null)
    void mutate()
  }

  useEffect(() => {
    console.log('userData', userData)
  }, [userData])

  return (
    <>
      {/* 메뉴 열림: .is-opened */}
      <header className="common-header">
        <div className="wrap">
          <h1 className="logo">
            <Link to="/">
              <i className="fas fa-globe"></i> World
            </Link>
          </h1>
          <div className="btn-wrap">
            <button type="button" className="btn-menu">
              <i className="fas fa-bars"></i> <span>메뉴</span>
            </button>
          </div>

          {isValidating && !userData && <Loading fullCover />}

          {/* 로그인 후 상태 */}
          {userData && (
            <ul className="nav">
              <li>
                <Link to="/" className="home">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/article/form">
                  <i className="far fa-edit"></i> 글등록
                </Link>
              </li>
              <li>
                <Link to={`/@${userData.user.username}`}>
                  <i className="far fa-user"></i> 프로필
                </Link>
              </li>
              <li>
                <a href="#" onClick={onLogout}>
                  로그아웃
                </a>
              </li>
            </ul>
          )}

          {/* 로그인 전 상태 */}
          {!userData && (
            <ul className="nav">
              <li>
                <Link className="home" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/login">로그인</Link>
              </li>
              <li>
                <Link to="/join">회원가입</Link>
              </li>
            </ul>
          )}
        </div>
      </header>
      <div className="dim"></div>
    </>
  )
}

export default Header
