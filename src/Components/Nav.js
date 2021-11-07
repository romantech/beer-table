/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header } = Layout;
const menuList = {
  HOME: '/home',
  BEERs: '/beerlist',
  CART: '/cart',
};

const Nav = ({ history }) => {
  const { pathname } = history.location;

  return (
    <Header>
      <Menu theme="dark" mode="horizontal" selectedKeys={pathname}>
        {Object.entries(menuList).map(([menuName, path]) => (
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
