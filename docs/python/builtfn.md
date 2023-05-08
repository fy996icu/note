---
title: 内置函数
toc: menu
order: 2
---

<BackTop></BackTop>

# 内置函数

## 内置函数表

Python 解释器内置了很多函数和类型，任何时候都能使用。以下按字母顺序给出列表。

|     |   |  内置函数   |   |     |
|  ----  | ----  |  ----  | ----  |  ----  |
| [abs()](/python/builtfn#abs)  | [delattr()](/python/builtfn#delattr) | [hash()](/python/builtfn#hash)  | [memoryview()](/python/builtfn#memoryview) | [set()](/python/builtfn#set)  |
| [all()](/python/builtfn#all)  | [dict()](/python/builtfn#dict) | [help()](/python/builtfn#help)  | [min()](/python/builtfn#min) | [setattr()](/python/builtfn#setattr)  |
| [any()](/python/builtfn#any)  | [dir()](/python/builtfn#dir) | [hex()](/python/builtfn#hex)  | [next()](/python/builtfn#next) | [slice()](/python/builtfn#slice)  |
| [ascii()](/python/builtfn#ascii)  | [divmod()](/python/builtfn#divmod) | [id()](/python/builtfn#id)  | [object()](/python/builtfn#object) | [sorted()](/python/builtfn#sorted)  |
| [bin()](/python/builtfn#bin)  | [enumerate()](/python/builtfn#enumerate) | [input()](/python/builtfn#input)  | [oct()](/python/builtfn#oct) | [staticmethod()](/python/builtfn#staticmethod)  |
| [bool()](/python/builtfn#bool)  | [eval()](/python/builtfn#eval) | [int()](/python/builtfn#int)  | [open()](/python/builtfn#open) | [str()](/python/builtfn#str)  |
| [breakpoint()](/python/builtfn#breakpoint)  | [exec()](/python/builtfn#exec) | [isinstance()](/python/builtfn#isinstance)  | [ord()](/python/builtfn#ord) | [sum()](/python/builtfn#sum)  |
| [bytearray()](/python/builtfn#bytearray)  | [filter()](/python/builtfn#filter) | [issubclass()](/python/builtfn#issubclass)  | [pow()](/python/builtfn#pow) | [super()](/python/builtfn#super)  |
| [bytes()](/python/builtfn#bytes)  | [float()](/python/builtfn#float) | [iter()](/python/builtfn#iter)  | [print()](/python/builtfn#print) | [tuple()](/python/builtfn#tuple)  |
| [callable()](/python/builtfn#callable)  | [format()](/python/builtfn#format) | [len()](/python/builtfn#len)  | [property()](/python/builtfn#property) | [type()](/python/builtfn#type)  |
| [chr()](/python/builtfn#chr)  | [frozenset()](/python/builtfn#frozenset) | [list()](/python/builtfn#list)  | [range()](/python/builtfn#range) | [vars()](/python/builtfn#vars)  |
| [classmethod()](/python/builtfn#classmethod)  | [getattr()](/python/builtfn#getattr) | [locals()](/python/builtfn#locals)  | [repr()](/python/builtfn#repr) | [zip()](/python/builtfn#zip)  |
| [compile()](/python/builtfn#compile)  | [globals()](/python/builtfn#globals) | [map()](/python/builtfn#map)  | [reversed()](/python/builtfn#reversed) | [\_\_import\_\_()](/python/builtfn#__import__)  |
| [complex()](/python/builtfn#complex) | [hasattr()](/python/builtfn#hasattr) | [max()](/python/builtfn#max) | [round()](/python/builtfn#round) |  |

## abs()

`abs(x)` 返回一个数的绝对值。 参数可以是整数、浮点数或任何实现了 `__abs__()` 的对象。 如果参数是一个复数，则返回它的模。

```python
>>> abs(-1)   # int   
1   
>>> abs(-1.1) # float
1.1 
>>> abs(3+4j) # complex
5.0
```

`abs(3+4j)` 取的是 `3` 和 `4` 的 `平方和` 的 `根`，即复数的 `模`。

## all()

`all(iterable)` 如果 `iterable` 的所有元素都为真（或者 `iterable` 为空），返回 `True`。 等价于：

```python
def all(iterable):
    for element in iterable:
        if not element:
            return False
    return True
```

```python
>>> all([1, 2, 3]) # list
True

>>> all([1, 2, 0]) # list
False

>>> all((1, 2, 3)) # tuple
True

>>> all((1, 2, 0)) # tuple
False

>>> all({1, 2, 3}) # set
True

>>> all({1, 2, 0}) # set
False

>>> all({1: 1, 2: 2, 3: 3}) # dict
True

>>> all({1: 1, 2: 2, 0: 0}) # dict
False
```

## any()

`any(iterable)` 如果 `iterable` 的任一元素为真，返回 `True`。如果可迭代对象为空，返回 `False`。等价于：

```python

def any(iterable):
    for element in iterable:
        if element:
            return True
    return False
```

```python
>>> any([0, 0, 0]) # list
False

>>> any([0, 0, 1]) # list
True

>>> any((0, 0, 0)) # tuple
False

>>> any((0, 0, 1)) # tuple
True

>>> any({0, 0, 0}) # set
False

>>> any({0, 0, 1}) # set
True

>>> any({0: 0, 0: 0, 0: 0}) # dict
False

>>> any({0: 0, 0: 0, 1: 1}) # dict
True
```

## ascii()

`ascii(object)` 返回一个表示对象的字符串，其中包含所有非 ASCII 字符的转义序列。 这个函数的返回值是一个类似于 `__repr__()` 的字符串，除了在非 ASCII 字符上使用转义序列。 这个函数的目的是为了确保所有的字符串都是可打印的。 如果 `object` 没有 `__repr__()` 方法，那么 `repr(object)` 会被调用。

```python
>>> ascii('中文') # str
'\u4e2d\u6587'

>>> ascii('中文'.encode('utf-8')) # bytes
"b'\xe4\xb8\xad\xe6\x96\x87'"
```

## bin()

`bin(x)` 将一个整数转换为一个前缀为 `0b` 的二进制字符串。 如果 `x` 不是一个 Python `int` 对象，那么它必须定义一个 `__index__()` 方法，返回一个整数。

```python
>>> bin(10) # int
'0b1010'
```

## bool()

`bool([x])` 返回一个布尔值，即 `True` 或 `False`。 如果 `x` 是 `False` 或 `None`，返回 `False`；如果 `x` 是 `True`，返回 `True`。 如果 `x` 不是布尔值，返回 `True`。 如果 `x` 没有定义 `__bool__()` 和 `__len__()` 方法，那么会抛出 `TypeError`。

```python
>>> bool(0) # int
False

>>> bool(1) # int
True

>>> bool(0.0) # float
False

>>> bool(1.1) # float
True

>>> bool(0+0j) # complex
False

>>> bool(1+1j) # complex
True

>>> bool('') # str
False

>>> bool('a') # str
True

>>> bool(b'') # bytes
False

>>> bool(b'a') # bytes
True

>>> bool([]) # list
False

>>> bool([1]) # list
True

>>> bool(()) # tuple
False

>>> bool((1,)) # tuple
True

>>> bool({}) # dict
False

>>> bool({1: 1}) # dict
True

>>> bool(set()) # set
False

>>> bool({1}) # set
True

>>> bool(None)
False

>>> bool(True)
True

>>> bool(False)
False
```

## breakpoint()

`breakpoint(*args, **kws)` 调用 `sys.breakpointhook()` 函数。 如果 `sys.breakpointhook()` 未定义，或者为 `None`，则会抛出 `RuntimeError`。 如果 `sys.breakpointhook()` 是一个可调用对象，那么它会被调用，传入 `*args` 和 `**kws`。 如果 `sys.breakpointhook()` 是一个可调用对象，那么它会被调用，传入 `*args` 和 `**kws`。

```python
>>> breakpoint()
> <stdin>(1)<module>()
(Pdb)
```

## bytearray()

`bytearray([source[, encoding[, errors]]])` 返回一个新的字节数组。 `source` 可以是一个整数，表示数组的大小；一个可迭代的对象，包含初始化数组的元素；或者是一个字符串，表示初始化数组的内容。 如果 `source` 是一个字符串，那么还需要指定 `encoding` 和 `errors` 参数。

```python
>>> bytearray(5) # int
bytearray(b'\x00\x00\x00\x00\x00')

>>> bytearray([1, 2, 3]) # list
bytearray(b'\x01\x02\x03')

>>> bytearray('中文', 'utf-8') # str
bytearray(b'\xe4\xb8\xad\xe6\x96\x87')
```

## bytes()

`bytes([source[, encoding[, errors]]])` 返回一个新的“bytes”对象， 是一个不可变序列，包含范围为 `0 <= x < 256` 的整数。 `source` 可以是一个整数，表示数组的大小；一个可迭代的对象，包含初始化数组的元素；或者是一个字符串，表示初始化数组的内容。 如果 `source` 是一个字符串，那么还需要指定 `encoding` 和 `errors` 参数。

```python
>>> bytes(5) # int
b'\x00\x00\x00\x00\x00'

>>> bytes([1, 2, 3]) # list
b'\x01\x02\x03'

>>> bytes('中文', 'utf-8') # str
b'\xe4\xb8\xad\xe6\x96\x87'
```

## callable()

`callable(object)` 如果 `object` 可调用，返回 `True`，否则返回 `False`。如果返回 `True`，调用仍可能失败，但如果返回 `False`，则调用 `object` 将肯定不会成功。 请注意类是可调用的（调用类将返回一个新的实例）；如果实例所属的类有 `__call__()` 则它就是可调用的。

```python
>>> callable(1) # int
False

>>> callable('a') # str
False

>>> callable([]) # list
False

>>> callable({}) # dict
False

>>> callable(set()) # set
False

>>> callable(None)
False

>>> callable(True)
False

>>> callable(False)
False

>>> callable(print) # function
True

>>> callable(lambda x: x) # lambda
True

>>> callable(int) # class
True

>>> callable(int()) # instance
True

>>> callable(int.__call__) # method
True
```

## chr()

`chr(i)` 返回一个表示指定 Unicode 码位的字符。 例如，`chr(97)` 返回字符串 `'a'`，`chr(8364)` 返回字符串 `'€'`。 这是 `unichr()` 的另一个名称，`ord()` 的逆函数。

```python
>>> chr(97) # int
'a'

>>> chr(8364) # int
'€'
```

## classmethod()

`classmethod(function)` 将函数转换为类方法。 类方法的第一个参数是类本身，而不是实例。 要在类方法中调用类的实例方法，可以使用 `cls.__class__`。

```python
>>> class A:
...     @classmethod
...     def foo(cls):
...         print(cls)
...
>>> A.foo() # class
<class '__main__.A'>

>>> A().foo() # instance
<class '__main__.A'>
```

## compile()

`compile(source, filename, mode[, flags[, dont_inherit]])` 将源代码编译为代码或 AST 对象。 如果成功，返回一个代码对象或 AST 对象。 如果发生语法错误，将引发 `SyntaxError`。 如果发生其他错误，将引发 `TypeError`。

```python
>>> compile('1 + 1', '<string>', 'eval') # str
<code object <module> at 0x000001E0F1B3F0F0, file "<string>", line 1>

>>> compile('1 + 1', '<string>', 'exec') # str
<code object <module> at 0x000001E0F1B3F0F0, file "<string>", line 1>

>>> compile('1 + 1', '<string>', 'single') # str
<code object <module> at 0x000001E0F1B3F0F0, file "<string>", line 1>

>>> compile('1 + 1', '<string>', 'eval') # bytes
<code object <module> at 0x000001E0F1B3F0F0, file "<string>", line 1>

>>> compile('1 + 1', '<string>', 'exec') # bytes
<code object <module> at 0x000001E0F1B3F0F0, file "<string>", line 1>

>>> compile('1 + 1', '<string>', 'single') # bytes
<code object <module> at 0x000001E0F1B3F0F0, file "<string>", line 1>
```

## complex()

`complex([real[, imag]])` 返回一个复数，具有实部 `real` 和虚部 `imag`。 实部默认为零，虚部默认为一。 如果 `real` 不是数字，它必须定义支持转换为复数的 `__complex__()` 方法。 如果 `imag` 不是数字，它必须定义支持转换为实数的 `__float__()` 方法。

```python
>>> complex(1, 2) # int, int
(1+2j)

>>> complex(1.0, 2.0) # float, float
(1+2j)

>>> complex(1, 2.0) # int, float
(1+2j)

>>> complex(1.0, 2) # float, int
(1+2j)

>>> complex('1+2j') # str
(1+2j)
```

## delattr()

`delattr(object, name)` 删除属性。 `name` 必须是字符串。 该字符串必须是对象的某个属性。如果对象允许，该函数将删除指定的属性。例如，`delattr(x, 'foobar')` 相当于 `del x.foobar`。

```python
>>> class A:
...    def __init__(self):
...        self.foo = 'bar'
...    def __delattr__(self, name):
...        print('delattr')
...        super().__delattr__(name)
... 
>>> a = A()
>>> delattr(a, 'foo') # str
delattr

>>> a.foo
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'A' object has no attribute 'foo'
```

## dict()

`dict(**kwarg)` 或 `dict(mapping, **kwarg)` 或 `dict(iterable, **kwarg)` 创建一个字典。 如果没有参数给出，返回一个新的空字典。 如果给出关键字参数，返回一个具有关键字参数作为键值对的字典。 如果给出映射参数，返回一个具有映射参数的键值对的字典。 如果给出可迭代参数，返回一个具有可迭代参数的键值对的字典。 如果两个或多个参数给出，关键字参数将覆盖映射和可迭代参数的键值对。

```python
>>> dict() # no args
{}

>>> dict(a=1, b=2) # **kwarg
{'a': 1, 'b': 2}

>>> dict({'a': 1, 'b': 2}) # mapping
{'a': 1, 'b': 2}

>>> dict([('a', 1), ('b', 2)]) # iterable
{'a': 1, 'b': 2}

>>> dict({'a': 1, 'b': 2}, c=3) # mapping, **kwarg
{'a': 1, 'b': 2, 'c': 3}

>>> dict([('a', 1), ('b', 2)], c=3) # iterable, **kwarg
{'a': 1, 'b': 2, 'c': 3}

>>> dict({'a': 1, 'b': 2}, a=3) # mapping, **kwarg
{'a': 3, 'b': 2}

>>> dict([('a', 1), ('b', 2)], a=3) # iterable, **kwarg
{'a': 3, 'b': 2}
```

## dir()

`dir([object])` 不带参数时，返回当前范围内的名称列表。 带参数时，返回参数的属性列表。 参数必须是模块、类、实例或其他具有 `__dir__()` 方法的对象。

```python
>>> dir() # no args
['__annotations__', '__builtins__', '__doc__', '__loader__', '__name__', '__package__', '__spec__']

>>> dir(dict) # object
['__class__', '__contains__', '__delattr__', '__delitem__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__reversed__', '__setattr__', '__setitem__', '__sizeof__', '__str__', '__subclasshook__', 'clear', 'copy', 'fromkeys', 'get', 'items', 'keys', 'pop', 'popitem', 'setdefault', 'update', 'values']
```

## divmod()

`divmod(a, b)` 返回一个包含商和余数的元组 `(a // b, a % b)`。 两个参数都必须是整数或浮点数。 如果两个参数都是整数，返回的商和余数都是整数。 如果两个参数都是浮点数，返回的商和余数都是浮点数。 如果两个参数的类型不同，返回的商和余数都是浮点数。

```python
>>> divmod(5, 2) # int, int
(2, 1)

>>> divmod(5.0, 2) # float, int
(2.0, 1.0)

>>> divmod(5, 2.0) # int, float
(2.0, 1.0)

>>> divmod(5.0, 2.0) # float, float
(2.0, 1.0)

>>> divmod(5, 2.5) # int, float
(2.0, 0.0)

>>> divmod(5.0, 2.5) # float, float
(2.0, 0.0)
```

## enumerate()

`enumerate(iterable, start=0)` 返回一个枚举对象。 枚举对象的 `__next__()` 方法返回一个元组 `(count, value)`，其中 `count` 是从 `start` 开始的整数，`value` 是从 `iterable` 中获取的值。

```python
>>> enumerate(['a', 'b', 'c'])
<enumerate object at 0x7f9b8c0b9b40>

>>> list(enumerate(['a', 'b', 'c']))
[(0, 'a'), (1, 'b'), (2, 'c')]

>>> list(enumerate(['a', 'b', 'c'], 1))
[(1, 'a'), (2, 'b'), (3, 'c')]
```

## eval()

`eval(expression, globals=None, locals=None)` 用来计算在字符串中的有效 Python 表达式，并返回一个对象。 如果表达式是一个字面常量或数字，或者是一个只包含字面常量、数字、字符串、元组、列表、字典、集合、函数调用、属性访问、变量或运算符的表达式，那么 `eval()` 就简单地返回表达式的值。 如果表达式是一个复杂的表达式，`eval()` 就会执行表达式并返回表达式的值。

```python
>>> eval('1 + 2')
3

>>> eval('len([1, 2, 3])')
3

>>> eval('len', {'len': len}, {'len': [1, 2, 3]})
[1, 2, 3]
```

## exec()

`exec(object, globals=None, locals=None)` 用来执行储存在字符串或文件中的 Python 语句。 如果 `object` 是一个字符串，那么它会被当成一系列的 Python 语句执行。 如果 `object` 是一个文件对象，那么它应该有一个 `read()` 方法，该方法会返回一个包含 Python 语句的字符串。 该字符串会被当成一系列的 Python 语句执行。 `exec()` 语句不会返回任何值。

```python
>>> exec('print("Hello World!")')
Hello World!

>>> exec(open('hello.py').read())
Hello World!
```

## filter()

`filter(function, iterable)` 构造一个迭代器，从 `iterable` 中过滤掉不符合 `function` 条件的元素。 `function` 是一个布尔函数，它只接受一个参数。 `function` 返回 `True` 或 `False`。 如果 `function` 是 `None`，则会移除所有为假的元素。

```python
>>> filter(None, [1, 0, False, True])
<filter object at 0x7f9b8c0b9b40>

>>> list(filter(None, [1, 0, False, True]))
[1, True]

>>> def is_odd(x):
...     return x % 2 == 1
...
>>> list(filter(is_odd, [1, 2, 3, 4, 5]))
[1, 3, 5]
```

## float()

`float(x)` 将 `x` 转换为一个浮点数。

```python
>>> float(1)
1.0

>>> float('1')
1.0

>>> float('1.23')
1.23

>>> float(' 1.23 ')
1.23

>>> float('nan')
nan

>>> float('inf')
inf

>>> float('-inf')
-inf
```

## format()

`format(value, format_spec)` 将 `value` 转换为格式化的表示形式，格式由 `format_spec` 决定。 `format_spec` 可以是一个格式化字符串，也可以是一个格式化函数。

```python
>>> format(123456789, ',')
'123,456,789'

>>> format(123456789.123456789, ',.2f')
'123,456,789.12'

>>> format(123456789.123456789, 'e')
'1.234568e+08'

>>> format(123456789.123456789, '0.2E')
'1.23E+08'

>>> format(0.5, '%')
'50.000000%'

>>> format(0.5, 'b')
'0.1'
```

## frozenset()

`frozenset([iterable])` 返回一个冻结的集合，冻结后集合不能再添加或删除任何元素。

```python
>>> s = frozenset([1, 2, 3, 4])
>>> s
frozenset({1, 2, 3, 4})

>>> s.add(5)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'frozenset' object has no attribute 'add'
```

## getattr()

`getattr(object, name[, default])` 返回一个对象属性值。 如果没有这样的属性，且 `default` 没有被给出，那么将会抛出 `AttributeError` 异常。

```python
>>> class C:
...    a = 1
...    b = 2
...    c = 3
...    d = 4

>>> getattr(C, 'a')
1

>>> getattr(C, 'b')
2

>>> getattr(C, 'c')
3

>>> getattr(C, 'd', 4)
4

```

## globals()

`globals()` 返回当前全局符号表。 这是一个字典对象。

```python
>>> globals()
{'__name__': '__main__', '__doc__': None, '__package__': None, '__loader__': <class '_frozen_importlib.BuiltinImporter'>, '__spec__': None, '__annotations__': {}, '__builtins__': <module 'builtins' (built-in)>, '__file__': '<stdin>', '__cached__': None}
```

## hasattr()

`hasattr(object, name)` 如果对象有指定名称的属性，那么返回 `True`，否则返回 `False`。

```python
>>> class C:
...    a = 1
...    b = 2
...    c = 3
>>> hasattr(C, 'a')
True

>>> hasattr(C, 'b')
True

>>> hasattr(C, 'c')
True

>>> hasattr(C, 'd')
False
```

## hash()

`hash(object)` 返回对象的哈希值。 如果对象是可哈希的，那么在其生命周期中，它的哈希值是不变的。 如果对象是可变的，那么它的哈希值是不可预测的。

```python
>>> hash('abc')
-2128831035

>>> hash((1, 2, (2, 3)))
-2725224101759650254
```

## help()

`help([object])` 调用内置的帮助系统。 如果没有参数，那么它会进入交互式帮助系统。 如果有参数，那么它会打印对象的帮助信息。

```python
>>> help()
Welcome to Python 3.8's help utility!

If this is your first time using Python, you should definitely check out
the tutorial on the Internet at https://docs.python.org/3.8/tutorial/.

Enter the name of any module, keyword, or topic to get help on writing

Python programs and using Python modules.  To quit this help utility and

return to the interpreter, just type "quit".

To get a list of available modules, keywords, symbols, or topics, type

"modules", "keywords", "symbols", or "topics".  Each module also comes

with a one-line summary of what it does; to list the modules whose name

or summary contain a given string such as "spam", type "modules spam".

help> quit

>>> help('modules')

Please wait a moment while I gather a list of all available modules...

__main__          cmath             keyword           site

aifc              cmd               lib2to3           six

antigravity       code              linecache         smtpd

...
```

## hex()

`hex(x)` 将一个整数转换为一个十六进制字符串。如果 `x` 不是 Python `int` 对象，则必须定义返回整数的 `__index__()` 方法。

```python
>>> hex(255)
'0xff'

>>> hex(-42)
'-0x2a'
```

## id()

`id(object)` 返回对象的唯一标识符。 这个标识符是一个整数，在对象的生命周期中是唯一且恒定的。 两个独立的对象可能会具有相同的 `id()` 值，尽管几乎不可能。

```python
>>> a = 1
>>> id(a)
140735000000000

>>> b = 1
>>> id(b)
140735000000000

>>> c = 2
>>> id(c)
140735000000032
```

## input()

`input([prompt])` 从标准输入读取一行，并返回一个字符串（去掉结尾的换行符）。

```python
>>> input()
hello world
'hello world'

>>> input('Enter: ')
Enter: hello world
'hello world'
```

## int()

`int(x=0)` 将一个数字或字符串转换为一个整数。 如果参数是一个字符串，那么它将被解析为一个十进制数，除非它以 `0x` 或 `0X` 开头，这种情况下将被解析为一个十六进制数。 如果参数是一个浮点数，那么它将被截断为整数。 如果没有参数，那么将返回 `0`。

```python
>>> int()
0

>>> int('123')
123

>>> int('0x10', 16)
16

>>> int(12.34)
12
```

## isinstance()

`isinstance(object, classinfo)` 如果对象的类型与参数二的类型（类、元组、或者其他类型）相同则返回 `True`，否则返回 `False`。

```python
>>> class A:
...    pass
...
>>> class B(A):
...    pass
...
>>> isinstance(A(), A)
True

>>> isinstance(B(), A)
True

>>> isinstance(A(), B)
False
```

## issubclass()

`issubclass(class, classinfo)` 如果参数一是参数二的子类（直接、间接或虚拟）则返回 `True`，否则返回 `False`。

```python
>>> class A:
...    pass
...
>>> class B(A):
...    pass
...
>>> issubclass(B, A)
True

>>> issubclass(A, B)
False
```

## iter()

`iter(object[, sentinel])` 返回一个迭代器对象。 第一个参数是一个可迭代对象，第二个参数是一个标记值，当从迭代器中取值时，如果取到这个标记值，则抛出 `StopIteration` 异常。

```python
>>> a = [1, 2, 3]
>>> it = iter(a)
>>> next(it)
1
>>> next(it)
2
>>> next(it)
3
>>> next(it)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
StopIteration

>>> it = iter(a, 2)
>>> next(it)
1
>>> next(it)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
StopIteration
```

## len()

`len(s)` 返回对象（字符、列表、元组等）长度或项目个数。

```python
>>> len('abc')
3

>>> len([1, 2, 3])
3

>>> len((1, 2, 3))
3
```

## list()

`list([iterable])` 返回列表类型，可迭代对象 `iterable` 的元素作为参数传入。

```python
>>> list()
[]

>>> list('abc')
['a', 'b', 'c']

>>> list((1, 2, 3))
[1, 2, 3]
```

## locals()

`locals()` 更新并返回当前作用域中的局部变量字典。

```python
>>> a = 1
>>> locals()
{'a': 1}
```

## map()

`map(function, iterable, ...) ` 对可迭代对象中的每个元素执行函数操作，并返回一个迭代器。

```python
>>> def f(x):
...    return x * x
...
>>> map(f, [1, 2, 3, 4, 5, 6, 7, 8, 9])
<map object at 0x7f8b9c0b4f98>

>>> list(_)
[1, 4, 9, 16, 25, 36, 49, 64, 81]
```

## max()

`max(iterable, *[, key, default])` 返回可迭代对象中的最大值。 如果有多个最大值，则返回第一个最大值。

```python
>>> max([1, 2, 3])
3

>>> max('abc')
'c'
```

## memoryview()

`memoryview(obj)` 返回给定参数的内存查看对象。

```python
>>> m = memoryview(b'abcefg')
>>> m[1]
98
```

## min()

`min(iterable, *[, key, default])` 返回可迭代对象中的最小值。 如果有多个最小值，则返回第一个最小值。

```python
>>> min([1, 2, 3])
1

>>> min('abc')
'a'
```

## next()

`next(iterator[, default])` 返回迭代器的下一个项目。 如果没有下一个项目，则返回默认值。 如果没有默认值并且迭代器没有下一个项目，则抛出 `StopIteration` 异常。

```python
>>> a = [1, 2, 3]
>>> it = iter(a)
>>> next(it)
1

>>> next(it)
2

>>> next(it)
3

>>> next(it)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
StopIteration
```

## object()

`object()` 返回一个空对象。 该对象具有所有 Python 对象的通用方法。

```python
>>> object()
<object object at 0x7f8b9c0b4f98>
```

## oct()

`oct(x)` 将一个整数转换为一个八进制字符串。

```python
>>> oct(10)
'0o12'

>>> oct(-10)
'-0o12'
```

## open()

`open(file, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)` 打开一个文件，并返回一个相应的文件对象。 如果文件无法打开，则抛出 `IOError`。

```python
>>> f = open('test.txt', 'w')
>>> f.write('hello world')
11

>>> f.close()
```

## ord()

`ord(c)` 返回一个字符的 Unicode 码位。

```python
>>> ord('a')
97

>>> ord('中')
20013
```

## pow()

`pow(x, y[, z])` 返回 x 的 y 次幂。 如果 z 存在，则返回 x 的 y 次幂对 z 取模的结果。

```python
>>> pow(2, 4)
16

>>> pow(2, 4, 3)
1
```

## print()

`print(*objects, sep=' ', end=' ', file=sys.stdout, flush=False)` 将对象以文本形式写入流，通过 `sep` 和 `end` 指定分隔符和结束符。

```python
>>> print('hello', 'world')
hello world

>>> print('hello', 'world', sep=',')
hello,world

>>> print('hello', 'world', end='!')
hello world!
```

## property()

`property(fget=None, fset=None, fdel=None, doc=None)` 返回属性值的属性。

```python
>>> class C(object):
...     def __init__(self):
...         self._x = None
...
...     def getx(self):
...         return self._x
...
...     def setx(self, value):
...         self._x = value
...
...     def delx(self):
...         del self._x
...
...     x = property(getx, setx, delx, "I'm the 'x' property.")
...
>>> c = C()
>>> c.x = 'hello'
>>> c.x
'hello'

>>> del c.x
```

## range()

`range(start, stop[, step])` 返回一个表示指定范围的迭代器。

```python
>>> range(10)
range(0, 10)

>>> list(_)
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

>>> range(1, 11)
range(1, 11)

>>> list(_)
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

>>> range(0, 30, 5)
range(0, 30, 5)

>>> list(_)
[0, 5, 10, 15, 20, 25]
```

## repr()

`repr(object)` 返回包含一个对象的可打印表示形式的字符串。 对于许多类型来说，该函数会尝试返回的字符串将会与该对象被传递给 `eval()` 时所生成的对象具有相同的值，在其他情况下表示形式会是一个括在尖括号中的字符串，其中包含对象类型的名称与通常包括对象名称和地址的附加信息。 类可以通过定义 `__repr__()` 方法来控制此函数为它的实例所返回的内容。

```python
>>> repr('hello')
"'hello'"
```

## reversed()

`reversed(seq)` 返回一个反向迭代器。

```python
>>> reversed([1, 2, 3])
<list_reverseiterator object at 0x7f8b9c0b4f98>

>>> list(_)
[3, 2, 1]
```

## round()

`round(number[, ndigits])` 返回 `number` 舍入到小数点后 `ndigits` 位精度的值。 如果 `ndigits` 被省略或为 `None`，则返回最接近输入值的整数。

```python
>>> round(10.2)
10

>>> round(10.5)
10

>>> round(10.6)
11

>>> round(1.212121, 2)
1.21
```

## set()

`set([iterable])` 返回一个新的集合对象，可迭代对象的元素将作为初始集合元素。 如果没有提供参数，则返回一个空集合。

```python
>>> set([1, 2, 3])
{1, 2, 3}

>>> set()
set()
```

## setattr()

`setattr(object, name, value)` 将对象的属性设置为指定值。 如果对象没有该属性，则会抛出 `AttributeError` 异常。

```python
>>> class C(object):
...     pass
...
>>> c = C()
>>> setattr(c, 'x', 10)
>>> c.x
10
```

## slice()

`slice(start, stop[, step])` 返回一个表示由 `range(start, stop, step)` 所指定索引集的 `slice` 对象。

```python
>>> s = slice(1, 5, 2)
>>> s
slice(1, 5, 2)

>>> s.start
1

>>> s.stop
5

>>> s.step
2
```

## sorted()

`sorted(iterable[, cmp[, key[, reverse]]])` 返回一个新的列表，其中包含对指定可迭代对象进行排序的结果。 如果没有指定 `cmp` 参数，则使用内置的 `__lt__()` 方法进行比较。 如果没有指定 `key` 参数，则使用可迭代对象的元素进行比较。 如果指定了 `reverse` 参数，则结果列表将被反向排序。

```python
>>> sorted([5, 2, 3, 1, 4])
[1, 2, 3, 4, 5]

>>> sorted('hello')
['e', 'h', 'l', 'l', 'o']

>>> sorted({1: 'D', 2: 'B', 3: 'B', 4: 'E', 5: 'A'})
[1, 2, 3, 4, 5]

>>> sorted({1: 'D', 2: 'B', 3: 'B', 4: 'E', 5: 'A'}.items(), key=lambda x: x[1])
[(5, 'A'), (2, 'B'), (3, 'B'), (1, 'D'), (4, 'E')]
```

## staticmethod()

`staticmethod(function)` 返回一个静态方法的包装器。 静态方法不会接收隐式的第一个参数。 要声明一个静态方法，只需在一个方法上调用 `staticmethod()`。

```python
>>> class C(object):
...     @staticmethod
...     def f():
...         print('runoob')
...
>>> C.f()
runoob
```

## str()

`str(object='')` 返回一个对象的字符串表示。 如果没有指定参数，则返回一个空字符串。

```python
>>> str(1)
'1'

>>> str('hello')
'hello'

>>> str([1, 2, 3])
'[1, 2, 3]'
```

## sum()

`sum(iterable[, start])` 返回 `iterable` 中所有元素的总和。 如果指定了 `start`，则将其添加到总和中。

```python
>>> sum([1, 2, 3])
6

>>> sum([1, 2, 3], 10)
16
```

## super()

`super(type[, object-or-type])` 返回一个代理对象，该代理对象将方法调用委托给 `type` 的父类或兄弟类。 如果没有指定 `object-or-type`，则返回的代理对象是未绑定的。 如果指定了 `object-or-type`，则返回的代理对象是绑定的。 如果 `type` 是一个类对象，则返回的代理对象是一个单例。 如果 `type` 是一个类型对象，则返回的代理对象是一个新对象。 如果 `type` 是一个新式类，则返回的代理对象是一个新式类。 如果 `type` 是一个经典类，则返回的代理对象是一个经典类。

```python
>>> class A(object):
...     def add(self, x):
...         y = x + 1
...         print(y)
...
>>> class B(A):
...     def add(self, x):
...         super(B, self).add(x)
...
>>> b = B()
>>> b.add(2)
3
```

## tuple()

`tuple([iterable])` 返回一个元组，其中包含指定可迭代对象中的元素。 如果没有指定参数，则返回一个空元组。

```python
>>> tuple()
()

>>> tuple('runoob')
('r', 'u', 'n', 'o', 'o', 'b')

>>> tuple([1, 2, 3])
(1, 2, 3)

>>> tuple((1, 2, 3))
(1, 2, 3)
```

## type()

`type(object)` 返回对象的类型。 如果对象是一个实例，则返回对象的类型。 如果对象是一个类，则返回对象的基类。 如果对象是一个类型对象，则返回对象的基类。

```python
>>> type(1)
<class 'int'>

>>> type('hello')
<class 'str'>

>>> type([1, 2, 3])
<class 'list'>

>>> type((1, 2, 3))
<class 'tuple'>

>>> type({1, 2, 3})
<class 'set'>

>>> type({'name': 'runoob'})
<class 'dict'>

>>> type(None)
<class 'NoneType'>

>>> type(True)
<class 'bool'>
```

## vars()

`vars([object])` 返回对象的属性和属性值的字典对象。 如果没有参数，返回当前范围内的变量。 如果提供了参数，则返回该参数的属性和属性值的字典。 如果参数是一个模块对象，则返回模块的属性和属性值的字典。 如果参数是一个类对象，则返回类的属性和属性值的字典。 如果参数是一个实例对象，则返回实例的属性和属性值的字典。

```python
>>> class Runoob:
...     name = '菜鸟教程'
...
>>> vars(Runoob)
mappingproxy({'__module__': '__main__', 'name': '菜鸟教程', '__dict__': <attribute '__dict__' of 'Runoob' objects>, '__weakref__': <attribute '__weakref__' of 'Runoob' objects>, '__doc__': None})

>>> vars()
{'__name__': '__main__', '__doc__': None, '__package__': None, '__loader__': <_frozen_importlib_external.SourceFileLoader object at 0x0000020B0B0B0F98>, '__spec__': None, '__annotations__': {}, '__builtins__': <module 'builtins' (built-in)>, '__file__': 'D:/Python/Python36-32/Python36-32/vars.py', '__cached__': None, 'Runoob': <class '__main__.Runoob'>}

>>> a = Runoob()
>>> vars(a)
{'name': '菜鸟教程'}
```

## zip()

`zip(*iterables)` 返回一个元组的列表，其中第 i 个元组包含来自每个参数序列或可迭代对象的第 i 个元素。 当参数序列的长度不同时，返回列表的长度与最短的参数序列相同。 迭代器的长度不同，zip() 函数将在最短的列表耗尽时停止。 通过将一个列表传递给 list()，可以将元组转换为列表。

```python
>>> a = [1, 2, 3]
>>> b = [4, 5, 6]
>>> c = [4, 5, 6, 7, 8]
>>> zipped = zip(a, b)     # 打包为元组的列表
>>> zipped
<zip object at 0x0000020B0B0B0F48>
>>> list(zipped)  # 列表
[(1, 4), (2, 5), (3, 6)]

>>> list(zip(a, c))        # 元素个数与最短的列表一致
[(1, 4), (2, 5), (3, 6)]

>>> a1, a2 = zip(*zip(a, b)) # 与 zip 相反，*zipped 可理解为解压，返回二维矩阵式
>>> list(a1)
[1, 2, 3]

>>> list(a2)
[4, 5, 6]
```

## \_\_import\_\_()

`__import__(name, globals=None, locals=None, fromlist=(), level=0)` 此函数会由 `import` 语句发起调用。 它可以被替换 (通过导入 `builtins` 模块并赋值给 `builtins.__import__`) 以便修改 `import` 语句的语义，但是 强烈 不建议这样做，因为使用导入钩子 (参见 [PEP 302](https://peps.python.org/pep-0302/)) 通常更容易实现同样的目标，并且不会导致代码问题，因为许多代码都会假定所用的是默认实现。 同样也不建议直接使用 `__import__()` 而应该用 `importlib.import_module()`。

例如，语句 `import spam` 的结果将为与以下代码作用相同的字节码:

```python
spam = __import__('spam', globals(), locals(), [], 0)
```
语句 `import spam.ham` 的结果将为以下调用:

```python
spam = __import__('spam.ham', globals(), locals(), [], 0)
```
