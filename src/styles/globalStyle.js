import { createGlobalStyle } from 'styled-components/macro';
import { normalize } from 'styled-normalize';
import NotoSansKRRegular from '../Assets/fonts/notoSans/NotoSansKR-Regular.woff2';
import NotoSansKRBold from '../Assets/fonts/notoSans/NotoSansKR-Bold.woff2';

const GlobalStyle = createGlobalStyle`
  ${normalize}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans KR', 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  /* 시스템에 설치된 글꼴을 우선 참조 */
  src: local('Noto Sans KR Regular'), url(${NotoSansKRRegular}) format('woff2');
  /* 한글 */
  unicode-range: 'U+0020-007E';
}

@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: local('Noto Sans KR Bold'), url(${NotoSansKRBold}) format('woff2');
  unicode-range: 'U+0020-007E';
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;

export default GlobalStyle;
