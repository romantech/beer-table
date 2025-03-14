/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { sitemap } from '../Constants';

const { Header } = Layout;

// withRouter를 이용해 라우터 호출이 아닌 컴포넌트도 history 객체에 접근하도록 설정
const Nav = function ({ history }) {
  const { pathname } = history.location;

  const items = sitemap.map(({ name, path }) => ({
    key: path,
    label: name,
    onClick: () => history.push(path),
  }));

  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={pathname}
        style={{ fontSize: '1rem' }}
        items={items}
      />
    </Header>
  );
};

export default withRouter(Nav);
