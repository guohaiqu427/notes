1. 写出命令: 使用terminal 安装docker			*brew cask install docker* / *brew install docker*
2. 写出命令: 使用terminal 安装 idk-ic-local 	*brew install idk-ic-local*
3. 写出命令: 使用terminal 启动 trunk			*ic-local start classic ictrunk*
   写出命令: 使用terminal 启动 webedit		    *ic-local start classic webedit*
4. 写出命令: 使用terminal 终止 local server		*ic-local stop [all/xxx]*
5. 写出地址: 在 [browser]中打开某[branch/trunk]下的某环境[preview/local] 下的 某地区下的 [tw/hk/mo/.cn]的 [/..(.cn)/.../(aow/)]
	webedit.preview.apple.com.cn/airpods/
	webedit.ic-local.apple.com.cn/airpods/
	ic10.preview.apple.com/tw/iphone/
	ic10.ic-local.apple.com/hk/en/iphone/
	ictrunk.preview.apple.com/hk/en/iphone/
	ictrunk.ic-local.apple.com.cn/airpods/aow/

   写出地址: workshop中制定的url:
	www-push-view.apple.com
	www-push-view.isww.apple.com
	www-push-view.apple.com/mo
	www-push-view.isww.apple.com.cn/xx

6. 写出名称: 在某页面上指出一下[terms] 对应的 [section]:
	- *Family Page,* Tab Page
	- *Local Nav, Product Nav*, Product Header, Secondary Nav
	- Ribbon
	- Hero Section
	- Hero Image
	- *Promo Tiles*, Buckets
	- *CTA* (Call to Action)
	- *Buystrip,* K2 Footer
	- *Footer* (Global Footer)
	- *Footnote / Legal / Sosumi* (So Sue Me)

7. 写出名称:在[apple.com]的页面中有调用不同的语言的本地化页面,写出我们工作范围中的[meta]中会调用到的[link]的[url]&[locale](注意格式)
	www.apple.com			en_US	[reference]
	www.apple.com.cn		zh_CN	[marcom]		[.cn]
	www.apple.com/hk		zh_HK	[marcom]		[zh:default]
	www.apple.com/hk/en 	en_HK	[marcom]		[ hk/en: one layer deeper]
	www.apple.com/mo  		zh_MO	[marcom]
	<!-- www.apple.com/mo/en en_MO		[marcom] --> [disabled]
	www.apple.com/tw 		zh_TW	[marcom]


