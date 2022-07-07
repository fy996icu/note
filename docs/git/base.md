---
title: 基本操作
toc: menu
order: 3
---

<BackTop></BackTop>

# 基本操作

## 创建版本库

版本库又名仓库，英文名 `repository`，你可以简单理解成一个目录，这个目录里面的所有文件都可以被 Git 管理起来，每个文件的修改、删除，Git 都能跟踪，以便任何时刻都可以追踪历史，或者在将来某个时刻可以 "还原"。

使用 `git init` 命令创建一个名为 `test` 的版本库：

```bash

# 新建 test 目录
$ mkdir test

# 进入 test 目录
$ cd test

# 初始化版本库
$ git init

# 输出：
Initialized empty Git repository in /Users/fanyong/Desktop/Git/test/.git/
```

通过 `git init` 命令把 `test` 这个目录变成 Git 可以管理的仓库。

通过 `ls -al` 命令我们可以查看当前文件夹下的文件，我们会发现多了一个 `.git` 的目录，这个目录就是 Git 用来跟踪管理版本库的，不要轻易去动这个文件夹里面的文件，稍有不慎就可能把 Git 仓库给损坏了。

```bash
$ ls -al

# 输出
total 0
drwxr-xr-x  3 fanyong  staff   96  7  7 21:34 .
drwxr-xr-x  4 fanyong  staff  128  7  7 21:34 ..
drwxr-xr-x  9 fanyong  staff  288  7  7 21:34 .git
```

## 配置用户名和邮箱

版本库 `test` 我们也建好了，我们先设置 `用户名` 和 `邮箱`，这样每一个 Git 的提交都会使用这些信息，并且它会写入到你的每一次提交中。

### 全局配置

如果使用了 `--global` 选项，那么该命令只需要运行一次，因为之后无论你在该系统上做任何事情， Git 都会使用那些信息。

```bash
# 配置你的用户名
$ git config --global user.name "fanyong"

# 配置你的邮箱
$ git config --global user.email "2120084903@qq.com"
```

### 非全局配置

当你想针对特定项目使用不同的用户名称与邮件地址时，可以在那个项目目录下运行没有 `--global` 选项的命令来配置。

```bash
# 配置你的用户名
$ git config user.name "fanyong"

# 配置你的邮箱
$ git config user.email "2120084903@qq.com"
```

### 查看配置

```bash
$ git config --list

# 输出：
credential.helper=osxkeychain
url.https://github.com/.insteadof=git://github.com/
http.sslverify=true
core.repositoryformatversion=0
core.filemode=true
core.bare=false
core.logallrefupdates=true
core.ignorecase=true
core.precomposeunicode=true
user.name=fanyong
user.email=2120084903@qq.com
(END)
```

通过输出的内容可以看到 `user.name=fanyong` 和 `user.email=2120084903@qq.com` 都被设置上了，按 `Q` 键退出。

## 添加文件

版本库建好了我们就可以向里面添加文件了，通过 `git add 文件` 命令可以让新建的文件被 Git 跟踪。

<Tag>注意</Tag>：只有在版本库 `test` 目录下或者子目录的文件才会被 Git 跟踪管理，一定不要新建文件再版本库外面，那样是无效的，同时也不要把新建的文件放在 `.git` 目录。

```bash
# 新建 README.txt
$ touch README.txt

# vim 添加内容--云想衣裳花想容
$ vim README.txt

# 从工作区添加到暂存区
$ git add README.txt

# 提交到版本库
$ git commit -m '新增README.txt文件'
```

## 查看状态

通过 `git status` 可以查看哪些文件处于什么状态。

1、以下是没有任何修改和暂存的情况：

```bash
$ git status

# 输出
On branch master
nothing to commit, working tree clean
```

2、以下是有新增文件，但是没有添加到暂存区的情况：

```bash
$ git status

# 输出
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	a.txt

nothing added to commit but untracked files present (use "git add" to track)
```

3、以下是添加到暂存区，但是没有提交到版本库的情况：

```bash
$ git status

# 输出
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   a.txt
```

4、以下是修改版本库中文件，未提交的情况：

```bash
$ git status

# 输出
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   a.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

`git status` 命令的输出十分详细，但其用语有些繁琐。如果你使用 `git status -s` 命令或 `git status --short` 命令，你将得到一种更为紧凑的格式输出。运行 `git status -s`，状态报告输出如下:

```bash
$ git status

# 输出
 M README.txt
 M a.txt
?? b.txt
```

## 提交文件

`git add 文件` 命令是将文件添加到暂存区，还未提交搭配版本库，要将文件提交到版本库则使用 `git commit -m <message>` 命令。

简单解释一下 `git commit` 命令，`-m` 后面输入的是本次提交的说明，可以输入任意内容，当然最好是有意义的，这样你就能从历史记录里方便地找到改动记录。

```bash
# 新增 b.txt 文件
$ touch b.txt

# 添加到暂存区
$ git add b.txt

# 提交到版本库
git commit -m '新增b.txt文件'

