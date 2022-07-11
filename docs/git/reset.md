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

有时候我们需要将添加到暂存区的状态撤销回来，我们依然使用 `git reset` 或者 `git restore` 命令。

### 取消工作区的修改

如果你在修改一份文件，觉得此次修改不满意想要取消所有修改，如果修改点少还可以自己手动删除修改，如果很多的话这个方式显然不现实，那么我们可以通过 `git restore <file>` 命令来丢弃工作区的修改。

```bash
$ cat README.txt
# 输出：
一枝红艳露凝香

# 新增一句：两个黄鹂鸣翠柳
$ vim README.txt
# 输出：
一枝红艳露凝香
两个黄鹂鸣翠柳

$ git status
# 输出：提示我们可以通过 git restore <file> 来取消工作区的修改
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   README.txt

no changes added to commit (use "git add" and/or "git commit -a")

# 取消工作区的修改
$ git restore README.txt

$ git status
# 输出：
On branch master
nothing to commit, working tree clean

$ cat README.txt
# 输出：
一枝红艳露凝香
```

通过最终的输出信息我们可以看到工作区的修改已经被取消，`README.txt` 中的 `两个黄鹂鸣翠柳` 被删除了。

<Badge>注意</Badge>低版本的 Git 可以使用 `git checkout -- <file>` 命令来丢弃工作区的修改。

```bash
# 取消工作区的修改
$ git checkout -- README.txt

$ git status
# 输出：
On branch master
nothing to commit, working tree clean

$ cat README.txt
# 输出：
一枝红艳露凝香
```

命令 `git checkout -- README.txt` 意思就是，把 `README.txt` 文件在工作区的修改全部撤销，这里有两种情况：

- 第一种：`README.txt` 自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态。

- 第二种：`README.txt` 已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。

总之，就是让这个文件回到最近一次 `git commit` 或 `git add` 时的状态。

`git checkout -- <file>` 命令中的 `--` 很重要，没有 `--`，就变成了"切换到另一个分支"的命令。

### 取消新添加文件的暂存状态

如果你不小心将一个新建的文件添加到了暂存区，并且这个文件只是临时使用，不希望它被跟踪暂存，那么我们也可以通过 `git reset` 或者 `git restore` 命令来取消暂存。

将一个新建 `new.txt` 文件添加到暂存区：

```bash
$ touch new.txt

# 添加到暂存区
$ git add new.txt
```

查看此时 Git 的情况：

```bash
$ git status

# 输出：
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   new.txt
```

通过输出信息可以知道暂存区已经有了 `new.txt`，并提示 `use "git restore --staged <file>..." to unstage`，我们可以使用 `git restore --staged <file>` 命令来取消 `new.txt` 的暂存状态。

旧版本的 Git 可能是提示 `use "git reset HEAD <file>..." to unstage` 命令来取消 `new.txt` 的暂存。

<Alert type="info">
  注意，Git 版本不同，提示使用命令不同。
</Alert>

取消暂存：

```bash
# 取消 new.txt 暂存
# 或者 git reset HEAD new.txt
$ git restore --staged new.txt

# 查看状态
$ git status

# 输出：
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	new.txt

nothing added to commit but untracked files present (use "git add" to track)
```

通过输出信息我们看到 `new.txt` 文件未被跟踪的状态了。

### 取消已经跟踪文件的暂存状态

如果修改了一个在版本库中的文件，且本次修改添加到了暂存区，我们想要撤销暂存和工作区修改，也可以使用 `git restore` 命令。

将版本库中 `new.txt` 内容修改为如下：

```bash
$ vim new.txt

$ git add new.txt

$ git commit -m 'new.txt文件新建,第一次提交'

# 查看内容
$ cat new.txt
# 输出：
new.txt文件新建,第一次提交
```

修改 `new.txt`，新增内容：

```bash
$ vim new.txt

$ git add new.txt

$ git status
# 输出：提示我们可以通过 git restore --staged <file> 取消暂存
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   new.txt

# 取消暂存
$ git restore --staged new.txt

$ cat new.txt
# 输出：我们取消了暂存，但是工作区修改还在
new.txt文件新建,第一次提交
new.txt文件修改,第二次暂存

$ git status
# 输出：提示我们可以通过 git restore <file> 取消工作区的修改
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   new2.txt

no changes added to commit (use "git add" and/or "git commit -a")

# 取消工作区的修改
$ git restore new.txt

$ git status
# 输出：工作区干净
On branch master
nothing to commit, working tree clean

$ cat new.txt
# 输出：工作区修改被清除
new.txt文件新建,第一次提交
```

步骤总结：

- 第一步：取消暂存 `git restore --staged <file>`。

- 第二步：取消工作区的修改 `git restore <file>`。

### 总结

- 情况一: 当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令 `git restore <file>` 或者 `git checkout -- <file>`。

- 情况二：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令 `git restore --staged <file>` 或者 `git reset HEAD <file>`，就回到了情况一，第二步按场情况一操作。

