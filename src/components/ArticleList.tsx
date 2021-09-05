import { useRequestMap } from '@/api'
import { Article } from '@/api/responseTypes'
import Loading from '@/components/Loading'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const ArticleList: FC = () => {
  const { data, isLoading } = useRequestMap.ArticlesList()

  const onFavorite = async (slug: Pick<Article, 'slug'>) => {
    await useRequestMap
      .FavoriteArticle(slug)
      .then(resolve => {
        // eslint-disable-next-line no-debugger
        debugger
      })
      .catch(error => {
        console.log('Error!!', error)
      })
  }

  return (
    <>
      {isLoading && <Loading />}
      <ul className="article-list">
        {data?.articles?.map((article, i) => {
          const {
            slug,
            title,
            description,
            createdAt,
            author,
            tagList,
            favoritesCount,
          } = article

          return (
            <li className="article-item" key={i}>
              <p className="title">
                <Link to={`/article/${slug}`}>{title}</Link>
              </p>
              <p className="desc">{description}</p>
              <div className="info">
                <div className="author-info">
                  <Link className="link" to={`/@${author.username}`}>
                    <div className="img">
                      <img src={author.image} alt="" />
                    </div>
                    <p className="name">{author.username}</p>
                  </Link>
                  <p className="date">{new Date(createdAt).toDateString()}</p>
                </div>

                {tagList.length > 0 && (
                  <ul className="tag-list small">
                    {tagList.map((tag, i) => {
                      return (
                        <li key={i}>
                          <a href="/tag/test">{tag}</a>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
              <button
                type="button"
                className="btn-like"
                onClick={() => void onFavorite({ slug })}
              >
                <i className="fas fa-heart"></i>
                <span className="txt">좋아요</span>
                <span className="count">{favoritesCount}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ArticleList
