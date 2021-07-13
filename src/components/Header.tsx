import React, { FC } from 'react'

const Header: FC = () => {
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
          {/* 로그인하지 않은 상태 */}
          {/* 
            <ul className="nav">
              <li><a className="home" href="/">Home</a></li>
              <li><a href="/login">로그인</a></li>
              <li><a href="/join">회원가입</a></li>
            </ul>
            */}
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
        </div>
      </header>
      <div className="dim"></div>
    </>
  )
}

export default Header
