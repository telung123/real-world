import useRequest from '@/hooks/useRequest'
import axios from 'axios'
import {
  Article,
  MultipleArticles,
  Profile,
  User,
  Comment,
  MultipleComments,
  Tags,
} from './responseTypes'
import { token } from '@/api/auth'

export const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

export const useRequestMap = {
  /**
   * @description 사용자 인증 (로그인)
   * @Auth N/A
   */
  UserLogin: async (data: { email: string; password: string }) => {
    return await http.request<User>({
      url: '/users/login',
      method: 'post',
      data: { ...data },
    })
  },

  /**
   * @description 사용자 신규등록(가입)
   * @Auth N/A
   */
  UserRegister: async (data: {
    username: string
    email: string
    password: string
  }) => {
    return await http.request<User>({
      url: '/users',
      method: 'post',
      data: { ...data },
    })
  },

  /**
   * @description 로그인한 유저 정보
   * @Auth Required
   */
  CurrentUser: () => {
    return useRequest<User>({
      url: '/user',
      method: 'get',
    })
  },

  /**
   * @description 로그인한 유저 정보 Update
   * @Auth Required
   */
  UpdateUser: (
    data: Pick<User, 'email' | 'username' | 'bio' | 'image'> & {
      password: string
    },
  ) => {
    return useRequest<User>({
      url: '/user',
      method: 'put',
      data: { ...data },
    })
  },

  /**
   * @description 유저 프로필 정보
   * @Auth Optional
   */
  Profile: ({ username }: { username: string }) => {
    return useRequest<Profile>({
      url: `/profiles/${username}`,
      method: 'get',
    })
  },

  /**
   * @description 팔로잉
   * @Auth 필수
   * @queryParams username
   */
  FollowUser: async ({ username }: { username: string }) => {
    return await http.request<Profile>({
      url: `/profiles/${username}/follow`,
      method: 'post',
    })
  },

  /**
   * @description 언팔로잉
   * @Auth Required
   * @queryParams username
   */
  UnFollowUser: ({ username }: { username: string }) => {
    return useRequest({
      url: `/profiles/${username}/follow`,
      method: 'delete',
    })
  },

  /**
   * @description 본문 목록, sort) 작성 최신 순 기준
   * @Auth Optional
   * @queryParams (필터에 사용)tag, author, favorited, limit, offset
   */
  ArticlesList: (data?: {
    tag?: string
    author?: string
    favorited?: string
  }) => {
    return useRequest<MultipleArticles>({
      url: '/articles',
      method: 'get',
      params: { ...data },
    })
  },

  /**
   * @description Feed 본문 목록(팔로잉 유저 글), sort) 작성 최신 순 기준
   * @Auth Required
   * @queryParams (페이징에 사용)limit, offset
   */
  FeedArticlesList: (data: { limit?: number; offset?: number }) => {
    return useRequest<MultipleArticles>({
      url: '/articles/feed',
      method: 'get',
      params: { ...data },
    })
  },

  /**
   * @description 본문 정보(단일)
   * @Auth N/A
   */
  Article: ({ slug }: Pick<Article, 'slug'>) => {
    return useRequest<Article>({
      url: `/articles/${slug}`,
      method: 'get',
    })
  },

  /**
   * @description 본문 생성
   * @Auth Required
   */
  CreateArticle: async (
    data: Pick<Article, 'title' | 'description' | 'body'> &
      Pick<Partial<Article>, 'tagList'>,
  ) => {
    return await http.request<Article>({
      url: `/articles`,
      method: 'post',
      data: { ...data },
    })
  },

  /**
   * @description 본문 업데이트 (제목이 변경되면, slug도 변경됨)
   * @Auth Required
   */
  UpdateArticle: async (
    data: Pick<Partial<Article>, 'title' | 'description' | 'body'>,
  ) => {
    return await http.request<Article>({
      url: `/articles`,
      method: 'post',
      data: { ...data },
    })
  },

  /**
   * @description 본문 삭제
   * @Auth Required
   */
  DeleteArticle: ({ slug }: Pick<Article, 'slug'>) => {
    return useRequest({
      url: `/articles/${slug}`,
      method: 'delete',
    })
  },

  /**
   * @description 댓글 목록 조회
   * @Auth Optional
   */
  Comments: ({ slug }: Pick<Article, 'slug'>) => {
    return useRequest<MultipleComments>({
      url: `/articles/${slug}/comments`,
      method: 'get',
    })
  },

  /**
   * @description 댓글 추가
   * @Auth Required
   */
  AddComments: async ({
    slug,
    body,
  }: Pick<Article, 'slug'> & Pick<Comment, 'body'>) => {
    return await http.request<Comment>({
      url: `/articles/${body}/comments`,
      method: 'post',
    })
  },

  /**
   * @description 댓글 삭제
   * @Auth Required
   */
  DeleteComments: ({
    slug,
    id,
  }: Pick<Article, 'slug'> & Pick<Comment, 'id'>) => {
    return useRequest({
      url: `/articles/${slug}/comments/${id}`,
      method: 'delete',
    })
  },

  /**
   * @description 본문 좋아요
   * @Auth Required
   */
  FavoriteArticle: async ({ slug }: Pick<Article, 'slug'>) => {
    return await http.request<Article>({
      url: `/articles/${slug}/favorite`,
      method: 'post',
    })
  },

  /**
   * @description 본문 좋아요 취소
   * @Auth Required
   */
  UnFavoriteArticle: ({ slug }: Pick<Article, 'slug'>) => {
    return useRequest<Article>({
      url: `/articles/${slug}/favorite`,
      method: 'delete',
    })
  },

  /**
   * @description 태그목록
   * @Auth N/A
   */
  Tags: () => {
    return useRequest<Tags>({
      url: '/tags',
      method: 'get',
    })
  },
} as const
