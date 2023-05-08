---
title: 基础语法
toc: menu
order: 1
---

<BackTop></BackTop>

# 基础语法

## 编码

默认情况下，Python 3 源码文件以 `UTF-8` 编码，所有字符串都是 `unicode` 字符串。 当然你也可以为源码文件指定不同的编码：

```python
# -*- coding: cp-1252 -*-
```

## 标识符

- 第一个字符必须是字母表中 `字母` 或 下划线 `_` 。

- 标识符的其他的部分由 `字母`、`数字` 和 `下划线` 组成。

- 识符对大小写敏感。

## 行与缩进

Python 最具特色的就是使用 `缩进` 来表示代码块，不需要使用大括号 `{}` 。

缩进的空格数是可变的，但是同一个代码块的语句必须包含相同的缩进空格数。实例如下：

```python
if True:
    print("True")
else:
    print("False")
```

以下代码最后一行语句缩进数的空格数不一致，会导致运行错误：

```python
if True:
    print ("Answer")
    print ("True")
else:
    print ("Answer")
  print ("False")    # 缩进不一致，会导致运行错误
```

缩进有利有弊。好处是强迫你写出格式化的代码，但没有规定缩进是几个空格还是 `Tab`。按照约定俗成的惯例，应该始终坚持使用 `4个空格` 的缩进。

缩进的坏处就是 `复制－粘贴` 功能失效了，这是最坑爹的地方。当你重构代码时，粘贴过去的代码必须重新检查缩进是否正确。此外，IDE很难像格式化 Java 代码那样格式化 Python 代码。

## 注释

以 `#` 开头的语句是注释，注释是给人看的，可以是任意内容，解释器会忽略掉注释。其他每一行都是一个语句，当语句以冒号 `:` 结尾时，缩进的语句视为代码块。

Python 中单行注释以 `#` 开头，实例如下：

```python
# 第一个注释
print("Hello, Python!") # 第二个注释
```

多行注释可以用多个 `#` 号，还有 `'''` 和 `"""`：

```python
# 第一个注释
# 第二个注释
 
'''
第三注释
第四注释
'''
 
"""
第五注释
第六注释
"""
print ("Hello, Python!")
```

## 保留字

保留字即关键字，我们不能把它们用作任何标识符名称。Python 的标准库提供了一个 `keyword` 模块，可以输出当前版本的所有关键字：

```python
>>> import keyword
>>> keyword.kwlist
['False', 'None', 'True', 'and', 'as', 'assert', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
```

## 多行语句

Python语句中一般以新行作为语句的结束符。但是我们可以使用斜杠（ `\`）将一行的语句分为多行显示，如下所示：

```python
total = item_one + \
        item_two + \
        item_three
```

语句中包含 `[]`, `{}` 或 `()` 括号就不需要使用多行连接符。如下实例：

```python
days = ['Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday']
```

## 编码规范

Python 采用 [PEP 8](https://peps.python.org/pep-0008/) 作为编码规范，其中 `PEP` 是 `Python Enhancement Proposal`（Python 增强建议书）的缩写，`8` 代表的是 Python 代码的样式指南。下面仅给大家列出 `PEP 8` 中初学者应严格遵守的一些编码规则：

1. 每个 `import` 语句只导入一个模块，尽量避免一次导入多个模块，例如：

```python
# 不推荐
import sys, os

# 推荐
import sys
import os
```

2. 不要在行尾添加分号，也不要用分号将两条命令放在同一行，例如：

```python
# 不推荐
import sys; x = 'foo'; print(x)

# 推荐
import sys
x = 'foo'
print(x)
```

3. 建议每行不超过 `80` 个字符，如果超过，建议使用 `小括号` 将多行内容隐式的连接起来，而不推荐使用反斜杠 `\` 进行连接。例如，如果一个字符串文本无法实现一行完全显示，则可以使用小括号将其分开显示，代码如下：

```python
# 不推荐

# 反斜杠连接
print('This will not wrap \
      across multiple lines.')

# 推荐

# 小括号连接
print('This will wrap across '
      'multiple lines.')
```

4. 在类的定义中，如果父类名称与当前类名称在同一行，则需要在父类名称后面加上小括号，例如：

```python
# 不推荐
class Foo: pass

# 推荐
class Foo(object): pass
```

5. 在类的定义中，如果父类名称与当前类名称不在同一行，则需要在父类名称后面加上小括号，并且需要将父类名称单独放在一行，例如：

```python
# 不推荐
class Foo(
    Bar):
    pass
    
# 推荐
class Foo(Bar):
    pass
```
