import { defineConfig } from 'vite'

// JSX를 React 17+ 자동 런타임으로 변환합니다.
// (이 설정이 없으면 각 .jsx 파일마다 `import React from 'react'`가 필요합니다.)
export default defineConfig({
  esbuild: {
    jsx: 'automatic',
  },
})
