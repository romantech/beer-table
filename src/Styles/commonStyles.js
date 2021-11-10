import { css } from 'styled-components/macro';

export const ContainerStyle = css`
  background-image: url(${({ theme }) => theme.$pattern});
  height: calc(100vh - 64px);
  display: grid;
  place-content: center;
  overflow: auto;
`;

export const UnderlineStyle = css`
  :after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 8px;
    left: 50%;
    position: absolute;
    background: ${({ theme }) => theme.$hover};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  :hover:after {
    width: 100%;
    left: 0;
  }
`;

export const ScrollStyle = css`
  /* width */
  ::-webkit-scrollbar {
    width: 13px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: none;
    margin: 1px 8px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #ffffff2d;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #ffffff49;
  }
`;
