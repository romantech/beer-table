import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header } = Layout;
const menuList = {
  HOME: '/home',
  BEERs: '/beerlist',
  CART: '/cart',
};
const { pathname } = window.location;

const Nav = () => {
  const history = useHistory();
  const [currentPath, setCurrentPath] = useState(
    pathname === '/' ? '/home' : pathname,
  );

  return (
    <Header>
      <Menu theme="dark" mode="horizontal" selectedKeys={currentPath}>
        {Object.entries(menuList).map(([menuName, path]) => (
          <Menu.Item
            key={path}
            onClick={() => {
              history.push(path);
              setCurrentPath(path);
            }}
          >
            {menuName}
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};

export default Nav;
