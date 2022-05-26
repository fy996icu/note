/**
 * 封装 antd BackTop 为内置组件
 */

import { VerticalAlignTopOutlined } from '@ant-design/icons';
import { BackTop } from 'antd';
import React from 'react';
import styled from 'styled-components';

const UpBtn = styled.div`
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 40px;
  color: #333;
  background-color: #fff;
  transition: color 0.3s;
  text-align: center;
  font-size: 22px;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  &:hover {
    color: #4569d4;
  }
`;
const BackTopRewrite: React.FC<{}> = () => {
  return (
    <>
      <BackTop style={{ right: '16px' }}>
        <UpBtn>
          <VerticalAlignTopOutlined />
        </UpBtn>
      </BackTop>
    </>
  );
};

export default BackTopRewrite;
