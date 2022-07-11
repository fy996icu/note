---
title: 清理文件
toc: menu
order: 6
---

<BackTop></BackTop>

# 清理文件

有时候我们在工作区添加了很多文件，这些文件都未被跟踪，并且我们不需要它们了，一个个的清理会非常繁琐，我们则可以通过 `git clean` 命令从你的工作目录中删除所有未被跟踪过的文件。

## 清理文件

```bash
# 新建 clean.txt clean2.txt
$ touch clean.txt clean2.txt

$ git status
# 输出：
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	clean.txt
	clean2.txt

nothing added to commit but untracked files present (use "git add" to track)

# 查看哪些会被清理
$ git clean -n
# 输出：
Would remove clean.txt
Would remove clean2.txt

# 清理未被跟踪的文件
$ git clean -f
# 输出：
Removing clean.txt
Removing clean2.txt
```

此时我们查看文件目录 `clean.txt` 和 `clean2.txt` 文件已经被清理。

## 清理目录

清理目录使用 `git clean -d`，会报错 `fatal: clean.requireForce defaults to true and neither -i, -n, nor -f given; refusing to clean`。

因此清理未被跟踪的目录，可以使用 `git clean -df` 或者 `git clean -d -f` 命令，`-df` 表示强制删除目录和文件，`-f` 表示强制删除。

```bash
# 新建 aaa 目录
$ mkdir aaa

# 进入 aaa 目录
$ cd aaa/

# 新建 a.txt 文件
$ touch a.txt

# 返回到上层目录
$ cd ../

# 上层目录新建 aaa.txt
$ touch aaa.txt

# 清理 aaa 目录和 aaa.txt
# 或者 git clean -df
$ git clean -d -f
# 输出：
Removing aaa.txt
Removing aaa/
```

此时我们查看文件目录会发现 `aaa` 目录和 `aaa.txt` 文件都被清理掉了。

## 回滚清理

让当前工作目录回滚到上一次提交的状况，新添加的文件也被删除掉。

```bash
# 新增 aaa 目录和 aaa.txt 文件
$ mkdir aaa

$ touch aaa.txt

# 此时回退到上一次提交点
$ git reset --hard

# 让未追踪的目录和文件进行清理
$ git clean -df
# 输出：
Removing aaa.txt
Removing aaa/

$ git status
# 输出：
On branch master
nothing to commit, working tree clean
```

如果我们新建了很多文件在工作区，我们需要回退到上一个提交点，就可以使用 `git reset --hard` 命令回退，使用 `git clean -df` 命令清理掉未被跟踪的目录和文件。

此时建议运行 `git status`，会告诉你这是一个干净的工作目录, 又是一个新的开始了！

## 命令说明

| 命令 | 说明 |
| --- | --- |
| `git clean -n` | 告诉你哪些文件会被删除，它不会真正的删除文件，只是一个提醒。 |
| `git clean -d` | 删除未跟踪的目录。 |
| `git clean -f` | 删除当前目录下所有没有 track 过的文件。不会删除 `.gitignore` 文件里面指定的文件夹和文件, 不管这些文件有没有被 track 过。 |
| `git clean -f <path>` | 删除指定路径下的没有被 track 过的文件。 |
| `git clean -df` | 除当前目录下没有被 track 过的文件和文件夹。 |
| `git clean -xf` | 删除当前目录下所有没有 track 过的文件，不管是否是 `.gitignore` 文件里面指定的文件夹和文件。 |
| `git clean` | 对于刚编译过的项目也非常有用，如, 他能轻易删除掉编译后生成的 `.o` 和 `.exe` 等文件. 这个在打包要发布一个 `release`` 的时候非常有用。 |

<Alert type="error">
  注意，如果被删除的子文件夹中有 .git目录，那么会被忽略掉，如果想删除必须添加 -f 参数。
</Alert>
