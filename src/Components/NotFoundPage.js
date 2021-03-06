/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { Button, Result } from 'antd';
import { ContainerStyle } from '../Styles/commonStyles';

const NotFoundPage = function ({ history }) {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => setSeconds(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (seconds === 0) history.push('/home');
  }, [history, seconds]);

  return (
    <Container>
      <Result
        status="404"
        title="페이지를 찾을 수 없어요!"
        subTitle={`${seconds}초 뒤 홈 화면으로 이동합니다`}
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
    font-weight: 500;
  }
`;

export default NotFoundPage;
