/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components/macro';
import { Result, Button } from 'antd';
import { ContainerStyle } from '../Styles/commonStyles';

const NotFoundPage = function ({ history }) {
  return (
    <Container>
      <Result
        status="404"
        title="페이지를 찾을 수 없어요!"
        extra={
          <Button type="primary" onClick={() => history.push('/home')}>
            Back Home
          </Button>
        }
      />
    </Container>
  );
};

const Container = styled.section`
  ${ContainerStyle}

  .ant-result-title, .ant-result-subtitle {
    color: white;
    font-weight: 500px;
  }
`;

export default NotFoundPage;
