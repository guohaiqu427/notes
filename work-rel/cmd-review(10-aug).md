# Command part 1 - local server and URLs

写出命令: 使用terminal 安装docker
写出命令: 使用terminal 安装 idk-ic-local
写出命令: 使用terminal 启动 trunk
写出命令: 使用terminal 启动 webedit
写出命令: 使用terminal 终止 local server
写出地址: 在 [browser]中打开某[branch/trunk]下的某环境[preview/local] 下的 某地区下的 [tw/hk/mo/.cn]的 [/..(.cn)/.../(aow/)]
写出地址: workshop中制定的url:

```
[x] brew install docker
[x] brew cask install docker
[x] brew install idk-ic-local
[x] ic-local start classic trunk / ictrunk
[x] ic-local start classic webedit
[x] ic-local stop
[x] ic-local stop webedit

[x] ictrunk.preview.apple.com.cn/apple-music
[x] ictrunk.preview.apple.com.cn/apple-music/aow

[x] webedit.preview.apple.com/hk/en/apple-music
[x] webedit.preview.apple.com/hk/en/apple-music

[x] ic-local.preview.apple.com/tw/apple-music
[x] ic-local.preview.apple.com/tw/apple-music
```
Evaluation Result:
1. watchout the prefix: ictrunk
```ictrunk.preview.apple.com```
2. when starting the local server, the argument trunk and ictrunk can both start the server for trunk
```ic-local start classic trunk``` = ```ic-local start classic ictrunk```

# Command part 2 - Work Envrioment setup

设置idk文件里默认地区和语言
拉取 applecom 主目录
写出更新文件目录的3种方式。
写出更新某个branch/trunk下各个locale下样式文件的命令
同时更新gc和us下的某个文件
更新出 apple-denali 文件

```
idk setup
svn co https://sourcebox.apple.com/repos/applecom 'applecom' --depth immediates
svn update xxx --set-depth infinity
svn update xxx --set-depth immediates
svn update xxx --set-depth empty
svn update cn/global-cn hk/global hk/en global tw/global mo/global --set-depth infinity
sco classic trunk apple-music
sco classic xxx yyy
```
Evaluation Result:
1. when update applecom file structure, the folder name 'applecom' has to be added.
    ```svn co https://sourcebox.apple.com/repos/applecom applecom --depth immediates```
2. the format for 'cn/global-cn' or 'cn/global-cn/' does not matter
    ```
    svn up cn/global-cn
    svn up cn/global-cn/
    ```

# Command part 3 - Colab

locked
status
multi-commands
delete
commit
merge
resolve VS revert
generate files

```
svn cleanup
svn st
cmd1 && cmd2 && cmd3
svn delete
svn del
svn remove
svn rm

svn commit -m 'someone asked to add images on webedit for HK by me'
svn commit -m 'someone asked to merge something from webedit to trunk for @xxx by me'

1. make sure the pwd is correct, which is the target file path
2. svn merge -r 000001:000003 $TRUNK/cn/webedit --accept tf
   svn merge $TRUNK/cn/webedit --accept tf
   svn merge ~Development/applecom/gc/trunk/cn/webedit --accept tf

svn resolve R --accept="working"
svn revert R .


review -r xxxxx
node contact.js xxxx
radar xxxx

```
Evaluation Result:
1. when resolve conflit, --accept='working'
2. when revert changes, revert everthing by adding (.) .
3. [Extra] when using code diff generater, (a)node v8, (b)npm link