# 输出：
[master 1f282c1] 新增b.txt文件
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 b.txt
```

`git commit` 命令成功后会告诉你：

`1 file changed`：1 个文件被改动(新增的 b.txt 文件)。

`0 insertions(+)`：插入了 0 行内容。

`0 deletions(-)`：删除了 0 行内容。

为什么 Git 添加文件需要 `git add`，`git commit` 一共两步呢？因为 `commit` 可以一次提交很多文件，所以你可以多次 `add` 不同的文件，比如：

```bash
$ git add a.txt
$ git add b.txt c.txt
$ git commit -m "新增了 3 个文件"
```

## 对比文件

通过 `git diff` 命令比较文件的不同，即比较文件在暂存区和工作区的差异。

`git diff` 命令显示已写入暂存区和已经被修改但尚未写入暂存区文件的区别。

### 1.对比工作区和暂存区中指定文件的差异

向 `README.txt` 中新增一句 `春风拂槛露华浓` 并提交到版本库，此时版本库中内容为：

```text
云想衣裳花想容
春风拂槛露华浓
```

对比工作区和暂存区指定文件差异：

```bash
# README.txt 新增 ”若非群玉山头见“
$ vim README.txt

# 将本次修改提交到暂存区
$ git add README.txt

# 查看暂存区 README.txt
$ cat README.txt
# 输出此时暂存区内容是：
云想衣裳花想容
春风拂槛露华浓
若非群玉山头见

# 再次更改工作区 README.txt 删除 ”若非群玉山头见“
$ vim README.txt

# 查看现在工作区的 README.txt
$ cat README.txt
# 输出此时工作区内容是：
云想衣裳花想容
春风拂槛露华浓

# 对比工作区和暂存区中 README.txt 的差异
$ git diff README.txt
# 输出：
diff --git a/README.txt b/README.txt
index c445e94..26034a3 100644
--- a/README.txt
+++ b/README.txt
@@ -1,3 +1,2 @@
 云想衣裳花想容
 春风拂槛露华浓
-若非群玉山头见
(END)
```

通过对比输出的信息可以看到 `若非群玉山头见` 前面有一个 `-` 号，表示当前工作区比暂存区少了该行内容。

工作区、暂存区、版本库此时 `README.txt` 的内容是：

```bash
# 工作区
云想衣裳花想容
春风拂槛露华浓

# 暂存区
云想衣裳花想容
春风拂槛露华浓
若非群玉山头见

# 版本库
云想衣裳花想容
春风拂槛露华浓

# 工作区和暂存区对比结果
 云想衣裳花想容
 春风拂槛露华浓
-若非群玉山头见
```

### 2.对比暂存区和版本库中指定文件的差异

工作区、暂存区、版本库此时 `README.txt` 的内容是：

```bash
# 工作区
云想衣裳花想容
春风拂槛露华浓

# 暂存区
云想衣裳花想容
春风拂槛露华浓
若非群玉山头见

# 版本库
云想衣裳花想容
春风拂槛露华浓
```

根据之前的 `README.txt` 文件内容对比暂存区和版本库的差异。

```bash

# 对比暂存区和版本库中 README.txt 的差异
$ git diff --cached README.txt

# 输出：
diff --git a/README.txt b/README.txt
index 26034a3..c445e94 100644
--- a/README.txt
+++ b/README.txt
@@ -1,2 +1,3 @@
 云想衣裳花想容
 春风拂槛露华浓
+若非群玉山头见
(END)
```

通过对比输出的信息可以看到 `若非群玉山头见` 前面有一个 `+` 号，表示当前暂存区比版本库多了该行内容。

### 3.对比工作区和版本库中（最近一次提交）指定文件的差异

更改 `README.txt` 文件使其版本库中的内容为以下所示：

```bash
想衣裳花想容
春风拂槛露华浓
若非群玉山头见
会向瑶台月下逢
```

修改 `README.txt` 内容：

```bash
# 删除之前的所有内容，再新增一句 "一枝红艳露凝香"
$ vim README.txt

# 查看工作区内容
$ cat README.txt
# 输出：一枝红艳露凝香

# 对比工作区和版本库中（最近一次提交）指定文件的差异
$ git diff HEAD README.txt

# 输出：
diff --git a/README.txt b/README.txt
index b9e0581..c1f973d 100644
--- a/README.txt
+++ b/README.txt
@@ -1,4 +1 @@
-云想衣裳花想容
-春风拂槛露华浓
-若非群玉山头见
-会向瑶台月下逢
+一枝红艳露凝香
(END)
```

通过对比输出的信息可以看到删除了 4 行，新增了 1 行。

工作区、版本库（最近一次提交）此时 README.txt 的内容是：

```bash
# 工作区
一枝红艳露凝香

# 版本库
想衣裳花想容
春风拂槛露华浓
若非群玉山头见
会向瑶台月下逢

# 对比结果
-云想衣裳花想容
-春风拂槛露华浓
-若非群玉山头见
-会向瑶台月下逢
+一枝红艳露凝香
```

### 总结

对比文件差异使用 `git diff` 命令，不同的参数比较不同区间的文件的版本差异。

- `git diff 文件名`：是比较 `工作区` 和 `暂存区` 中指定文件的差异。

- `git diff --cached 文件名`：是比较 `暂存区` 和 `版本库` 中指定文件的差异。

- `git diff HEAD 文件名`：是比较 `工作区` 和 `版本库` 中指定文件的差异，其中 `HEAD` 代表最近一次提交的信息。
