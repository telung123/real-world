export interface Users {
  email: string
  token: string
  username: string
  bio: string
  image: string | null
}

export interface Profile {
  username: string
  bio: string
  image: string
  following: boolean
}

export interface Author {
  username: string
  bio: string
  image: string
  following: boolean
}

export interface Article {
  slug: string
  title: string
  description: string
  body: string
  tagList: string[]
  createdAt: string
  updatedAt: string
  favorited: boolean
  favoritesCount: number
  author: Author
}

export interface SingleArticle extends Article {}

export interface MultipleArticles {
  articles: Article[]
  articlesCount: number
}

export interface Comment {
  id: number
  createdAt: string
  updatedAt: string
  body: string
  author: Author
}

export interface MultipleComments {
  comments: Comment[]
}

export type Tags = string[]
