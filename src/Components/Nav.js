/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header } = Layout;
const sitemap = {
  HOME: '/home',
  BEERs: '/beerlist',
  CART: '/cart',
};

// withRouter를 이용해 라우터 호출이 아닌 컴포넌트도 history 객체에 접근하도록 설정
const Nav = ({ history }) => {
  const { pathname } = history.location;

  return (
    <Header>
      <Menu theme="dark" mode="horizontal" selectedKeys={pathname}>
        {Object.entries(sitemap).map(([menuName, path]) => (
          <Menu.Item
            key={path}
            onClick={() => {
              history.push(path);
            }}
          >
            {menuName}
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};

export default withRouter(Nav);
