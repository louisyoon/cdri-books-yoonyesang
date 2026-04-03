# CDRI-BOOKS\_윤이상

## react

react version: `19.2.4`

code : `TypeScript`, `React`, `Vite`, `TailwindV4`

```sh
node_modules 설치
npm i

라이브러리 리스트
npm ls

라이브러리 추가 / 제거
npm i [library]
npm rm [library]

실행
npm run dev
```

**API :**

```sh
.env안에서

VITE_{{키네임}} = 'API 주소'
불러올때 import.meta.env.VITE_{{키네임}}
```

**구조:**

- `public` - 파비콘 설정
- `@/assets` - 이미지
- `@/components`- 콤포먼트들
- `@/function` - 함수
- `@/api` - api 호출 함수
- `@/hook` - 커스텀 훅
- `@/types` - 타입
