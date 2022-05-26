/**
 * 封装 antd Alert 为内置组件
 * msg: 提示信息
 * type: 提示类型
 * children: 详细文本
 */

import { Alert } from 'antd';
import React from 'react';

interface Props {
  msg?: string;
  type?: 'success' | 'info' | 'warning' | 'error';
  children?: string;
}

const AlertText: React.FC<Props> = (props) => {
  return (
    <>
      <Alert
        message={props.msg || '提示'}
        description={props.children ? props.children : null}
        showIcon
        type={props.type ? props.type : 'info'}
      ></Alert>
    </>
  );
};
export default AlertText;
