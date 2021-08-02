# real-world

## 도입 스택

마크업은 기존 템플릿을 재사용한다. (개발에만 집중)

- axios
- swr
- React
- @reduxjs/toolkit (+ immer)
- react-error-boundary
- react-hook-form
- typescript
- eslint
- prettier
- (Optional) lodash,
- (Optional) react-app-rewired
- (Optional) husky(+lint-staged)

## 화면 목록

- 로그인
- 회원가입
- 내 담벼락
- 전체 게시글 목록
- 게시글 등록/수정
- 게시글 Tag 필터 목록
- 프로필

## 구현 순서

1. 프로젝트 초기세팅 (dep설정/라우팅 윤곽)
2. 전체 글목록
3. 글 상세
4. 로그인 / 회원가입
5. 게시글 쓰기 (이후 흐름 상세)
6. 게시글 수정(내것만 가능)
7. 게시글 삭제
8. 게시글 목록 - 태그 필터 view
9. 상세 댓글 목록
10. 상세 댓글 등록
11. 상세 댓글 삭제
12. 프로필 > 등록한글/좋아하는글
13. 남의 프로필 : 팔로우 가능하게
14. 프로필 수정 후순위
15. 스켈레톤 UI (Optional)

## 고려해야 할 사항

- 어떻게해야 잘나올까? 문제가 안생길까? 에 대한 스스로의 고민이 많이 필요
- 어쨋든 결론적으로 어색한 사용성에 대해 인지하고 잘나와야 함.
- URL로 바로 접근할 수 있다. (Authorized & Authenticate)
- SPA에서의 오류처리 (벽돌) -> 어떻게 처리할것인가?

# Note

- 08.02
  - token 발급 이후 사용자 로그인 상태에 따라 Header, 탭구성등이 변경된다.
  - 인증이 유효한경우를 발급받은 token으로 매번 확인해야할까?
  - 토큰이 axios default header로 묻어가기 때문에, 상관없다.
  - 헤더에 표기되거나 공통영역에 상시 반영되어야하는것은? -> 고민.
