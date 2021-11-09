/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { sitemap } from '../Constants';

const { Header } = Layout;

// withRouter를 이용해 라우터 호출이 아닌 컴포넌트도 history 객체에 접근하도록 설정
const Nav = ({ history }) => {
  const { pathname } = history.location;

  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={pathname}
        style={{ fontSize: '1rem' }}
      >
        {sitemap.map(({ name, path }) => (
          <Menu.Item
            key={path}
            onClick={() => {
              // if (name === 'BEERs') window.location.assign(path);
              history.push(path);
            }}
          >
            {name}
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};

export default withRouter(Nav);
