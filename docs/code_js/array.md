---
title: 数组操作
toc: menu
order: 1
---

<BackTop></BackTop>

# 数组操作

## 计算元素出现次数

此代码段计算数组中某个值的出现次数。

```ts
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

// 执行
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```

## 计算平均值

此代码段返回两个或多个数值的平均值。

```ts
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;

// 执行
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```

## 递归展平数组

```ts
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

// 执行
deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```

## 过滤重复元素

此代码段删除数组中的重复值。

```ts
const filterNonUnique = arr => [...new Set(arr)];

// 执行
filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
```
