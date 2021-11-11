/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Result, Button } from 'antd';
import { ContainerStyle } from '../Styles/commonStyles';

const NotFoundPage = function ({ history }) {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 1) history.push('/home');
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

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
    font-weight: 500px;
  }
`;

export default NotFoundPage;
