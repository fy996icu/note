---
title: 数字操作
toc: menu
order: 1.1
---

<BackTop></BackTop>

# 数字操作

## 数字千分位分隔

```jsx
import React, { useState } from 'react';
import { Input } from 'antd';

const Demo = () => {
  const [state, setState] = useState();
  const [status, setStatus] = useState(false);

  // 转换为千分位分割函数
  const format = (number) => {
    //按小数点分成2部分
    let source = String(number).split('.');
    //只将整数部分进行都好分割
    source[0] = source[0].replace(new RegExp('(\\d)(?=(\\d{3})+$)', 'ig'), '$1,');
    //再将小数部分合并进来
    return source.join('.');
  };

  const onChange = (event) => {
    let value = event.target.value;
    if (!isNaN(Number(value))) {
      setStatus(false);
      setState(format(event.target.value));
    } else {
      setStatus(true);
    }
  };

  return (
    <>
      <h4>转换为千分位分割：{state}</h4>
      <Input placeholder="请输入数字" style={{ width: '320px' }} onChange={onChange} />
      {status && <span style={{ color: 'red', marginLeft: '10px' }}>请输入正确的数字</span>}
    </>
  );
};

export default Demo;
```

```js
/**
 * 转换为千分位分割函数
 * @param {Number|String} number 需要分割的数字
 * @returns 千分位分割完成的值
 */
const format = (number) => {
  let source = String(number).split('.');
  source[0] = source[0].replace(new RegExp('(\\d)(?=(\\d{3})+$)', 'ig'), '$1,');
  return source.join('.');
};
```

## 生成指定范围随机数

```jsx
import React, { useState } from 'react';
import { InputNumber, Space, Button } from 'antd';

const Demo = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1);
  const [value, setValue] = useState();
  // 生成指定范围随机数
  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <>
      <h4>
        [{min} - {max}]之间的随机数：{value}
      </h4>
      <Space>
        <InputNumber
          placeholder="最小值"
          min={0}
          max={max - 1}
          value={min}
          style={{ width: '120px' }}
          onChange={(value) => setMin(value)}
        />
        <InputNumber
          placeholder="最大值"
          min={1}
          value={max}
          style={{ width: '120px' }}
          onChange={(value) => setMax(value)}
        />
        <Button type="primary" onClick={() => setValue(randomNumber(min, max))}>
          生成随机数
        </Button>
      </Space>
    </>
  );
};

export default Demo;
```

```js
/**
 * 生成指定范围随机数
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 * @returns 生成的随机数
 */
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
```

## 数字转化为大写金额

