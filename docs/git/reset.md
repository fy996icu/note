---
title: 时光穿梭
toc: menu
order: 4
---

<BackTop></BackTop>

# 时光穿梭

Git 允许我们在不同的版本中来回穿梭 (`reset`)，可以撤销修改、删除与还原文件(`后悔药`)等。

## 版本回退

```bash
$ git reset
```

### 操作

在工作中会经常对文件进行修改，并且提交到版本库里面，每次提交会生成一个 `commit` ，相当于一个 `快照`。如果在后续的操作中你把文件搞乱了，或者是误删了文件，我们可以通过最近的一次 `commit` 恢复回来，从而继续工作，而不是丢失所有文件。

新增 `test.txt`，并相继提交三个版本，具体信息如下：

```bash

# 第一次提交
新建 test.txt，插入内容："新建test.txt，第一次提交"

# 第二次提交
修改 test.txt，追加内容："修改test.txt，第二次提交"

# 第三次提交
修改 test.txt，追加内容："修改test.txt，第三次提交"

# 最终 test.txt 文件内容：
新建test.txt，第一次提交
修改test.txt，第二次提交
修改test.txt，第三次提交

```

`git log test.txt` 查看 `test.txt` 文件的提交信息：

```bash
$ git log test.txt

# 输出：
commit 06a160d89553ed3e7463fcdb0a242ea194644af3 (HEAD -> master)
Author: fanyong <2120084903@qq.com>
Date:   Sat Jul 9 23:08:00 2022 +0800

    修改test.txt，第三次提交

commit f77f156c136593ba9526b7ca35fc4235b35c1e48
Author: fanyong <2120084903@qq.com>
Date:   Sat Jul 9 23:07:18 2022 +0800

    修改test.txt，第二次提交

commit 054a6fe11ede961ab6c7bf4a66eb425966b6cb82
Author: fanyong <2120084903@qq.com>
Date:   Sat Jul 9 23:06:12 2022 +0800

    新增test.txt，第一次提交
(END)
```

好了，现在我们时光穿梭，准备把 `test.txt` 回退到上一个版本，也就是 `修改test.txt，第二次提交` 的这个版本。

首先，Git 必须知道当前是哪个版本，在 Git 中，用 `HEAD` 来表示当前版本，也就是最新提交的 `06a160d8...`这个，上一个版本就是 `HEAD^`，上上一个版本就是 `HEAD^^`，当然往上 100 个版本写 100 个 `^` 比较容易数不过来，所以写成 `HEAD~100`。

现在我们将版本回退到 `修改test.txt，第二次提交` 的这个版本，可以使用 `git reste` 命令：

```bash
$ git reset --hard HEAD^

# 输出：
HEAD is now at f77f156 修改test.txt，第二次提交

# 查看 test.txt 内容
$ cat test.txt
# 输出：
新建test.txt，第一次提交
修改test.txt，第二次提交
```

通过输出信息我们看到 `test.txt` 确实被还原到上一次提交的版本了。

但是我们通过 `git log test.txt` 我们会发现 `修改test.txt，第三次提交` 这个 `commit` 不见了，如果要想回去，发现回不去了。

```bash
$ git log test.txt

# 输出：
commit f77f156c136593ba9526b7ca35fc4235b35c1e48 (HEAD -> master)
Author: fanyong <2120084903@qq.com>
Date:   Sat Jul 9 23:07:18 2022 +0800

    修改test.txt，第二次提交

commit 054a6fe11ede961ab6c7bf4a66eb425966b6cb82
Author: fanyong <2120084903@qq.com>
Date:   Sat Jul 9 23:06:12 2022 +0800

    新增test.txt，第一次提交
(END)
```

当然想要回去，办法还是有的，如果你的命令行工具没有关闭，我们可以向上找到 `修改test.txt，第三次提交` 这个 `commit id` 来回到这个版本。

<Alert type="info">
  注意，版本号没必要写全，前几位就可以了，Git会自动去找。当然也不能只写前一两位，因为Git可能会找到多个版本号，就无法确定是哪一个了。
</Alert>

```bash
$ git reset --hard 06a160d8

# 输出：
HEAD is now at 06a160d 修改test.txt，第三次提交

# 查看 test.txt 内容
cat test.txt
# 输出：
新建test.txt，第一次提交
修改test.txt，第二次提交
修改test.txt，第三次提交

# 查看日志
git log test.txt

# 输出:
commit 06a160d89553ed3e7463fcdb0a242ea194644af3 (HEAD -> master)
Author: fanyong <2120084903@qq.com>
Date:   Sat Jul 9 23:08:00 2022 +0800

    修改test.txt，第三次提交

commit f77f156c136593ba9526b7ca35fc4235b35c1e48
Author: fanyong <2120084903@qq.com>
Date:   Sat Jul 9 23:07:18 2022 +0800

    修改test.txt，第二次提交

commit 054a6fe11ede961ab6c7bf4a66eb425966b6cb82
Author: fanyong <2120084903@qq.com>
Date:   Sat Jul 9 23:06:12 2022 +0800

    新增test.txt，第一次提交
(END)
```

通过输出信息发现回到最新的版本了，文件内容也还原了。

Git 的版本回退速度非常快，因为 Git 在内部有个指向当前版本的 `HEAD` 指针，当你回退版本的时候，Git 仅仅是把 `HEAD` 从指向 `修改test.txt，第三次提交`。

如果找不到 `commit id` 了，Git 也是有办法让我们有后悔药吃的，当你用 `git reset --hard HEAD^` 回退到 `修改test.txt，第二次提交` 版本时，再想恢复到 `修改test.txt，第三次提交`，就必须找到 `修改test.txt，第三次提交` 的 `commit id`。Git 提供了一个命令 `git reflog` 用来记录你的每一次命令：

```bash
$ git reflog test.txt

# 输出：
06a160d (HEAD -> master) HEAD@{0}: reset: moving to 06a160d8
f77f156 HEAD@{1}: reset: moving to HEAD^
06a160d (HEAD -> master) HEAD@{2}: commit: 修改test.txt，第三次提交
f77f156 HEAD@{3}: commit: 修改test.txt，第二次提交
054a6fe HEAD@{4}: commit: 新增test.txt，第一次提交
(END)
```

于是乎我们可以发现 `修改test.txt，第三次提交` 的 `commit id` 是 `06a160d`，通过 `git reset --hard 06a160d8` 就可以回去啦。

### HEAD

- HEAD 表示当前版本。

- HEAD^ 上一个版本。

- HEAD^^ 上上一个版本。

- EAD^^^ 上上上一个版本。

- 以此类推...

可以使用 `～` 数字表示：

- HEAD~0 表示当前版本。

- HEAD~1 上一个版本。

- HEAD~2 上上一个版本。

- HEAD^2 上上一个版本。

- HEAD^3 上上上一个版本。

- 以此类推...

### 总结

- `HEAD` 指向的版本就是当前版本，因此，Git 允许我们在版本的历史之间穿梭，使用命令 `git reset --hard commit_id`。

- 穿梭前，用 `git log` 可以查看提交历史，以便确定要回退到哪个版本。

- 要重返未来，用 `git reflog` 查看命令历史，以便确定要回到未来的哪个版本。

## 修改暂存状态

有时候我们需要将添加到暂存区的状态撤销回来，我们依然使用 `git reset` 命令。

### 取消新添加文件的暂存状态
