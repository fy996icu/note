/**
 * 封装 antd Typography 为内置组件
 * type: 文本颜色
 * children：文本内容
 */
import { Typography } from 'antd';
import React from 'react';

const { Text } = Typography;

interface Props {
  type?: 'success' | 'warning' | 'danger';
  children: React.ReactNode;
}

const TextRewrite: React.FC<Props> = (props) => {
  return (
    <>
      <Text type={props.type || 'warning'}>{props.children}</Text>
    </>
  );
};
export default TextRewrite;
