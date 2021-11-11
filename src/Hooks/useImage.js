import React, { useState } from 'react';
import { Spin } from 'antd';
import styled from 'styled-components/macro';

const useImage = function (src, spinSize = 'default') {
  const [isLoading, setIsLoading] = useState(true);
  const Image = function () {
    return (
      <>
        {isLoading && <Spin size={spinSize} />}
        <StyledImage
          isLoading={isLoading}
          src={src}
          alt="beer_image"
          onLoad={() => setIsLoading(false)}
        />
      </>
    );
  };

  return [Image];
};

const StyledImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
  display: ${({ isLoading }) => isLoading && 'none'};
`;

export default useImage;
