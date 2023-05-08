import { Button, Input, message, Space, Tag } from 'antd';
import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

const RegWrap = styled.div`
  padding: 20px;
  border: 1px solid #ebedf1;
`;
const ResultDiv = styled.span`
  color: ${(props) => props.color};
`;

interface Iprops {
  reg: string;
}

const CheckReg: React.FC<Iprops> = (props) => {
  const [textValue, setTextValue] = useState('');
  const [result, setResult] = useState(false);
  const [resultStatus, setResultStatus] = useState(false);
  console.log(props.reg);
  const reg = new RegExp(props.reg);
  const testReg = () => {
    if (!textValue) {
      message.warn('请输入测试值');
      return;
    }
    setResultStatus(true);
    reg.test(textValue) ? setResult(true) : setResult(false);
  };

  const changeText = (event: ChangeEvent) => {
    const value = (event.target as HTMLInputElement).value;
    setResultStatus(false);
    setTextValue(value);
  };
  return (
    <>
      <RegWrap>
        <h4>
          正则表达式：<Tag>{props.reg}</Tag>
        </h4>
        <Space>
          <Input
            allowClear
            value={textValue}
            placeholder="请输入"
            style={{ width: '300px' }}
            onChange={changeText}
          />
          <Button type="primary" onClick={testReg}>
            测试
          </Button>
        </Space>
        <div style={{ marginTop: '0.5em' }}>
          <span>结果：</span>
          <ResultDiv color={result ? '#36a046' : '#f50'}>
            {resultStatus && <span>{result ? 'True' : 'False'}</span>}
          </ResultDiv>
        </div>
      </RegWrap>
    </>
  );
};
export default CheckReg;
