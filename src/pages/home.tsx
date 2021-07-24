import ArticleList from '@/components/ArticleList'
import Layout from '@/components/layout/Layout'
import React, { FC } from 'react'

const Home: FC = () => {
  return (
    <Layout>
      <div className="page-main">
        <div className="top-visual init">
          <p className="copy">
            <span className="hello">Hello</span> World
          </p>
        </div>
        <div className="container">
          <div className="body">
            <ul className="nav-tab">
              <li className="selected">
                <a href="/feed">내 담벼락</a>
              </li>
              <li className="">
                <a href="/articles">전체 글목록</a>
              </li>
            </ul>

            <p className="article-list-total">1 / 3</p>

            <ArticleList />

            <div className="pagination">
              <ul>
                <li className="">
                  <a className="" href="/feed/1" aria-label="Go to first page">
                    <span className="fas fa-angle-double-left">
                      <span className="txt">처음</span>
                    </span>
                  </a>
                </li>
                <li className="">
                  <a
                    className=""
                    href="/feed/0"
                    aria-label="Go to previous page"
                  >
                    <span className="fas fa-angle-left">
                      <span className="txt">이전</span>
                    </span>
                  </a>
                </li>

                <li className="active">
                  <a
                    className="active"
                    href="/feed/1"
                    aria-label="Go to page number 1"
                  >
                    1
                  </a>
                </li>
                <li className="">
                  <a
                    className=""
                    href="/feed/2"
                    aria-label="Go to page number 2"
                  >
                    2
                  </a>
                </li>
                <li className="">
                  <a
                    className=""
                    href="/feed/3"
                    aria-label="Go to page number 3"
                  >
                    3
                  </a>
                </li>

                <li className="">
                  <a className="" href="/feed/2" aria-label="Go to next page">
                    <span className="fas fa-angle-right">
                      <span className="txt">다음</span>
                    </span>
                  </a>
                </li>
                <li className="">
                  <a className="" href="/feed/3" aria-label="Go to last page">
                    <span className="fas fa-angle-double-right">
                      <span className="txt">마지막</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="side">
            <div className="tag-area">
              <h2 className="title">인기 태그</h2>
              <ul className="tag-list">
                <li>
                  <a className="" href="/tag/apple">
                    apple
                  </a>
                </li>
                <li>
                  <a className="" href="/tag/test">
                    test
                  </a>
                </li>
                <li>
                  <a className="" href="/tag/dragons">
                    dragons
                  </a>
                </li>
                <li>
                  <a className="" href="/tag/green">
                    green
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
