---
title: 推导式
toc: menu
order: 2
---

<BackTop></BackTop>

# 推导式

Python 推导式是一种独特的数据处理方式，可以从一个数据序列构建另一个新的数据序列的结构体。

Python 支持各种数据结构的推导式：

- 列表( list )推导式

- 字典( dict )推导式

- 集合( set )推导式

- 元组( tuple )推导式

## 列表推导式

列表推导式格式为：

```python
[表达式 for 变量 in 列表]
[out_exp_res for out_exp in input_list]

# 或者
[表达式 for 变量 in 列表 if 条件]
[out_exp_res for out_exp in input_list if condition]
```

示例：

1、过滤掉长度小于或等于3的字符串列表，并将剩下的转换成大写字母：

```python
names = ['Bob', 'Tom', 'alice', 'Jerry', 'Wendy', 'Smith']

new_name = [name.upper() for name in names if len(name) > 3]

print(new_name)
# 输出：['ALICE', 'JERRY', 'WENDY', 'SMITH']
```

2、计算 30 以内可以被 3 整除的整数：

```python
nums = [x for x in range(30) if x % 3 == 0]

print(nums)
# 输出：[0, 3, 6, 9, 12, 15, 18, 21, 24, 27]
```

## 字典推导式

字典推导式格式为：

```python
{ key_expr: value_expr for value in collection }

# 或者
{ key_expr: value_expr for value in collection if condition }
```

示例：

1、将列表中各字符串值为键，各字符串的长度为值，组成键值对：

```python
list_str = ['Google', 'Runoob', 'Taobao']

new_dict = {value: len(value) for value in list_str}

print(new_dict)
# 输出：{'Google': 6, 'Runoob': 6, 'Taobao': 6}
```

2、提供三个数字，以三个数字为键，三个数字的平方为值来创建字典：

```python
new_dict = {value: value ** 2 for value in (3, 6, 9)}

print(new_dict)
# 输出：{3: 9, 6: 36, 9: 81}
```

## 集合推导式

集合推导式基本格式：

```python
{ expression for item in Sequence }

# 或者

{ expression for item in Sequence if conditional }
```

示例：

1、计算数字 1,2,3 的平方数：

```python
new_set = {value ** 2 for value in (1, 2, 3)}

print(new_set)
# 输出：{1, 4, 9}
```

2、判断不是 abc 的字母并输出：

```python
new_set = {value for value in "abracadabra" if value not in "abc"}

print(new_set)
# 输出：{'r', 'd'}
```

## 元组推导式

元组推导式可以利用 range 区间、元组、列表、字典和集合等数据类型，快速生成一个满足指定需求的元组。

元组推导式基本格式：

```python
(expression for item in Sequence )

# 或者

(expression for item in Sequence if conditional )
```

元组推导式和列表推导式的用法也完全相同，只是元组推导式是用 `()` 圆括号将各部分括起来，而列表推导式用的是中括号 `[]`，另外元组推导式返回的结果是一个 `生成器对象`。

示例：

1、生成一个包含数字 1~9 的元组

```python
tuple_obj = (value for value in range(1, 10))

print(tuple_obj)
# 输出：<generator object <genexpr> at 0x1033d45d0>

# 使用 tuple() 将生成器对象转换为元组
new_tuple = tuple(tuple_obj)

print(new_tuple)
# 输出：(1, 2, 3, 4, 5, 6, 7, 8, 9)
```

## if...else

使用列表生成式的时候，经常搞不清楚 `if...else`的用法。

例如，以下代码正常输出偶数：

```python
>>> [x for x in range(1, 11) if x % 2 == 0]
[2, 4, 6, 8, 10]
```

但是，我们不能在最后的 `if` 加上 `else`：

```python
>>> [x for x in range(1, 11) if x % 2 == 0 else 0]
  File "<stdin>", line 1
    [x for x in range(1, 11) if x % 2 == 0 else 0]
                                              ^
SyntaxError: invalid syntax
```

<Badge>注意</Badge>这是因为跟在 `for` 后面的 `if` 是一个筛选条件，不能带 `else`，否则如何筛选？

另一些把 `if` 写在 `for` 前面必须加 `else`，否则报错：

```python
>>> [x if x % 2 == 0 for x in range(1, 11)]
  File "<stdin>", line 1
    [x if x % 2 == 0 for x in range(1, 11)]
                       ^
SyntaxError: invalid syntax
```
<Badge>注意</Badge>这是因为 `for` 前面的部分是一个表达式，它必须根据 `x` 计算出一个结果。因此，考察表达式：`x if x % 2 == 0`，它无法根据 `x` 计算出结果，因为缺少 `else`，必须加上`else`：

```python
>>> [x if x % 2 == 0 else -x for x in range(1, 11)]
[-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]
```
上述 `for` 前面的表达式 `x if x % 2 == 0 else -x` 才能根据 `x` 计算出确定的结果。

<Badge>总结</Badge>可见，在一个列表生成式中，`for` 前面的 `if ... else` 是 `表达式`，而`for` 后面的 `if` 是 `过滤条件`，不能带 `else`。
