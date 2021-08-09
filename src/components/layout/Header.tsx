import { useRequestMap } from '@/api'
import Loading from '@/components/Loading'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Header: FC = () => {
  const { data: userData, isLoading } = useRequestMap.CurrentUser()

  return (
    <>
      {/* 메뉴 열림: .is-opened */}
      <header className="common-header">
        <div className="wrap">
          <h1 className="logo">
            <a href="/">
              <i className="fas fa-globe"></i> World
            </a>
          </h1>
          <div className="btn-wrap">
            <button type="button" className="btn-menu">
              <i className="fas fa-bars"></i> <span>메뉴</span>
            </button>
          </div>

          {isLoading && !userData && <Loading fullCover />}

          {/* 로그인 후 상태 */}
          {userData && (
            <ul className="nav">
              <li>
                <a className="home" href="/">
                  Home
                </a>
              </li>
              <li>
                <a href="/form">
                  <i className="far fa-edit"></i> 글등록
                </a>
              </li>
              <li>
                <a href="/@dohoons">
                  <i className="far fa-user"></i> 프로필
                </a>
              </li>
              <li>
                <a href="#">로그아웃</a>
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
