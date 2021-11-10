/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Badge } from 'antd';
import { sitemap } from '../Constants';

const { Header } = Layout;
const badgeStyle = {
  backgroundColor: 'gray',
  color: 'white',
  boxShadow: 'none',
};

// withRouter를 이용해 라우터 호출이 아닌 컴포넌트도 history 객체에 접근하도록 설정
const Nav = ({ history }) => {
  const { favorites } = useSelector(state => state.favoriteListReducer);
  const { pathname } = history.location;
  const [badgeCount, setBadgeCount] = useState(favorites?.length);

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
              history.push(path);
              if (path === '/favorite') {
                setBadgeCount(0);
              }
            }}
          >
            {name}
            {path === '/favorite' && path !== pathname && (
              <Badge count={badgeCount} style={badgeStyle} offset={[0, -25]} />
            )}
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};

export default withRouter(Nav);
