# 클래스팅 FE\_과제

## Stacks

이 프로젝트는 아래와 같은 스택들로 구성되었습니다:

- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)
- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)

  VS_CODE를 사용 시 [안내](https://mantine.dev/getting-started/#set-up-vs-code) 에 따라 [PostCSS Intellisense and Highlighting Extension](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-postcss)을 설치해주세요

## npm scripts

## Build and dev scripts

- `dev` – 개발 서버 실행
- `build` – 빌드
- `preview` – locally preview production build

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `vitest` – runs vitest tests
- `vitest:watch` – starts vitest watch
- `test` – runs `vitest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – 스토리북 실행
- `storybook:build` – 프로덕션 스토리북 번들 빌드 `storybook-static`
- `prettier:write` – 프리티어 실행