- 情况三：已经提交了不合适的修改到版本库时，想要撤销本次提交，不过前提是没有推送到远程库，可以通过 [版本回退](/git/reset#版本回退)(`git reset --hard <commit id>`)。

## 删除文件

在 Git 中，删除也是一个修改操作。

### 删除未被跟踪的文件

删除未被跟踪的文件相当简单，在资源管理器中直接删除，或者使用 `rm <file>` 命令。

```bash
# 删除 index.txt
rm index.txt
```

### 删除已被跟踪的文件

新建一个 `index.txt` 文件，并提交到版本库：

```bash
$ touch index.txt

$ git add index.txt

$ git commit -m '新增 index.txt'
```

一般情况下，你通常直接在文件管理器中把没用的文件删了，或者用 `rm` 命令删了：

```bash
# 删除 index.txt
$ rm index.txt
```

这个时候，Git 知道你删除了文件，因此，工作区和版本库就不一致了，`git status` 命令会立刻告诉你哪些文件被删除了：

```bash
# 删除 index.txt
$ rm index.txt

$ git status
# 输出：告诉我们 index.txt 被删除，git restore <file>命令可以恢复
On branch master
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	deleted:    index.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

此时虽然本地已经删除了 `index.txt`, 但是版本库中还没有删除，现在你有两个选择：

选择一：确实要从版本库中删除该文件，那就用命令 `git rm <file>` 删掉，并且 `git commit`。

```bash
# 删除 index.txt
$ rm index.txt

# 从版本库中删除 index.txt
$ git rm index.txt
# 输出：
rm 'index.txt'

$ git commit -m '删除 index.txt'
# 输出：
[master 5861aea] 删除 index.txt
 1 file changed, 0 insertions(+), 0 deletions(-)
 delete mode 100644 index.txt
```

通过输出信息我们可以看到版本库中的 `index.txt` 被删除掉了。

选择二：我们把文件删错了，因为版本库里还有呢，所以可以很轻松地把误删的文件恢复到最新版本：

```bash
# 误删了 index.txt
$ rm index.txt

$ git status
# 输出：
On branch master
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	deleted:    index.txt

no changes added to commit (use "git add" and/or "git commit -a")

# 恢复删除的文件
# 或者使用 git checkout -- index.txt
$ git restore index.txt
```

此时我们发现删除的 `index.txt` 又回来了。

<Alert type="error">
  注意，从来没有被添加到版本库就被删除的文件，是无法恢复的！
</Alert>

### 总结

命令 `git rm` 用于删除一个文件。如果一个文件已经被提交到版本库，那么你永远不用担心误删，但是要小心，你只能恢复文件到最新版本，你会丢失最近一次提交后你修改的内容。

先手动删除文件，然后使用 `git add <file>` 和 `git rm <file>` 效果是一样的

也是就是说删除文件有两种姿势：

姿势一：手动删除，再提交一次修改。

```bash
# 手动删除
$ rm index.txt

# 添加到暂存区
$ git add index.txt

$ git status
# 输出：
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	deleted:    index.txt

# 提交本次删除修改
git commit -m '删除 index.txt'
# 输出：
[master 476f91b] 删除 index.txt
 1 file changed, 0 insertions(+), 0 deletions(-)
 delete mode 100644 index.txt
```

姿势二：不使用本地删除，使用 `git rm` 命令删除。

```bash
# 删除 index.txt
$ git rm index.txt
# 输出：
rm 'index.txt'

$ git status
# 输出：
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	deleted:    index.txt

# 提交本次删除修改
$ git commit -m '删除 index.txt'
[master 61616b9] 删除 index.txt
 1 file changed, 0 insertions(+), 0 deletions(-)
 delete mode 100644 index.txt
```

## 文件回滚

有时候我们需要将某个文件回退到指定的版本，我们可以使用 `git reset <commit id> <file>` 命令。

新增 `study.txt` 文件并新增和修改一个提交四次，内容如下：

```bash
$ cat study.txt
# 输出：
新增study.txt文件
修改study.txt文件，第二次提交
修改study.txt文件，第三次提交
修改study.txt文件，第四次提交

$ git log --oneline study.txt
# 输出：
fa04776 (HEAD -> master) 修改study.txt文件，第四次提交
c49fd1e 修改study.txt文件，第三次提交
33fc0c9 修改study.txt文件，第二次提交
cf36a49 新增study.txt文档
(END)
```

现在我们需要将 `study.txt` 回滚到 `修改study.txt文件，第二次提交` 这个提交点：

```bash
# 1、查看 study.txtx 的提交日志，找到回滚点的 commit id
$ git log --oneline study.txt
# 输出：
fa04776 修改study.txt文件，第四次提交
c49fd1e 修改study.txt文件，第三次提交
33fc0c9 修改study.txt文件，第二次提交
cf36a49 新增study.txt文档
(END)

# 2、回滚到 33fc0c9 这个 commit id
$ git reset 33fc0c9 study.txt
# 输出：
Unstaged changes after reset:
M	study.txt

# 3、提交到本地仓库
$ git commit -m '回滚到修改study.txt文件，第二次提交'

# 4、更新到工作目录
$ git restore study.txt

# 5、查看内容
$ cat study.txt
# 输出：
新增study.txt文件
修改study.txt文件，第二次提交

# 6、提交到远程仓库
$ git push origin master
```

通过输出信息我们可知 `study.txt` 回退到了 `修改study.txt文件，第二次提交` 这个提交点。