```jsx
import React, { useState, useEffect, useRef } from 'react';
import { InputNumber } from 'antd';

const Demo = () => {
  const initValue = useRef(1000);
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(changeToChinese(initValue.current));
  }, []);

  // 数字转化为大写金额
  const changeToChinese = (money) => {
    //汉字的数字
    let cnNums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    //基本单位
    let cnIntRadice = ['', '拾', '佰', '仟'];
    //对应整数部分扩展单位
    let cnIntUnits = ['', '万', '亿', '兆'];
    //对应小数部分单位
    let cnDecUnits = ['角', '分', '毫', '厘'];
    //整数金额时后面跟的字符
    let cnInteger = '整';
    //整型完以后的单位
    let cnIntLast = '元';
    //最大处理的数字
    let maxNum = 999999999999999.9999;
    //金额整数部分
    let integerNum;
    //金额小数部分
    let decimalNum;
    //输出的中文金额字符串
    let chineseStr = '';
    //分离金额后用的数组，预定义
    let parts;
    if (money === '') {
      return '';
    }
    money = parseFloat(money);
    if (money >= maxNum) {
      //超出最大处理数字
      return '';
    }
    if (money === 0) {
      chineseStr = cnNums[0] + cnIntLast + cnInteger;
      return chineseStr;
    }
    //转换为字符串
    money = money.toString();
    if (money.indexOf('.') === -1) {
      integerNum = money;
      decimalNum = '';
    } else {
      parts = money.split('.');
      integerNum = parts[0];
      decimalNum = parts[1].substr(0, 4);
    }
    //获取整型部分转换
    if (parseInt(integerNum, 10) > 0) {
      let zeroCount = 0;
      let IntLen = integerNum.length;
      for (let i = 0; i < IntLen; i++) {
        let n = integerNum.substr(i, 1);
        let p = IntLen - i - 1;
        let q = p / 4;
        let m = p % 4;
        if (n === '0') {
          zeroCount++;
        } else {
          if (zeroCount > 0) {
            chineseStr += cnNums[0];
          }
          //归零
          zeroCount = 0;
          chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
        }
        if (m === 0 && zeroCount < 4) {
          chineseStr += cnIntUnits[q];
        }
      }
      chineseStr += cnIntLast;
    }
    //小数部分
    if (decimalNum !== '') {
      let decLen = decimalNum.length;
      for (let i = 0; i < decLen; i++) {
        let n = decimalNum.substr(i, 1);
        if (n !== '0') {
          chineseStr += cnNums[Number(n)] + cnDecUnits[i];
        }
      }
    }
    if (chineseStr === '') {
      chineseStr += cnNums[0] + cnIntLast + cnInteger;
    } else if (decimalNum === '') {
      chineseStr += cnInteger;
    }
    return chineseStr;
  };

  const onChange = (value) => {
    initValue.current = value;
    setValue(changeToChinese(value));
  };
  return (
    <>
      <h4>数字转化为大写金额：{value}</h4>
      <InputNumber
        placeholder="请输入金额"
        min={0}
        value={initValue.current}
        style={{ width: '320px' }}
        onChange={onChange}
      />
    </>
  );
};

export default Demo;
```

```js
/**
 * 数字转化为大写金额
 * @param {Number} money 数字金额
 * @returns 转换为大写的金额
 */
const changeToChinese = (money) => {
  //汉字的数字
  let cnNums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  //基本单位
  let cnIntRadice = ['', '拾', '佰', '仟'];
  //对应整数部分扩展单位
  let cnIntUnits = ['', '万', '亿', '兆'];
  //对应小数部分单位
  let cnDecUnits = ['角', '分', '毫', '厘'];
  //整数金额时后面跟的字符
  let cnInteger = '整';
  //整型完以后的单位
  let cnIntLast = '元';
  //最大处理的数字
  let maxNum = 999999999999999.9999;
  //金额整数部分
  let integerNum;
  //金额小数部分
  let decimalNum;
  //输出的中文金额字符串
  let chineseStr = '';
  //分离金额后用的数组，预定义
  let parts;
  if (money === '') {
    return '';
  }
  money = parseFloat(money);
  if (money >= maxNum) {
    //超出最大处理数字
    return '';
  }
  if (money === 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger;
    return chineseStr;
  }
  //转换为字符串
  money = money.toString();
  if (money.indexOf('.') === -1) {
    integerNum = money;
    decimalNum = '';
  } else {
    parts = money.split('.');
    integerNum = parts[0];
    decimalNum = parts[1].substr(0, 4);
  }
  //获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    let zeroCount = 0;
    let IntLen = integerNum.length;
    for (let i = 0; i < IntLen; i++) {
      let n = integerNum.substr(i, 1);
      let p = IntLen - i - 1;
      let q = p / 4;
      let m = p % 4;
      if (n === '0') {
        zeroCount++;
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0];
        }
        //归零
        zeroCount = 0;
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
      }
      if (m === 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q];
      }
    }
    chineseStr += cnIntLast;
  }
  //小数部分
  if (decimalNum !== '') {
    let decLen = decimalNum.length;
    for (let i = 0; i < decLen; i++) {
      let n = decimalNum.substr(i, 1);
      if (n !== '0') {
        chineseStr += cnNums[Number(n)] + cnDecUnits[i];
      }
    }
  }
  if (chineseStr === '') {
    chineseStr += cnNums[0] + cnIntLast + cnInteger;
  } else if (decimalNum === '') {
    chineseStr += cnInteger;
  }
  return chineseStr;
};
```
