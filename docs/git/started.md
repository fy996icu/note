---
title: 快速上手
toc: menu
order: 2
---

<BackTop></BackTop>

# 快速上手

## 用户名和邮箱配置

当安装完 Git 应该做的第一件事就是设置你的 `用户名称` 与 `邮件地址` 。 这样做很重要，因为每一个 Git 的提交都会使用这些信息，并且它会写入到你的每一次提交中。

`Windows` 请从开始菜单程序中打开 `Gitbash`，其他系统请打开 `终端工具` 或者 `shell` 命令行工具。

```bash
# 配置你的用户名
$ git config --global user.name "fanyong"

# 配置你的邮箱
$ git config --global user.email "2120084903@qq.com"
```

如果使用了 `--global` 选项，那么该命令只需要运行一次，因为之后无论你在该系统上做任何事 情， Git 都会使用那些信息。 当你想针对特定项目使用不同的用户名称与邮件地址时，可以在那个项目目录下运 行没有 `--global` 选项的命令来配置。

```bash
# 配置你的用户名
$ git config user.name "fanyong"

# 配置你的邮箱
$ git config user.email "2120084903@qq.com"
```

## 查看配置

以上配置完成后，检测是否配置成功：

```bash
$ git config user.name

# 输出：fanyong


$ git config user.email

# 输出：2120084903@qq.com


$ git config --list

# 输出以下内容：
credential.helper=osxkeychain
user.name=fanyong
user.email=2120084903@qq.com
url.https://github.com/.insteadof=git://github.com/
http.sslverify=true
```

通过输出内容可以看到我们的 `user.name` 和 `user.email` 都已经设置上了。

## 配置 SSH

`Git` 服务器大部分都使用 `SSH` 公钥进行认证，其他认证方式都不方便，创建 `SSH` 公钥的方法。

默认情况下，用户的 `SSH` 密钥存储在其 `~/.ssh` 目录下。进入该目录并列出其中内容，你便可以快速确认自己是否已拥有密钥。

```bash
$ cd ~/.ssh
$ ls

# 输出
authorized_keys2  id_dsa       known_hosts
config            id_dsa.pub
```

> cd 命令可以帮助我们进入系统的某个目录。 ls 命令可以列出当前目录下面的所有文件和文件夹的信息。

如果已经存在 `id_dsa`、`id_dsa.pub`，说明就已经生成果，后面的步骤可以省略。

<Alert type="info">
  提示，<strong style="color:#d56161">id_dsa</strong> 或 <strong style="color:#d56161">id_rsa</strong> 命名的文件，其中一个带有 <strong style="color:#d56161">.pub</strong> 扩展名。 <strong style="color:#d56161">.pub</strong> 文件是你的公钥，另 一个则是私钥。
</Alert>

`ssh-keygen` 命令用于为 `ssh` 生成、管理和转换认证密钥，它支持 `RSA` 和 `DSA` 两种认证密钥。

```bash
$ ssh-keygen [选项]

# 选项解释
-b：指定密钥长度；
-e：读取openssh的私钥或者公钥文件；
-C：添加注释；
-f：指定用来保存密钥的文件名；
-i：读取未加密的ssh-v2兼容的私钥/公钥文件，然后在标准输出设备上显示openssh兼容的私钥/公钥；
-l：显示公钥文件的指纹数据；
-N：提供一个新密语；
-P：提供（旧）密语；
-q：静默模式；
-t：指定要创建的密钥类型。

# 生成ssh key的时候，可以通过 -f 选项指定生成文件的文件名，如下:

$ ssh-keygen -f test -C "test key"

# test 为秘钥文件名； test key为备注
```

快速生成默认的 `SSH`：

```bash
$ ssh-keygen

# 一路回车回车即可，以下为输出内容，仅供参考
Generating public/private rsa key pair.
Enter file in which to save the key (/root/.ssh/id_rsa):
/root/.ssh/id_rsa already exists.
Overwrite (y/n)? y
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /root/.ssh/id_rsa.
Your public key has been saved in /root/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:xFntIEM+aKyuc5dJmCvq1xnccqCaMAcK3kBClYXc/J0 root@localhost.localdomain
The key's randomart image is:
+---[RSA 2048]----+
|..o.*. .. ..     |
|.. + + +oo. .    |
|o     = Bo.o     |
|o.   + o E  .    |
|+.o +oo S        |
|+..+o+.o         |
|.oo oo=o         |
| ooooo+          |
|ooo+ .           |
+----[SHA256]-----+
```

首先 `ssh-keygen` 会确认密钥的存储位置(默认是 `.ssh/id_rsa`)，然后它会要求你输入两次密钥口令。如果你不想在使用密钥时输入口令，将其留空即可。