8. 写出含义:在 large,medium,small 适配，写出在大中小屏幕中各种class的用法。[Grid
](https://standards.apple.com/system-library/#pattern-grid)
   如:在某元素上用什么classname可以使其在a.大屏幕上占比2/3 b.中屏占比1/2, c. 小屏占比100%。
   如:在某元素上用什么classname可以使其在a.大屏幕上居中等

    a. sizing:						 	large-6 medium-8 small-12
	b. Expand column sizing			 	*-grow
	c. Centered/Uncentered column		*-centered
	d. Offset column 					*-offset-# 						[margin-left]
	e. Order a column					*-(order)-#  					[*-(order)-0  means defualt order ]
	f. Last Column 						*-last
	g. Nesting Grids					.row > .column > .row > .column
	h. flex helper: 					.justify-content-[start/end/center/spacebetween/spacearound]
										.align-items-[start/end/center]
										.align-self-[start|center|end]
										.row-reverse

9. 描述在 HTML/CSS 文件中图片本地化的流程:
	> 本地化图片在前几年的时候，GC 所有语言都需要本地化。后来，
	>HKEN/HKTC/MO 的图大部分可以直接用美国，只有少部分需要本地化。
	>CN/TW 的图仍需要做较多的本地化工作。

	修改步骤:
	1. 根据美国路径中对应的图片的路径，在相对的文件下放入图片
	2. 修改 path的rules: a.参考美国 b.remove v & f(版本号)
	3. 检查，提交，告知 PM/GP

	注意点：
	4. 和美国保持一致
	5. styles folder 下有专门的 xxx.images.css 文件管理图片的样式
	6. 如果图片尺寸不同，则修改否则不修改
	7. lint： and( -> and ( ,导致safari 下 2x 调取失败
	8. style link placement:  us/built > cn/built > cn/images

10. Fonts: 在什么时候会调用pingfang字体？ 澳门的调用字体是什么？ 大陆的调用字体是什么？ 香港——中文的调用字体是什么？ 台湾的字体调用是什么？

	-sum: 1. 所有地区的页面中都要使用 EN fonts 以及其备用 font，且英文的fonts 分为标题和文本两类，区分使用
		  2. 所有地区的页面中都要使用 icon fonts
		  3. 中文（三种：简体/台湾/香港）没有澳门，澳门是调用香港和台湾两种，？那么这里的备用pingfang 为什么没有使用 "PingFang HK","PingFang TC",
		  4. 当当前页面中的字体出现确实的情况，会调用系统字体
		  5. 因为gc页面中也有英文，因此也需要调用英文的
		  6. 缺字：单独再引用一次:x + 位置/大小调整 + 上报 PM/字体团队 ～～～～～～～～～ QA tool 检查 / 肉眼可见，缺字的比较大


	-				US 			en_HK		zh_HK 		zh_MO 		zh_TW 		zh_CN
	- Heading 		1	   	 	1           5           4           3           2
	- Paragraph		a 			a 			e 			d 			c  			b
	- Missing								x 			x  			x 			x

		SF Pro 中文					 SF Pro 英文        	  Icons				系统字体-中文	     系统字体-英文
	1. 			   					"SF Pro Display",		"SF Pro Icons",			     			"Helvetica Neue","Helvetica","Arial",sans-serif;
	2. "SF Pro SC",					"SF Pro Display",		"SF Pro Icons",		"PingFang SC",	 	"Helvetica Neue","Helvetica","Arial",sans-serif;
	4. "SF Pro HK","SF Pro TC",		"SF Pro Display",		"SF Pro Icons",		"PingFang HK",	 	"Helvetica Neue","Helvetica","Arial",sans-serif;
	3. "SF Pro TC",					"SF Pro Display",		"SF Pro Icons",		"PingFang TC",	 	"Helvetica Neue","Helvetica","Arial",sans-serif;
	5. "SF Pro HK",					"SF Pro Display",		"SF Pro Icons",		"PingFang HK",		"Helvetica Neue","Helvetica","Arial",sans-serif;

	a. 								"SF Pro Text",	 		"SF Pro Icons",							"Helvetica Neue","Helvetica","Arial",sans-serif;
	b. "SF Pro SC",					"SF Pro Text",	 		"SF Pro Icons",    "PingFang SC",		"Helvetica Neue","Helvetica","Arial",sans-serif;
	c. "SF Pro TC",				 	"SF Pro Text",	 		"SF Pro Icons",    "PingFang TC", 		"Helvetica Neue","Helvetica","Arial",sans-serif;
	d. "SF Pro HK","SF Pro TC",		"SF Pro Text",	 		"SF Pro Icons",	   "PingFang HK",		"Helvetica Neue","Helvetica","Arial",sans-serif;
	e. "SF Pro HK",					"SF Pro Text",	 		"SF Pro Icons",	   "PingFang HK",		"Helvetica Neue","Helvetica","Arial",sans-serif;

	x:  lang(zh-CN) { font-family: "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif}
		lang(zh-HK) { font-family: "PingFang HK", "Helvetica Neue", "Helvetica", "Arial", sans-serif}
		lang(zh-TW) { font-family: "PingFang TC", "Helvetica Neue", "Helvetica", "Arial", sans-serif}
		lang(zh-MO) { font-family: "PingFang MO", "Helvetica Neue", "Helvetica", "Arial", sans-serif}

	example:

	<span class="pingfang">铥铥</span>
	.typography-show-title-copy span.pingfang:lang(zh-CN) {
    font-family: 'PingFang SC', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    font-size: 12px;
    position: relative;
    top: -1px;
	}

	@media only screen and (max-width: 734px) {
		.typography-show-title-copy span.pingfang:lang(zh-CN) {
			font-size: 10px; [reduced]
		}
	}

11. Text:  1. 有两种方法实现去掉标点居中的效果,如何实现？
				- position:absolute
				- add class cl_xx
					html[lang=zh-HK] .cl_05{
						padding-left: 0.5em;
					}
			2. 避免单字单行/特殊[短语/句子/链接]不换行如何实现？）
			   参考：Development/applecom/gc/trunk/hk/global/styles/sfpro-hk.css
					- 常见的有 br 调整和为需要的词添加 span 方法等。

				<h2 class="intro-headline typography-grid-headline">			 The simplicity
				    <p>The simplicity of&nbsp;Apple.<br>			  			    of Apple.
					    In&nbsp;a&nbsp;credit card.							    In a credit card.
					</p>
				</h2>
			3. 空格与括号等符号是英文的
			4. 标点符号、角标不能出现在段落开头。



12. 文件更新:
			TW/webedit/apple-music 文件夹内所有文件
			TW/webedit/global
			US/webedit/apple-music
			ac metric v global