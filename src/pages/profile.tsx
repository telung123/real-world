import { useRequestMap } from '@/api'
import { hasToken } from '@/api/auth'
import { FC, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'

const Profile: FC = () => {
  const history = useHistory()
  const { username } = useParams<{ username: string }>()

  console.log(username)

  const { data: { user: loginUserData } = {}, isValidating } =
    useRequestMap.CurrentUser(hasToken())

  const { data: { profile: profileData } = {} } = useRequestMap.Profile({
    username,
  })

  useEffect(() => {
    console.log(profileData)
  }, [profileData])

  useEffect(() => {
    console.log(loginUserData)
  }, [loginUserData])

  return (
    <>
      {profileData && (
        <div className="page-profile">
          <div className="profile-info">
            <Link to={`/@${profileData.username}`}>
              <div className="img">
                <img src={profileData.image ?? ''} alt="" />
              </div>
            </Link>
            <h2 className="username">
              <Link to={`/@${profileData.username}`}>
                {profileData.username}
              </Link>
            </h2>
            <p className="bio">{profileData.bio}</p>

            <div className="action">
              {loginUserData?.username !== profileData.username &&
                !isValidating && (
                  <>
                    <button type="button" className="btn light">
                      Follow {profileData.username}
                    </button>
                    <button type="button" className="btn light">
                      Unfollow {profileData.username}
                    </button>
                  </>
                )}

              {loginUserData?.username === profileData.username &&
                !isValidating && (
                  <button
                    type="button"
                    className="btn light"
                    onClick={() => history.push('/profile/form')}
                  >
                    프로필 수정
                  </button>
                )}
            </div>
          </div>

          <div className="container">
            <ul className="nav-tab">
              <li className="selected">
                <Link to={`/@${profileData.username}`}>등록 한 글</Link>
              </li>
              <li className="">
                <Link to={`/@${profileData.username}/favorites`}>
                  좋아하는 글
                </Link>
              </li>
            </ul>

            <p className="article-list-total">1 / 3</p>
            <ul className="article-list">
              <li className="article-item">
                <p className="title">
                  <a href="/article/foobar">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </a>
                </p>
                <p className="desc">
                  Accusamus aspernatur placeat rem reprehenderit eum ab
                  laudantium asperiores est officia ducimus quasi ipsam deserunt
                  cum velit esse, voluptatem doloremque maiores vero.
                </p>
                <div className="info">
                  <div className="author-info">
                    <a className="link" href={`/@${profileData.username}`}>
                      <div className="img">
                        <img src="{{base}}/img/profile-dummy.jpg" alt="" />
                      </div>
                      <p className="name">dohoons</p>
                    </a>
                    <p className="date">Sun Dec 02 2018</p>
                  </div>
                  <ul className="tag-list small">
                    <li>
                      <a className="" href="/tag/test">
                        test
                      </a>
                    </li>
                  </ul>
                </div>
                <button type="button" className="btn-like">
                  <i className="fas fa-heart"></i>
                  <span className="txt">좋아요</span>
                  <span className="count">1</span>
                </button>
              </li>
              <li className="article-item">
                <p className="title">
                  <a href="/article/foobar">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </a>
                </p>
                <p className="desc">
                  Minima iusto veritatis qui? Modi molestiae, sed deleniti
                  inventore alias quia obcaecati dolores, tempore esse ex dicta
                  itaque laudantium saepe iure laboriosam!
                </p>
                <div className="info">
                  <div className="author-info">
                    <a className="link" href="/@dohoons">
                      <div className="img">
                        <img
                          src="https://avatars1.githubusercontent.com/u/5266928?s=460&v=4"
                          alt=""
                        />
                      </div>
                      <p className="name">dohoons</p>
                    </a>
                    <p className="date">Sun Dec 02 2018</p>
                  </div>
                  <ul className="tag-list small">
                    <li>
                      <a className="" href="/tag/green">
                        green
                      </a>
                    </li>
                  </ul>
                </div>
                <button type="button" className="btn-like favorited">
                  <i className="fas fa-heart"></i>
                  <span className="txt">좋아요</span>
                  <span className="count">2</span>
                </button>
              </li>
              <li className="article-item">
                <p className="title">
                  <a href="/article/foobar">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </a>
                </p>
                <p className="desc">
                  Omnis fugiat exercitationem ea magnam quae harum modi, nemo
                  delectus recusandae dicta rem fugit maiores iste voluptas
                  incidunt assumenda ad possimus reprehenderit.
                </p>
                <div className="info">
                  <div className="author-info">
                    <a className="link" href="/@dohoons">
                      <div className="img">
                        <img
                          src="https://avatars1.githubusercontent.com/u/5266928?s=460&v=4"
                          alt=""
                        />
                      </div>
                      <p className="name">dohoons</p>
                    </a>
                    <p className="date">Sun Dec 02 2018</p>
                  </div>
                  <ul className="tag-list small">
                    <li>
                      <a className="" href="/tag/apple">
                        apple
                      </a>
                    </li>
                    <li>
                      <a className="" href="/tag/dragons">
                        dragons
                      </a>
                    </li>
                  </ul>
                </div>
                <button type="button" className="btn-like">
                  <i className="fas fa-heart"></i>
                  <span className="txt">좋아요</span>
                  <span className="count">1</span>
                </button>
              </li>
            </ul>

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
        </div>
      )}
    </>
  )
}

export default Profile
