/**
 * 封装 antd Tag 为内置组件
 * children：Tag文本
 * color：Tag颜色
 */
import { Tag } from 'antd';
import React from 'react';

interface Props {
  children: React.ReactNode;
  color?: string;
}

const Tags: React.FC<Props> = (props) => {
  return (
    <>
      <Tag color={props.color ? props.color : 'red'}>{props.children}</Tag>
    </>
  );
};
export default Tags;
