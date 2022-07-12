---
title: 分支管理
toc: menu
order: 7
---

<BackTop></BackTop>

# 分支管理

部分内容来自于 [廖雪峰 Git 教程](https://www.liaoxuefeng.com/wiki/896043488029600/900003767775424)。

项目分支就是版本库的一个副本，有了分支后可以把你的工作从开发主线上分离开来，以免影响开发主线。

Git 的分支是与众不同的，无论创建、切换和删除分支，Git 在 1 秒钟之内就能完成！无论你的版本库是 1 个文件还是 1 万个文件。

## 分支介绍

在 [版本回退](/git/reset#版本回退)里，已经知道，每次提交，Git 都把它们串成一条时间线，这条时间线就是一个分支。截止到目前，只有一条时间线，在 Git 里，这个分支叫 `主分支`，即 `master`(新版有些叫 `main`)分支。`HEAD` 严格来说不是指向提交，而是指向 `master`，`master` 才是指向提交的，所以，`HEAD` 指向的就是当前分支。

一开始的时候，`master` 分支是一条线，Git 用 `master` 指向最新的提交，再用 `HEAD` 指向 `master`，就能确定当前分支，以及当前分支的提交点：

![](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/git-branch.png)

每次提交，`master` 分支都会向前移动一步，这样，随着你不断提交，`master` 分支的线也越来越长。

当我们创建新的分支，例如 `dev` 时，Git 新建了一个指针叫 `dev`，指向 `master` 相同的提交，再把 `HEAD` 指向 `dev` ，就表示当前分支在 `dev` 上：

![](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/git-branch1.png)

你看，Git 创建一个分支很快，因为除了增加一个 `dev` 指针，改改 `HEAD` 的指向，工作区的文件都没有任何变化！

不过，从现在开始，对工作区的修改和提交就是针对 `dev` 分支了，比如新提交一次后，`dev` 指针往前移动一步，而 `master` 指针不变：

![](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/git-branch2.png)

假如我们在 `dev` 上的工作完成了，就可以把 `dev` 合并到 `master` 上。Git 怎么合并呢？最简单的方法，就是直接把 `master` 指向 `dev` 的当前提交，就完成了合并：

![](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/git-branch3.png)

合并完分支后，甚至可以删除 `dev` 分支。删除 `dev` 分支就是把 `dev` 指针给删掉，删掉后，我们就剩下了一条 `master` 分支：

## 创建分支

使用 `git branch <branch-name>` 命令创建分支，使用 `git checkout <branch-name>` 切换分支。

```bash
# 创建分支
$ git branch dev

# 切换分支
$ git checkout dev
# 输出：
Switched to branch 'dev'
```

以上两个命令可以合并为一个命令：`git checkout -b dev`，`-b` 表示创建分支，`checkout` 表示切换分支，总的意思就是创建 `dev` 分支，并切换到 `dev` 分支。

在 Git 新版本中我们还可以通过 `git switch -c dev` 来创建并切换到 `dev` 分支：

```bash
# 创建并切换分支
$ git switch -c dev
# 输出：
Switched to a new branch 'dev'

# 查看分支
$ git branch
# 输出：
* dev
  master
```

直接切换到已有的 `master` 分支，可以使用：

```bash
# 切换分支
$ git switch master
```

## 查看分支

创建好分支后我们可以通过 `git branch` 命令来查看分支。

```bash
# 查看分支
$ git branch
# 输出：
* dev
  master
```

通过输出的信息我们看到我们现在一共有两个分支，分别为 `master` 和 `dev`，细心的我们会发现 `dev` 前面有一个 `*` 号，这表示我们当前分支是 `dev`。

通过 `git branch -v` 可以查看所有分支及其每个分支中的最近的一次提交：

```bash
$ git branch -v
# 输出：
* dev    6287a4a 删除测试文件
  master 6287a4a 删除测试文件
```

通过输出信息可以看到每个分支的名字、commit id 和提交信息。

我们就可以在 `dev` 分支上正常提交，比如对 `README.txt` 文件新增一句 `云雨巫山枉断肠`。

```bash
$ vim README.txt

$ cat README.txt
# 输出：
一枝红艳露凝香
云雨巫山枉断肠

$ git add README.txt

$ git commit -m 'README.txt 新增诗句-云雨巫山枉断肠'
# 输出：
[dev 34a5da2] README.txt 新增诗句-云雨巫山枉断肠
 1 file changed, 1 insertion(+)
```

现在，`dev` 分支的工作完成，我们就可以切换回 `master` 分支：

```bash
$ git checkout master
# 输出：Switched to branch 'master'

# 查看 README.txt 内容
$ cat README.txt
# 输出：
一枝红艳露凝香
```

切换回 `master` 分支后，再查看一个 `README.txt` 文件，刚才添加的内容不见了！因为那个提交是在 `dev` 分支上，而 `master` 分支此刻的提交点并没有变：

![](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/git-branch4.png)

## 合并分支

通过之前的例子，我们在 `dev` 分支上面对 `README.txt` 文件新增了一句 `云雨巫山枉断肠`，然后我们切换到 `master` 分支后发现 `README.txt` 的修改不见了，因为那个提交是在 `dev` 分支上，而 `master` 分支此刻的提交点并没有变，于是乎我们可以通过 `git merge <branch-name>` 命令来合并分支。

```bash
# 合并分支
$ git merge dev
# 输出：
Updating 6287a4a..34a5da2
Fast-forward
 README.txt | 1 +
 1 file changed, 1 insertion(+)

# 查看 README.txt 文件
$ cat README.txt
# 输出：
一枝红艳露凝香
云雨巫山枉断肠
```

`git merge` 命令用于合并指定分支到当前分支。合并后，再查看 `README.txt` 的内容，就可以看到，和 `dev` 分支的最新提交是完全一样的。

注意到上面的 `Fast-forward` 信息，Git 告诉我们，这次合并是 “快进模式”，也就是直接把 `master` 指向 `dev` 的当前提交，所以合并速度非常快。

当然，也不是每次合并都能 `Fast-forward`，我们后面会讲其他方式的合并。

<Tag>注意</Tag>合并分支：

- 合并分支前，确保当前分支已经提交状态。

- 快速合并： 如果两个分支之间没有分叉，要被合并的分支提交比当前分支更新，那么只是 `HEAD` 指针的移动。

- 冲突解决： 如果合并的两个分支有分叉，那么自动添加一个新的提交，如果有冲突需要先解决完冲突然后再提交。

## 删除分支

当我们在 `dev` 分支上面完成了工作，并且合并到了 `master` 分支后，`dev` 分支就完成了它自己的使命，我们就可以删除它了。

删除分支使用 `git branch -d dev`:

```bash
# 删除分支
$ git branch -d dev
# 输出：
Deleted branch dev (was 34a5da2).

# 查看分支
$ git branch
# 输出：
* master
```

删除后，查看 branch，就只剩下 `master` 分支了。

<Alert type="info">
  注意，因为创建、合并和删除分支非常快，所以Git鼓励你使用分支完成某个任务，合并后再删掉分支，这和直接在master分支上工作效果是一样的，但过程更安全。
</Alert>

## 解决冲突

有时候我们合并分支并不是一帆风顺的，当两个分支修改了同一个文件的同一行，就可能造成冲突，此时我们就无法快速合并分支，合并分支之前我们还需要先解决冲突。

创造冲突：

```bash
# ------------- dev分支 ----------------

# 创建并切换到dev分支
$ git switch -c dev

# 查看 README.txt
$ cat README.txt
# 输出:
一枝红艳露凝香
云雨巫山枉断肠

# 修改 README.txt 第二句为 两个黄鹂鸣翠柳
vim README.txt

# 查看 README.txt
$ cat README.txt
# 输出：
一枝红艳露凝香
两个黄鹂鸣翠柳

$ git add README.txt

$ git commit -m 'README.txt 第二句修改为两个黄鹂鸣翠柳'
# 输出：
[dev af32ccb] README.txt 第二句修改为两个黄鹂鸣翠柳
 1 file changed, 1 insertion(+), 1 deletion(-)

# ------------- master分支 ----------------
# 切换到master分支
$ git switch master
# 输出：
Switched to branch 'master'

# 查看master分支下的 README.txt
$ cat README.txt
# 输出：
一枝红艳露凝香
云雨巫山枉断肠

# 修改 README.txt 第二句为 三辅风烟傍紫清
$ vim README.txt

# 查看 README.txt
$ cat README.txt
# 输出：
一枝红艳露凝香
三辅风烟傍紫清

$ git add README.txt

$ git commit -m 'README.txt 第二句修改为三辅风烟傍紫清'
# 输出：
[master b35d915] README.txt 第二句修改为三辅风烟傍紫清
 1 file changed, 1 insertion(+), 1 deletion(-)
```

现在，`master` 分支和 `dev` 分支各自都分别有新的提交，变成了这样：

![](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/git-branch5.png)

此时此刻 `dev` 和 `master` 分支上 `README.txt` 文件内容分别为：

```bash
# ------------- dev分支 ----------------

$ cat README.txt
# 输出：
一枝红艳露凝香
两个黄鹂鸣翠柳

# ------------- master分支 ----------------
$ cat README.txt
# 输出：
一枝红艳露凝香
三辅风烟傍紫清
```

我们在 `dev` 和 `master` 分支上面修改了 `README.txt` 文件的同一行，这种情况下，Git 无法执行 “快速合并”，只能试图把各自的修改合并起来，但这种合并就可能会有冲突，现在我们来合并 `dev` 分支试试。

```bash
# 合并dev分支
$ git merge dev
# 输出：
Auto-merging README.txt
CONFLICT (content): Merge conflict in README.txt
Automatic merge failed; fix conflicts and then commit the result.
```

出现这种情况则表示有冲突，冲突发生在 `README.txt` 文件，必须手动解决冲突后再提交。`git status` 也可以告诉我们冲突的文件：

```bash
$ git status
# 输出：
On branch master
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)
	both modified:   README.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

Git 还告诉我们可以使用 `git merge --abort` 命令停止合并，仓库和工作区会回到合并之前的状态。

现在我们查看 `README.txt` 文件：

```bash
# 查看冲突文件
$ cat README.txt
# 输出：
 一枝红艳露凝香
 <<<<<<< HEAD
 三辅风烟傍紫清
 =======
 两个黄鹂鸣翠柳
 >>>>>>> dev
```

通过查看 `README.txt` 内容我们可以发现 Git 给这个文件加了很多莫名其妙的符号，同时 `dev` 分支中的 `两个黄鹂鸣翠柳` 和 `master` 分支中的 `三辅风烟傍紫清` 都在里面。

那些莫名其妙的符号就是 Git 为我们标注的冲突的地方，Git 用 `<<<<<<<`，`=======`，`>>>>>>>`标记出不同分支的内容。

- 其中 `<<<<<<< HEAD` 和 `=======` 之间是当前 `HEAD` 指向的 `master` 分支中的修改内容。

- 其中 `=======` 和 `>>>>>>> dev` 之间是 `dev` 分支中修改的内容。

现在我们需要手动解决冲突，移除上面的 `<<<<<<< HEAD`、 `=======`、 `>>>>>>> dev` 然后留下自己想要的内容就完成了冲突解决，最后 `git add` 和 `git commit` 一下就可以了。

```bash
# 移除冲突符号留下想要的内容
$ vim README.txt

# 查看 README.txt
$ cat README.txt
# 输出：
一枝红艳露凝香
三辅风烟傍紫清
两个黄鹂鸣翠柳

$ git add README.txt

$ git commit -m '解决冲突'
# 输出：
[master bb6a50a] 解决冲突

$ git status
# 输出：
On branch master
nothing to commit, working tree clean
```

现在，`master` 分支和 `dev` 分支变成了下图所示：

![](https://cdn.jsdelivr.net/gh/fy996icu/pics/img/git-branch6.png)

用带参数的 `git log` 也可以看到分支的合并情况：

```bash
$ git log --oneline --graph
# 输出：
*   bb6a50a (HEAD -> master) 解决冲突
|\
| * af32ccb (dev) README.txt 第二句修改为两个黄鹂鸣翠柳
* | b35d915 README.txt 第二句修改为三辅风烟傍紫清
|/
* 34a5da2 README.txt 新增诗句-云雨巫山枉断肠
* 6287a4a 删除测试文件
* d93eb57 删除测试文件
* fa04776 修改study.txt文件，第四次提交
* c49fd1e 修改study.txt文件，第三次提交
* 33fc0c9 修改study.txt文件，第二次提交
* cf36a49 新增study.txt文档
```

完整的解决冲突的流程：

```bash
# 切换到主分支
$ git switch master

# 把dev分支的内容合并到主分支
$ git merge dev

# 如果产生冲突后,先修改文件，去掉冲突的符号。

# 最后提交修改到仓库
$ git add .
$ git commit -m '合并冲突'
```

<Alert type="info">
  提示，合并过程中，随时都可以停止合并，只需要 <strong style="color:#DD4A68">git merge abort</strong> ，仓库和工作去会回到合并之前的状态。
</Alert>

## 分支策略
