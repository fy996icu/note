import { Spin } from 'antd';
import React from 'react';
import styled from 'styled-components';
const LoadWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 100px 0;
`;

const Loading: React.FC = () => {
  return (
    <LoadWrap>
      <Spin size="large" />
    </LoadWrap>
  );
};

export default Loading;
