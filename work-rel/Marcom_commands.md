# part1 : idk setup & update file structure
1. 设置idk文件里默认地区和语言 idk/.config  [IDK_LOCALE] [AC_REGION] [AC_COUNTRY] [AC_COUNTRIES]
	export IDK_LOCALE='en_US,en_HK,zh_CN,zh_HK,zh_MO,zh_TW'
	export AC_REGION='gc'
	export AC_COUNTRY='/'
	export AC_COUNTRIES='cn hk hk/en tw mo'

2. 拉取 applecom 主目录 [watcout: url does not ends with applecom, not applecom/] [watchout: it is --depth not --set-depth in svn co]
	svn co [url] applecom --depth immediates

3. set up file structures		[watchout hk/en] [use 'svn list / svn ls 'to help check the repo's file structure]
	svn update —set-depth immediates
	svn update —set-depth infinity
	svn update —set-depth empty

4. update icxx/webedit's style files + [各个文件下样式文件的位置以及命名] + [别忘记：hk/en/global]
	svn update cn/global-cn/ hk/global/ hk/en/global/ mo/global/ tw/global/ --set-depth infinity

5. 同时更新gc和us下某个branch/trunk 下的某个文件夹,重要的是 applecom 文件路径结构
	sco classic [trunk/branch] [folder name]
	https://sourcebox.apple.com/repos/applecom/us/branches/**webedit**/us/**airpods-pro**
	https://sourcebox.apple.com/repos/applecom/gc/branches/**webedit**/cn/**airpods-pro**

6. apple-denali
	sco classic [xx] [xx]
## part1 sum


# part2: merge
- useful svn commands
svn st 			 						: check local changes
svn cleanup					 			: solve locked error
cmd1 && cmd2 && cmd3					: multi commands
svn delete (del, remove, rm) 			: Delete an item from a working copy or the repository.
svn commit -m '...' | svn ci			: Send changes from your working copy to the repository.	[SomeOne ask to _added_ _xxx_ on _webedit_ for _HKEN_ by Sisi.]

todo: compare after the commit , check with beyond compare

- svn merge 							: Apply the differences between two sources to a working copy path.
	- 目录下运行
	- svn merge -r 929585: 972838 ~/Development/applecom/gc/trunk/cn/music/ --accept tf
	- svn merge ~/Development/applecom/gc/branches/ic65/hk/en/ipad hk/en/ipad -- accept tf

- resolve
svn resolve [							:  Resolve conflicts on working copy files or directories.
				--accept='working'  	: [**Manually handled the conflict**, working copy pirority]
				--recursive(R)	    	: [Makes a subcommand recurse into subdirectories. (Most subcommands recurse by default.)]
			]
svn resolve -R --accept='working'		: alias srr='svn resolve -R --accept='working'
svn revert -R .							: alias sre='svn revert -R .'

- tool commands
2466620 [2461589]				: generates GC_images-for-r2419949.pdf	[image changes]
review -r [2461589]						: generates diff-2461589.html 			[code difference]
radar [2461589]							: generates r2461589.txt 				[filechanges url changes]


# part3 : radar reply

rdar://93567483 (APPROVAL | Apple Music Live Homepage Tile for Harry Styles (5/20-5/21))

Merged from ic60 to trunk for HK/MO/TW.

Revision(s): 2419949

File(s) modified on trunk:
Modified_files_r2419949

ContactSheet attached: GC_images-for-r2419949.pdf
No images added.

Preview URL(s):



someone asked to add xxxx.image onwebedit for hk/en/mo/tw/hken by me